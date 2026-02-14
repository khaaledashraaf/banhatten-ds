import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Icon } from "./icon";
import { Divider } from "./divider";

/* ── CVA ──
 * Token-only: spacing (py-md px-md, gap-md), bg (hover:bg-tertiary),
 * text (text-primary, text-inactive), icon (text-icon-primary, text-icon-inactive).
 * States: default, hover, disabled.
 */

const accordionTriggerVariants = cva(
  "flex w-full items-center gap-md py-md px-md text-left text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
  {
    variants: {
      disabled: {
        true:
          "cursor-default text-inactive pointer-events-none [&_*]:pointer-events-none [&_.accordion-expand-icon]:text-icon-inactive [&_.accordion-icon-left]:text-icon-inactive",
        false:
          "cursor-pointer hover:bg-tertiary [&_.accordion-expand-icon]:text-icon-primary [&_.accordion-icon-left]:text-icon-secondary",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

/* ── Contexts ── */

type AccordionType = "single" | "multiple";

interface AccordionContextValue {
  openKeys: Set<string>;
  onToggle: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

interface AccordionItemContextValue {
  value: string;
  disabled: boolean;
  showDivider: boolean;
  triggerId: string;
  contentId: string;
}

const AccordionItemContext = React.createContext<AccordionItemContextValue | null>(null);

function useAccordion() {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) throw new Error("Accordion components must be used within Accordion.");
  return ctx;
}

function useAccordionItem() {
  const ctx = React.useContext(AccordionItemContext);
  if (!ctx) throw new Error("AccordionTrigger/AccordionContent must be used within AccordionItem.");
  return ctx;
}

/* ── Helpers ── */

/** Normalize string | string[] into a Set<string>. */
function toSet(value: string | string[]): Set<string> {
  if (Array.isArray(value)) return new Set(value.filter(Boolean));
  return value ? new Set([value]) : new Set();
}

/* ── Accordion (root) ── */

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** "single" = one item open at a time; "multiple" = many. Default: "single". */
  type?: AccordionType;
  /** Controlled open value(s). "single" uses string; "multiple" uses string[]. */
  value?: string | string[];
  /** Default open value(s) when uncontrolled. */
  defaultValue?: string | string[];
  /** Called when open state changes. */
  onValueChange?: (value: string | string[]) => void;
  children: React.ReactNode;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      className,
      type = "single",
      value: controlledValue,
      defaultValue,
      onValueChange,
      children,
      ...props
    },
    ref
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState<
      string | string[]
    >(() => defaultValue ?? (type === "single" ? "" : []));

    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : uncontrolledValue;
    const openKeys = React.useMemo(() => toSet(value), [value]);

    const onToggle = React.useCallback(
      (key: string) => {
        let nextKeys: Set<string>;

        if (openKeys.has(key)) {
          nextKeys = new Set(openKeys);
          nextKeys.delete(key);
        } else {
          nextKeys = type === "single" ? new Set([key]) : new Set([...openKeys, key]);
        }

        const nextValue = type === "single"
          ? (Array.from(nextKeys)[0] ?? "")
          : Array.from(nextKeys);

        if (!isControlled) setUncontrolledValue(nextValue);
        onValueChange?.(nextValue);
      },
      [type, openKeys, isControlled, onValueChange]
    );

    const ctx = React.useMemo<AccordionContextValue>(
      () => ({ openKeys, onToggle }),
      [openKeys, onToggle]
    );

    return (
      <AccordionContext.Provider value={ctx}>
        <div ref={ref} className={cn("flex flex-col", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = "Accordion";

/* ── AccordionItem ── */

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Unique value for this item (used for open state and accessibility). */
  value: string;
  /** When true, trigger and content use disabled styling and are not expandable. */
  disabled?: boolean;
  /** When true, a Divider is shown between the trigger and content when expanded. */
  showDivider?: boolean;
  children: React.ReactNode;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  (
    { className, value, disabled = false, showDivider = false, children, ...props },
    ref
  ) => {
    const triggerId = React.useId();
    const contentId = React.useId();

    const itemCtx = React.useMemo<AccordionItemContextValue>(
      () => ({ value, disabled, showDivider, triggerId, contentId }),
      [value, disabled, showDivider, triggerId, contentId]
    );

    return (
      <AccordionItemContext.Provider value={itemCtx}>
        <div ref={ref} className={cn("flex flex-col", className)} data-value={value} {...props}>
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

/* ── AccordionTrigger ── */

export interface AccordionTriggerProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">,
    Omit<VariantProps<typeof accordionTriggerVariants>, "disabled"> {
  /** Optional icon or element shown to the left of the heading (e.g. info icon). */
  iconLeft?: React.ReactNode;
  /** Heading content (e.g. question text). */
  children: React.ReactNode;
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  (
    { className, disabled: propDisabled, iconLeft, children, ...props },
    ref
  ) => {
    const { openKeys, onToggle } = useAccordion();
    const { value, disabled: itemDisabled, triggerId, contentId } = useAccordionItem();
    const disabled = propDisabled ?? itemDisabled;
    const isExpanded = openKeys.has(value);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      onToggle(value);
      props.onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type="button"
        id={triggerId}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        aria-disabled={disabled ?? undefined}
        className={cn(accordionTriggerVariants({ disabled }), className)}
        onClick={handleClick}
        {...props}
      >
        {iconLeft != null && <span className="accordion-icon-left shrink-0">{iconLeft}</span>}
        <span className="min-w-0 flex-1">{children}</span>
        <Icon
          name={isExpanded ? "expand_less" : "expand_more"}
          size="sm"
          className="accordion-expand-icon shrink-0"
          aria-hidden
        />
      </button>
    );
  }
);

AccordionTrigger.displayName = "AccordionTrigger";

/* ── AccordionContent ── */

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    const { openKeys } = useAccordion();
    const { value, showDivider, triggerId, contentId } = useAccordionItem();
    const isExpanded = openKeys.has(value);

    if (!isExpanded) return null;

    return (
      <>
        {showDivider && <Divider className="my-0" />}
        <div
          ref={ref}
          id={contentId}
          role="region"
          aria-labelledby={triggerId}
          className={cn("py-md px-md text-secondary text-sm", className)}
          {...props}
        >
          {children}
        </div>
      </>
    );
  }
);

AccordionContent.displayName = "AccordionContent";

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  accordionTriggerVariants,
};
