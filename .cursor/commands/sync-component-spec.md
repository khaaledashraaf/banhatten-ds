# sync-component-spec

Description: Updates a component's library-agnostic JSON spec to match its current `.tsx` implementation.

---

## Inputs

- **Component name** or the currently open file in `packages/ui/src/components/`.
- If no component is specified, infer from the active editor file.

---

## Action Steps

1. **Identify the component.**
   - Derive the component name from the input or the open file path.
   - Locate the source file(s) at `packages/ui/src/components/<name>.tsx`.
   - For composed components, also read related sub-component files:
     - `sidebar.tsx` → also read `sidebar-menu-item.tsx`, `sidebar-submenu-item.tsx`, `sidebar-account-card.tsx`
     - `menu.tsx` → also read `menu-group.tsx`, `menu-heading.tsx`, `menu-item.tsx`
     - `breadcrumb.tsx` → also read `breadcrumb-item.tsx`
     - `button-group.tsx` → also read `button-group-item.tsx`
     - `slider.tsx` → also read `slider-handle.tsx`
     - `dropdown.tsx` → also read `dropdown-input.tsx`

2. **Read the existing spec** at `packages/ui/src/specs/<name>.json`.

3. **Read `packages/tokens/src/tokens.json`** to validate token references.

4. **Read `packages/ui/src/specs/button.json`** as the reference for spec format and conventions.

5. **Compare the source against the spec** and update the spec to reflect changes:
   - **base**: layout properties (display, alignment, font-weight, transition, etc.)
   - **variants**: color treatments per variant (bg, text, border, shadow, hover, active states). Each variant maps to `{alias.*}` tokens.
   - **sizes**: dimensional specs per size (height, paddingX, gap, fontSize, borderRadius). Use `{spacing.*}` and `{radius.*}` tokens where applicable, raw `px` values for fixed dimensions.
   - **states**: non-variant state styles (disabled, focused, error, hover, active).
   - **compoundVariants**: conditional overrides with `when`/`apply` structure.
   - **props**: public API definition (type, values, default, description).
   - **slots**: named insertion points (icons, labels, decorators) with position and sizing.
   - **subComponents**: nested component specs (same schema as parent).
   - **composition**: what other components this uses.
   - **accessibility**: ARIA roles and notes.
   - **defaults**: default variant/size values.

6. **Write the updated spec** back to `packages/ui/src/specs/<name>.json`.

7. **Validate** the output is well-formed JSON.

---

## Tailwind → Token Reference Mapping

When reading the `.tsx` source, convert Tailwind utility classes to library-agnostic token references:

### Colors (always use `{alias.*}`)
- `bg-brand` → `{alias.bg-brand}`
- `bg-component-button-brand-bg` → `{alias.component-button-brand-bg}`
- `text-on-color` → `{alias.text-on-color}`
- `text-primary` → `{alias.text-primary}`
- `border-strong` → `{alias.border-strong}`
- `text-icon-tertiary` → `{alias.icon-tertiary}`
- `shadow-xs` → `{shadow.xs}`

### Spacing (use `{spacing.*}`)
- `px-sm` → `{spacing.sm}`
- `px-md` → `{spacing.md}`
- `px-lg` → `{spacing.lg}`
- `px-xl` → `{spacing.xl}`
- `px-2xl` → `{spacing.2xl}`
- `gap-md` → `{spacing.md}`
- `py-md` → `{spacing.md}`
- `p-0.5` → `2px`

### Radius (use `{radius.*}`)
- `rounded-sm` → `{radius.sm}`
- `rounded-md` → `{radius.md}`
- `rounded-full` → `{radius.full}`
- `rounded-xs` → `{radius.xs}`

### Fixed dimensions (use raw `px`)
- `h-9` → `36px`
- `h-10` → `40px`
- `h-11` → `44px`
- `h-12` → `48px`
- `h-14` → `56px`
- `w-9` → `36px`
- `w-10` → `40px`
- `size-4` → `16px`
- `size-5` → `20px`
- `size-2xl` → `24px` (from spacing scale context)

### Typography (use raw values)
- `text-xs` → `12px`
- `text-sm` → `14px`
- `text-base` → `16px`
- `font-medium` → `500`
- `font-normal` → `400`

---

## Constraints

- **NEVER** use hex color values in the spec. Always reference `{alias.*}` tokens.
- **NEVER** use Tailwind classes in the spec. Always use resolved token references or raw CSS values.
- **NEVER** use library-specific syntax (Joy UI, MUI, Chakra, etc.).
- **DO** preserve the existing spec schema structure. Do not invent new top-level keys.
- **DO** keep `description` fields accurate and concise.
- **DO NOT** modify the component source file — only update the spec.
- **DO NOT** touch unrelated spec files.
