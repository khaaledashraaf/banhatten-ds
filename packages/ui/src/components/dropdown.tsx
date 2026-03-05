import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../lib/utils";
import { DropdownInput, type DropdownInputProps } from "./dropdown-input";
import { Menu } from "./menu";
import { MenuGroup } from "./menu-group";
import { MenuItem } from "./menu-item";
import { Icon } from "./icon";

/* ── Dropdown ──
 * Complete dropdown component combining trigger, popover positioning, and menu.
 * Uses DropdownInput as trigger, Radix Popover for positioning, Menu/MenuItem for options.
 * Supports single and multi-select modes.
 */

export interface DropdownOption {
  /** Unique value for the option */
  value: string;
  /** Display label for the option */
  label: string;
  /** Optional left icon (Material Symbol name) */
  leftIcon?: string;
  /** Whether this option is disabled */
  disabled?: boolean;
}

export interface DropdownProps
  extends Omit<DropdownInputProps, "value" | "open" | "onOpenChange" | "displayValue" | "showIndicator" | "indicatorCount"> {
  /** Array of options for simple usage */
  options?: DropdownOption[];
  /** Selected value (single select) or values (multi-select) */
  value?: string | string[];
  /** Callback when selection changes */
  onValueChange?: (value: string | string[]) => void;
  /** Enable multi-select mode */
  multiple?: boolean;
  /** Custom render for options (overrides options prop) */
  children?: React.ReactNode;
  /** Custom display value (overrides auto-generated display) */
  displayValue?: string;
  /** Width of the dropdown menu. Default: matches trigger width */
  menuWidth?: "trigger" | "auto" | number;
  /** Maximum height of the menu before scrolling. Default: 300 */
  maxHeight?: number;
  /** Align menu relative to trigger. Default: "start" */
  align?: "start" | "center" | "end";
  /** Side offset from trigger. Default: 4 */
  sideOffset?: number;
}

const Dropdown = React.forwardRef<HTMLButtonElement, DropdownProps>(
  (
    {
      options,
      value,
      onValueChange,
      multiple = false,
      children,
      displayValue: displayValueProp,
      menuWidth = "trigger",
      maxHeight = 300,
      align = "start",
      sideOffset = 4,
      placeholder = "Select an option",
      disabled,
      ...triggerProps
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const triggerRef = React.useRef<HTMLButtonElement>(null);
    const [triggerWidth, setTriggerWidth] = React.useState<number>(0);

    React.useImperativeHandle(ref, () => triggerRef.current!, []);

    React.useLayoutEffect(() => {
      if (triggerRef.current && menuWidth === "trigger") {
        setTriggerWidth(triggerRef.current.offsetWidth);
      }
    }, [menuWidth, open]);

    const selectedValues = React.useMemo(() => {
      if (value === undefined || value === null) return [];
      return Array.isArray(value) ? value : [value];
    }, [value]);

    const computedDisplayValue = React.useMemo(() => {
      if (displayValueProp) return displayValueProp;
      if (selectedValues.length === 0) return undefined;

      if (options) {
        const selectedLabels = selectedValues
          .map((v) => options.find((opt) => opt.value === v)?.label)
          .filter(Boolean);

        if (selectedLabels.length === 0) return undefined;
        if (selectedLabels.length === 1) return selectedLabels[0];
        return `${selectedLabels.length} selected`;
      }

      if (selectedValues.length === 1) return selectedValues[0];
      return `${selectedValues.length} selected`;
    }, [displayValueProp, selectedValues, options]);

    const handleSelect = React.useCallback(
      (optionValue: string) => {
        if (!onValueChange) return;

        if (multiple) {
          const newValues = selectedValues.includes(optionValue)
            ? selectedValues.filter((v) => v !== optionValue)
            : [...selectedValues, optionValue];
          onValueChange(newValues);
        } else {
          onValueChange(optionValue);
          setOpen(false);
        }
      },
      [onValueChange, selectedValues, multiple]
    );

    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === "Escape") {
          setOpen(false);
          triggerRef.current?.focus();
        }
      },
      []
    );

    const menuWidthValue =
      menuWidth === "trigger"
        ? triggerWidth
        : menuWidth === "auto"
          ? undefined
          : menuWidth;

    const showIndicator = multiple && selectedValues.length > 0;

    return (
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverPrimitive.Trigger asChild disabled={disabled}>
          <DropdownInput
            ref={triggerRef}
            open={open}
            onOpenChange={setOpen}
            value={selectedValues.length > 0 ? selectedValues : undefined}
            displayValue={computedDisplayValue}
            placeholder={placeholder}
            showIndicator={showIndicator}
            indicatorCount={selectedValues.length}
            disabled={disabled}
            {...triggerProps}
          />
        </PopoverPrimitive.Trigger>

        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            align={align}
            sideOffset={sideOffset}
            onKeyDown={handleKeyDown}
            className={cn(
              "z-50 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
              "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2"
            )}
            style={{
              width: menuWidthValue,
              minWidth: menuWidth === "auto" ? 200 : undefined,
            }}
          >
            <Menu
              role="listbox"
              aria-multiselectable={multiple}
              style={{ maxHeight, overflowY: "auto" }}
            >
              {children ?? (
                <MenuGroup>
                  {options?.map((option) => (
                    <DropdownItem
                      key={option.value}
                      value={option.value}
                      selected={selectedValues.includes(option.value)}
                      onSelect={handleSelect}
                      leftIcon={option.leftIcon}
                      disabled={option.disabled}
                      multiple={multiple}
                    >
                      {option.label}
                    </DropdownItem>
                  ))}
                </MenuGroup>
              )}
            </Menu>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    );
  }
);

Dropdown.displayName = "Dropdown";

/* ── DropdownItem ──
 * Individual selectable option within a Dropdown.
 * Can be used directly as children of Dropdown for custom layouts.
 */

export interface DropdownItemProps {
  /** Unique value for this option */
  value: string;
  /** Display content */
  children: React.ReactNode;
  /** Whether this option is currently selected */
  selected?: boolean;
  /** Callback when option is selected */
  onSelect?: (value: string) => void;
  /** Left icon (Material Symbol name) */
  leftIcon?: string;
  /** Whether this option is disabled */
  disabled?: boolean;
  /** Whether dropdown is in multi-select mode (shows checkbox) */
  multiple?: boolean;
  /** Additional class names */
  className?: string;
}

const DropdownItem = React.forwardRef<HTMLButtonElement, DropdownItemProps>(
  (
    {
      value,
      children,
      selected = false,
      onSelect,
      leftIcon,
      disabled = false,
      multiple = false,
      className,
    },
    ref
  ) => {
    const handleClick = React.useCallback(() => {
      if (!disabled) {
        onSelect?.(value);
      }
    }, [disabled, onSelect, value]);

    return (
      <MenuItem
        ref={ref}
        role="option"
        aria-selected={selected}
        active={selected && !multiple}
        disabled={disabled}
        leftIcon={multiple ? undefined : leftIcon}
        onClick={handleClick}
        className={className}
      >
        {multiple && (
          <span className="flex shrink-0 items-center justify-center w-5 h-5 mr-sm">
            <span
              className={cn(
                "flex items-center justify-center w-4 h-4 rounded-xs border transition-colors",
                selected
                  ? "bg-brand border-brand"
                  : "bg-component-input-bg border-strong",
                disabled && "opacity-50"
              )}
            >
              {selected && (
                <Icon
                  name="check"
                  size="xs"
                  className="text-on-color"
                  aria-hidden
                />
              )}
            </span>
          </span>
        )}
        <span className="flex-1">{children}</span>
        {!multiple && selected && (
          <Icon
            name="check"
            size="sm"
            className="text-brand shrink-0"
            aria-hidden
          />
        )}
      </MenuItem>
    );
  }
);

DropdownItem.displayName = "DropdownItem";

/* ── DropdownGroup ──
 * Group options with an optional heading.
 * Re-exports MenuGroup with dropdown-specific defaults.
 */

export interface DropdownGroupProps {
  /** Optional section heading */
  heading?: React.ReactNode;
  /** DropdownItem children */
  children: React.ReactNode;
  /** ID for accessibility (aria-labelledby) */
  headingId?: string;
  /** Additional class names */
  className?: string;
}

const DropdownGroup = React.forwardRef<HTMLDivElement, DropdownGroupProps>(
  ({ heading, children, headingId, className }, ref) => {
    return (
      <MenuGroup
        ref={ref}
        heading={heading}
        headingId={headingId}
        className={className}
      >
        {children}
      </MenuGroup>
    );
  }
);

DropdownGroup.displayName = "DropdownGroup";

export { Dropdown, DropdownItem, DropdownGroup };
