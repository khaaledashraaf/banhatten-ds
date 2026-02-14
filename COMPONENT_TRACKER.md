# Banhatten Design System — Component Tracker

> Auto-generated from Figma file: **Banhaten design system - 2.5**
>
> Use this checklist to track which components have been implemented in `packages/ui/src/components/`.

---

## Core Components

- [x] **Avatar** — `avatar.tsx` · Shapes: circle, rounded · Sizes: xs, sm, md, lg, xl, 2xl, 3xl, 4xl · Types: initials (up to 2 chars), icon (person fallback) · Optional username + supportingText beside avatar (text-primary / text-secondary, gap-md) · Token-only · Optional aria-label for role="img" when meaningful
- [x] **Avatar Group** — `avatar-group.tsx` · Stack of AvatarProfile (not Avatar) · Sizes: 24, 32, 40 px · lastOnTop (true/false) · moreAvatars: "+N" overflow (bg-tertiary, border-subtract) · addMore: dashed circle (border-dashed border-strong, bg-transparent, text-icon-tertiary), filled add Icon · avatars (initials/aria-label), maxVisible · Token-only · role="group", aria-label; Add button aria-label
- [x] **Avatar Profile** — `avatar-profile.tsx` · Composes Avatar with border (border-subtract), shadow (shadow-sm), no padding between avatar and border · Shapes: circle, rounded · Sizes passed through to Avatar (xs–4xl) · Optional topRight and bottomRight badge slots (ReactNode) · Initials/icon only (no image) · Badge slots aria-hidden; pass aria-label to Avatar when meaningful
- [x] **Alert** — `alert.tsx` · Types: info, success, warning, danger, neutral · Emphasis: low, medium, moderate, high · Expand: false, true (adds description and action buttons) · Preset icons based on type · Optional close button with onClose callback · Action buttons shown when expand=true · Title promotes to font-medium when description is visible · High-emphasis neutral uses light bg with standard text colors (not on-color)
- [ ] **Accordion**
- [x] **Badge** — `badge.tsx` · Variants: filled, light, outlined, with dot, with icon (left/right) · Colors: brand, neutral, success, warning, danger, info · Sizes: sm, lg
- [x] **Button** — `button.tsx` · Variants: primary, secondary, tertiary, danger, link, link-brand · Sizes: xs, md, lg, xl, 2xl · Supports left/right icons · Icon-only mode via `icon` prop (square buttons, all sizes)
- [x] **Icon Button** — Implemented via `Button` component with `icon` prop · Square icon-only buttons · Variants: primary, secondary, tertiary, danger · Sizes: xs, md, lg, xl, 2xl · Requires `aria-label` for accessibility
- [x] **Close Button** — `close-button.tsx` · Variants: ghost, outlined · Sizes: sm (24px), md (32px), lg (40px), xl (48px) · States: default, hover, pressed, disabled · rounded-full, token-only · Default aria-label="Close"; override for context (e.g. "Close alert", "Remove tag")
- [ ] **Social Buttons**
- [ ] **Button Group**
- [x] **Checkbox** — `checkbox.tsx` + `checkbox-card.tsx` · States: unchecked, checked, indeterminate, disabled, hover, focus · Checkbox with optional label + support text · CheckboxCard with optional icon, description, leading/trailing position
- [x] **Divider** — `divider.tsx` · Orientation: horizontal, vertical · Variants: solid, dashed
- [x] **Menu** — `menu.tsx` · Container for one or more MenuGroup · Inserts Divider (my-sm) between groups · Token-only: rounded-sm, bg-primary, py-md px-sm, shadow-sm · forwardRef, div root
- [x] **Menu Item** — `menu-item.tsx` · Types: default, multiline, callToAction, progress · States: default, hover, disabled, active (bg-brand-tertiary, text-brand, aria-current="page") · Slots: leftIcon, rightIcon, avatar, badge, switch (showSwitch/switchChecked/onSwitchChange), textRight, cta, progress (progressLabel/progressValue) · Token-only · forwardRef, button root, focus-visible ring, aria-disabled
- [x] **Menu Heading** — `menu-heading.tsx` · Non-interactive section label for menu groups · px-md py-xs, text-sm font-medium text-tertiary · Token-only · forwardRef, div root
- [x] **Menu Group** — `menu-group.tsx` · One optional MenuHeading (max), one or more MenuItem · Spacing: mb-sm between heading and items (token) · role="group", optional headingId for aria-labelledby · Token-only · forwardRef, div root
- [ ] **Dropdown Input**
- [x] **Text Input** — `input.tsx` · Sizes: sm, md, lg · States: default, focused, error, disabled · Supports label, optional indicator, helperText with icon, errorMessage · Left/right icons (Material Symbols) · Character counter (maxLength) · Focus ring with Figma-matched inset border · Presets: user, email, password (with toggle), date, amount (clearable), description, search (clearable) · shadow-xs
- [x] **Text Area** — `textarea.tsx` · States: default, focused, error, disabled · Supports label, optional indicator with info icon, helperText with icon, errorMessage · Character counter (maxLength) · Focus ring with Figma-matched inset border · Multi-line text input with configurable rows · shadow-xs
- [ ] **Pagination**
- [x] **Progress Bar** — `progress-bar.tsx` · Sizes: sm, lg · Colors: brand, success, danger, info, neutral · value 0–100 (omit for indeterminate) · Optional label, showLabelInfoIcon, helperText, showValue, onRefresh (value + refresh icon) · role="progressbar", aria-valuenow/valuemin/valuemax/valuetext · Token-only
- [x] **Radio** — `radio.tsx` + `radio-card.tsx` · States: unchecked, checked, disabled, hover, focus · Radio with optional label + support text · RadioCard with optional icon, description, leading/trailing position
- [ ] **Slider**
- [x] **Tag / Chip** — `tag.tsx` · Types: simple, with-dot, with-icon (left only) · States: default, hover, focus, active, disabled · Sizes: small, large · Optional close button with onClose callback · Border radius: sm (8px) · Unified color system with bg-primary base
- [x] **Tooltip** — `tooltip.tsx` · Sizes: small (single line), large (title + subtitle) · Styles: dark, light (bg/text) · Position: bottom center · TooltipProvider, TooltipTrigger, TooltipContent · Radix-based; role="tooltip", aria-describedby on trigger
- [x] **Toggle** — `toggle.tsx` · Sizes: sm, md · States: default, hover, pressed (focus), disabled · Active: on/off (checked) · Optional label and support text with togglePosition leading/trailing · With icon: check when on, close when off (Material Symbols on thumb) · role="switch", focus ring, token-only styling

## Product Components

- [ ] **Top Bar Navigation**
- [ ] **Sidebar Navigation**
- [ ] **Tabs**
- [ ] **Modal**
- [ ] **Content Divider**
- [ ] **Tables**
- [ ] **Banner**
- [ ] **Breadcrumbs**
- [ ] **Chat**
- [ ] **Section Header**
- [ ] **Notification**
- [ ] **Page Header**
- [ ] **Cards**
- [ ] **Credit Card Form**
- [ ] **Feed**
- [ ] **File Upload** — includes File Upload, File Upload Compact, File Presentation
- [ ] **Toolbar**
- [ ] **Attributes**
- [ ] **Steps**
- [ ] **Chart**
- [ ] **Slideout**
- [ ] **Command Bar**
- [ ] **Date Picker**
- [ ] **Player**

## Utility / Sub-components

- [ ] **Featured Icon**
- [ ] **File Icon**
- [ ] **Social Icon**

## Landing Page Blocks

- [ ] **Hero**
- [ ] **Stats**
- [ ] **Logos**
- [ ] **Feature**
- [ ] **Bento**
- [ ] **Blog**
- [ ] **CTA**
- [ ] **Testimonial**
- [ ] **Team**
- [ ] **Pricing**
- [ ] **Newsletter**
- [ ] **FAQ**
- [ ] **Footer**

---

### Progress

**Built:** 21 / 59
