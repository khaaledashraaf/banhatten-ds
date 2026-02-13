import { Section } from "./section";

// ============================================================================
// Brand Color Scales
// ============================================================================
const brandColorScales = [
  {
    name: "Neutral",
    colors: [
      { shade: "950", className: "bg-brand-neutral-950" },
      { shade: "900", className: "bg-brand-neutral-900" },
      { shade: "800", className: "bg-brand-neutral-800" },
      { shade: "700", className: "bg-brand-neutral-700" },
      { shade: "600", className: "bg-brand-neutral-600" },
      { shade: "500", className: "bg-brand-neutral-500" },
      { shade: "400", className: "bg-brand-neutral-400" },
      { shade: "300", className: "bg-brand-neutral-300" },
      { shade: "200", className: "bg-brand-neutral-200" },
      { shade: "100", className: "bg-brand-neutral-100" },
      { shade: "50", className: "bg-brand-neutral-50" },
      { shade: "25", className: "bg-brand-neutral-25" },
    ],
  },
  {
    name: "Primary",
    colors: [
      { shade: "950", className: "bg-brand-primary-950" },
      { shade: "900", className: "bg-brand-primary-900" },
      { shade: "800", className: "bg-brand-primary-800" },
      { shade: "700", className: "bg-brand-primary-700" },
      { shade: "600", className: "bg-brand-primary-600" },
      { shade: "500", className: "bg-brand-primary-500" },
      { shade: "400", className: "bg-brand-primary-400" },
      { shade: "300", className: "bg-brand-primary-300" },
      { shade: "200", className: "bg-brand-primary-200" },
      { shade: "100", className: "bg-brand-primary-100" },
      { shade: "50", className: "bg-brand-primary-50" },
    ],
  },
  {
    name: "Success",
    colors: [
      { shade: "950", className: "bg-brand-success-950" },
      { shade: "900", className: "bg-brand-success-900" },
      { shade: "800", className: "bg-brand-success-800" },
      { shade: "700", className: "bg-brand-success-700" },
      { shade: "600", className: "bg-brand-success-600" },
      { shade: "500", className: "bg-brand-success-500" },
      { shade: "400", className: "bg-brand-success-400" },
      { shade: "300", className: "bg-brand-success-300" },
      { shade: "200", className: "bg-brand-success-200" },
      { shade: "100", className: "bg-brand-success-100" },
      { shade: "50", className: "bg-brand-success-50" },
    ],
  },
  {
    name: "Warning",
    colors: [
      { shade: "950", className: "bg-brand-warning-950" },
      { shade: "900", className: "bg-brand-warning-900" },
      { shade: "800", className: "bg-brand-warning-800" },
      { shade: "700", className: "bg-brand-warning-700" },
      { shade: "600", className: "bg-brand-warning-600" },
      { shade: "500", className: "bg-brand-warning-500" },
      { shade: "400", className: "bg-brand-warning-400" },
      { shade: "300", className: "bg-brand-warning-300" },
      { shade: "200", className: "bg-brand-warning-200" },
      { shade: "100", className: "bg-brand-warning-100" },
      { shade: "50", className: "bg-brand-warning-50" },
    ],
  },
  {
    name: "Danger",
    colors: [
      { shade: "950", className: "bg-brand-danger-950" },
      { shade: "900", className: "bg-brand-danger-900" },
      { shade: "800", className: "bg-brand-danger-800" },
      { shade: "700", className: "bg-brand-danger-700" },
      { shade: "600", className: "bg-brand-danger-600" },
      { shade: "500", className: "bg-brand-danger-500" },
      { shade: "400", className: "bg-brand-danger-400" },
      { shade: "300", className: "bg-brand-danger-300" },
      { shade: "200", className: "bg-brand-danger-200" },
      { shade: "100", className: "bg-brand-danger-100" },
      { shade: "50", className: "bg-brand-danger-50" },
    ],
  },
  {
    name: "Info",
    colors: [
      { shade: "950", className: "bg-brand-info-950" },
      { shade: "900", className: "bg-brand-info-900" },
      { shade: "800", className: "bg-brand-info-800" },
      { shade: "700", className: "bg-brand-info-700" },
      { shade: "600", className: "bg-brand-info-600" },
      { shade: "500", className: "bg-brand-info-500" },
      { shade: "400", className: "bg-brand-info-400" },
      { shade: "300", className: "bg-brand-info-300" },
      { shade: "200", className: "bg-brand-info-200" },
      { shade: "100", className: "bg-brand-info-100" },
      { shade: "50", className: "bg-brand-info-50" },
    ],
  },
  {
    name: "Sky",
    colors: [
      { shade: "950", className: "bg-brand-sky-950" },
      { shade: "900", className: "bg-brand-sky-900" },
      { shade: "800", className: "bg-brand-sky-800" },
      { shade: "700", className: "bg-brand-sky-700" },
      { shade: "600", className: "bg-brand-sky-600" },
      { shade: "500", className: "bg-brand-sky-500" },
      { shade: "400", className: "bg-brand-sky-400" },
      { shade: "300", className: "bg-brand-sky-300" },
      { shade: "200", className: "bg-brand-sky-200" },
      { shade: "100", className: "bg-brand-sky-100" },
      { shade: "50", className: "bg-brand-sky-50" },
    ],
  },
  {
    name: "Teal",
    colors: [
      { shade: "950", className: "bg-brand-teal-950" },
      { shade: "900", className: "bg-brand-teal-900" },
      { shade: "800", className: "bg-brand-teal-800" },
      { shade: "700", className: "bg-brand-teal-700" },
      { shade: "600", className: "bg-brand-teal-600" },
      { shade: "500", className: "bg-brand-teal-500" },
      { shade: "400", className: "bg-brand-teal-400" },
      { shade: "300", className: "bg-brand-teal-300" },
      { shade: "200", className: "bg-brand-teal-200" },
      { shade: "100", className: "bg-brand-teal-100" },
      { shade: "50", className: "bg-brand-teal-50" },
    ],
  },
  {
    name: "Lime",
    colors: [
      { shade: "950", className: "bg-brand-lime-950" },
      { shade: "900", className: "bg-brand-lime-900" },
      { shade: "800", className: "bg-brand-lime-800" },
      { shade: "700", className: "bg-brand-lime-700" },
      { shade: "600", className: "bg-brand-lime-600" },
      { shade: "500", className: "bg-brand-lime-500" },
      { shade: "400", className: "bg-brand-lime-400" },
      { shade: "300", className: "bg-brand-lime-300" },
      { shade: "200", className: "bg-brand-lime-200" },
      { shade: "100", className: "bg-brand-lime-100" },
      { shade: "50", className: "bg-brand-lime-50" },
    ],
  },
  {
    name: "Yellow",
    colors: [
      { shade: "950", className: "bg-brand-yellow-950" },
      { shade: "900", className: "bg-brand-yellow-900" },
      { shade: "800", className: "bg-brand-yellow-800" },
      { shade: "700", className: "bg-brand-yellow-700" },
      { shade: "600", className: "bg-brand-yellow-600" },
      { shade: "500", className: "bg-brand-yellow-500" },
      { shade: "400", className: "bg-brand-yellow-400" },
      { shade: "300", className: "bg-brand-yellow-300" },
      { shade: "200", className: "bg-brand-yellow-200" },
      { shade: "100", className: "bg-brand-yellow-100" },
      { shade: "50", className: "bg-brand-yellow-50" },
    ],
  },
  {
    name: "Indigo",
    colors: [
      { shade: "950", className: "bg-brand-indigo-950" },
      { shade: "900", className: "bg-brand-indigo-900" },
      { shade: "800", className: "bg-brand-indigo-800" },
      { shade: "700", className: "bg-brand-indigo-700" },
      { shade: "600", className: "bg-brand-indigo-600" },
      { shade: "500", className: "bg-brand-indigo-500" },
      { shade: "400", className: "bg-brand-indigo-400" },
      { shade: "300", className: "bg-brand-indigo-300" },
      { shade: "200", className: "bg-brand-indigo-200" },
      { shade: "100", className: "bg-brand-indigo-100" },
      { shade: "50", className: "bg-brand-indigo-50" },
    ],
  },
  {
    name: "Purple",
    colors: [
      { shade: "950", className: "bg-brand-purple-950" },
      { shade: "900", className: "bg-brand-purple-900" },
      { shade: "800", className: "bg-brand-purple-800" },
      { shade: "700", className: "bg-brand-purple-700" },
      { shade: "600", className: "bg-brand-purple-600" },
      { shade: "500", className: "bg-brand-purple-500" },
      { shade: "400", className: "bg-brand-purple-400" },
      { shade: "300", className: "bg-brand-purple-300" },
      { shade: "200", className: "bg-brand-purple-200" },
      { shade: "100", className: "bg-brand-purple-100" },
      { shade: "50", className: "bg-brand-purple-50" },
    ],
  },
  {
    name: "Fuchsia",
    colors: [
      { shade: "950", className: "bg-brand-fuchsia-950" },
      { shade: "900", className: "bg-brand-fuchsia-900" },
      { shade: "800", className: "bg-brand-fuchsia-800" },
      { shade: "700", className: "bg-brand-fuchsia-700" },
      { shade: "600", className: "bg-brand-fuchsia-600" },
      { shade: "500", className: "bg-brand-fuchsia-500" },
      { shade: "400", className: "bg-brand-fuchsia-400" },
      { shade: "300", className: "bg-brand-fuchsia-300" },
      { shade: "200", className: "bg-brand-fuchsia-200" },
      { shade: "100", className: "bg-brand-fuchsia-100" },
      { shade: "50", className: "bg-brand-fuchsia-50" },
    ],
  },
  {
    name: "Pink",
    colors: [
      { shade: "950", className: "bg-brand-pink-950" },
      { shade: "900", className: "bg-brand-pink-900" },
      { shade: "800", className: "bg-brand-pink-800" },
      { shade: "700", className: "bg-brand-pink-700" },
      { shade: "600", className: "bg-brand-pink-600" },
      { shade: "500", className: "bg-brand-pink-500" },
      { shade: "400", className: "bg-brand-pink-400" },
      { shade: "300", className: "bg-brand-pink-300" },
      { shade: "200", className: "bg-brand-pink-200" },
      { shade: "100", className: "bg-brand-pink-100" },
      { shade: "50", className: "bg-brand-pink-50" },
    ],
  },
  {
    name: "Rose",
    colors: [
      { shade: "950", className: "bg-brand-rose-950" },
      { shade: "900", className: "bg-brand-rose-900" },
      { shade: "800", className: "bg-brand-rose-800" },
      { shade: "700", className: "bg-brand-rose-700" },
      { shade: "600", className: "bg-brand-rose-600" },
      { shade: "500", className: "bg-brand-rose-500" },
      { shade: "400", className: "bg-brand-rose-400" },
      { shade: "300", className: "bg-brand-rose-300" },
      { shade: "200", className: "bg-brand-rose-200" },
      { shade: "100", className: "bg-brand-rose-100" },
      { shade: "50", className: "bg-brand-rose-50" },
    ],
  },
];

// ============================================================================
// Alias Background Tokens
// ============================================================================
const backgroundTokens = [
  { name: "primary", className: "bg-primary", dark: false },
  { name: "primary-alt", className: "bg-primary-alt", dark: false },
  { name: "primary-inverse", className: "bg-primary-inverse", dark: true },
  { name: "secondary", className: "bg-secondary", dark: false },
  { name: "secondary-alt", className: "bg-secondary-alt", dark: false },
  { name: "secondary-subtle", className: "bg-secondary-subtle", dark: false },
  { name: "secondary-inverse", className: "bg-secondary-inverse", dark: true },
  { name: "tertiary", className: "bg-tertiary", dark: false },
  { name: "quarterary", className: "bg-quarterary", dark: false },
  { name: "inactive", className: "bg-inactive", dark: false },
  { name: "inactive-subtle", className: "bg-inactive-subtle", dark: false },
  { name: "always-light", className: "bg-always-light", dark: false },
  { name: "always-dark", className: "bg-always-dark", dark: true },
  { name: "on-overlay", className: "bg-on-overlay", dark: false },
  { name: "overlay", className: "bg-overlay", dark: true },
  { name: "brand", className: "bg-brand", dark: true },
  { name: "brand-hover", className: "bg-brand-hover", dark: true },
  { name: "brand-secondary", className: "bg-brand-secondary", dark: false },
  { name: "brand-tertiary", className: "bg-brand-tertiary", dark: false },
  { name: "brand-tertiary-hover", className: "bg-brand-tertiary-hover", dark: false },
  { name: "brand-strong", className: "bg-brand-strong", dark: true },
  { name: "success", className: "bg-success", dark: true },
  { name: "success-secondary", className: "bg-success-secondary", dark: false },
  { name: "success-tertiary", className: "bg-success-tertiary", dark: false },
  { name: "danger", className: "bg-danger", dark: true },
  { name: "danger-secondary", className: "bg-danger-secondary", dark: false },
  { name: "danger-tertiary", className: "bg-danger-tertiary", dark: false },
  { name: "warning", className: "bg-warning", dark: true },
  { name: "warning-secondary", className: "bg-warning-secondary", dark: false },
  { name: "warning-tertiary", className: "bg-warning-tertiary", dark: false },
  { name: "info", className: "bg-info", dark: true },
  { name: "info-secondary", className: "bg-info-secondary", dark: false },
  { name: "info-tertiary", className: "bg-info-tertiary", dark: false },
];

// ============================================================================
// Alias Text Tokens
// ============================================================================
const textTokens = [
  { name: "primary", className: "text-primary" },
  { name: "primary-inverse", className: "text-primary-inverse" },
  { name: "secondary", className: "text-secondary" },
  { name: "secondary-hover", className: "text-secondary-hover" },
  { name: "secondary-inverse", className: "text-secondary-inverse" },
  { name: "tertiary", className: "text-tertiary" },
  { name: "tertiary-hover", className: "text-tertiary-hover" },
  { name: "inactive", className: "text-inactive" },
  { name: "inactive-subtle", className: "text-inactive-subtle" },
  { name: "placeholder", className: "text-placeholder" },
  { name: "on-color", className: "text-on-color" },
  { name: "on-color-inverse", className: "text-on-color-inverse" },
  { name: "brand", className: "text-brand" },
  { name: "brand-strong", className: "text-brand-strong" },
  { name: "success", className: "text-success" },
  { name: "success-strong", className: "text-success-strong" },
  { name: "danger", className: "text-danger" },
  { name: "danger-strong", className: "text-danger-strong" },
  { name: "error", className: "text-error" },
  { name: "warning-strong", className: "text-warning-strong" },
  { name: "info", className: "text-info" },
  { name: "info-strong", className: "text-info-strong" },
];

// ============================================================================
// Alias Border Tokens
// ============================================================================
const borderTokens = [
  { name: "default", className: "border-default" },
  { name: "secondary", className: "border-secondary" },
  { name: "strong", className: "border-strong" },
  { name: "subtract", className: "border-subtract" },
  { name: "inactive", className: "border-inactive" },
  { name: "inactive-subtle", className: "border-inactive-subtle" },
  { name: "focused", className: "border-focused" },
  { name: "focused-danger", className: "border-focused-danger" },
  { name: "brand", className: "border-brand" },
  { name: "brand-secondary", className: "border-brand-secondary" },
  { name: "success", className: "border-success" },
  { name: "success-secondary", className: "border-success-secondary" },
  { name: "danger", className: "border-danger" },
  { name: "danger-secondary", className: "border-danger-secondary" },
  { name: "warning", className: "border-warning" },
  { name: "warning-secondary", className: "border-warning-secondary" },
  { name: "info", className: "border-info" },
  { name: "info-subtle", className: "border-info-subtle" },
];

// ============================================================================
// Alias Icon Tokens
// ============================================================================
const iconTokens = [
  { name: "primary", className: "text-icon-primary" },
  { name: "primary-inverse", className: "text-icon-primary-inverse" },
  { name: "secondary", className: "text-icon-secondary" },
  { name: "secondary-hover", className: "text-icon-secondary-hover" },
  { name: "secondary-inverse", className: "text-icon-secondary-inverse" },
  { name: "tertiary", className: "text-icon-tertiary" },
  { name: "tertiary-hover", className: "text-icon-tertiary-hover" },
  { name: "inactive", className: "text-icon-inactive" },
  { name: "inactive-subtle", className: "text-icon-inactive-subtle" },
  { name: "on-color", className: "text-icon-on-color" },
  { name: "on-color-inverse", className: "text-icon-on-color-inverse" },
  { name: "brand", className: "text-icon-brand" },
  { name: "brand-secondary", className: "text-icon-brand-secondary" },
  { name: "success", className: "text-icon-success" },
  { name: "success-secondary", className: "text-icon-success-secondary" },
  { name: "success-strong", className: "text-icon-success-strong" },
  { name: "danger", className: "text-icon-danger" },
  { name: "danger-secondary", className: "text-icon-danger-secondary" },
  { name: "danger-strong", className: "text-icon-danger-strong" },
  { name: "warning", className: "text-icon-warning" },
  { name: "warning-secondary", className: "text-icon-warning-secondary" },
  { name: "warning-strong", className: "text-icon-warning-strong" },
  { name: "info", className: "text-icon-info" },
  { name: "info-secondary", className: "text-icon-info-secondary" },
  { name: "info-strong", className: "text-icon-info-strong" },
];

// ============================================================================
// Border Radius Tokens
// ============================================================================
const radiusTokens = [
  { name: "none", className: "rounded-none", value: "0px" },
  { name: "xxs", className: "rounded-xxs", value: "2px" },
  { name: "xs", className: "rounded-xs", value: "4px" },
  { name: "sm", className: "rounded-sm", value: "8px" },
  { name: "md", className: "rounded-md", value: "12px" },
  { name: "lg", className: "rounded-lg", value: "16px" },
  { name: "xl", className: "rounded-xl", value: "20px" },
  { name: "2xl", className: "rounded-2xl", value: "28px" },
  { name: "full", className: "rounded-full", value: "9999px" },
];

// ============================================================================
// Shadow Tokens
// ============================================================================
const shadowTokens = [
  { name: "xs", className: "shadow-xs" },
  { name: "sm", className: "shadow-sm" },
  { name: "md", className: "shadow-md" },
  { name: "lg", className: "shadow-lg" },
  { name: "xl", className: "shadow-xl" },
  { name: "2xl", className: "shadow-2xl" },
  { name: "flat", className: "shadow-flat" },
  { name: "inner", className: "shadow-inner" },
];

// ============================================================================
// Spacing Tokens
// ============================================================================
const spacingTokens = [
  { name: "none", className: "w-none", value: "0px" },
  { name: "xxs", className: "w-xxs", value: "0.125rem (2px)" },
  { name: "xs", className: "w-xs", value: "0.25rem (4px)" },
  { name: "sm", className: "w-sm", value: "0.5rem (8px)" },
  { name: "md", className: "w-md", value: "0.75rem (12px)" },
  { name: "lg", className: "w-lg", value: "1rem (16px)" },
  { name: "xl", className: "w-xl", value: "1.25rem (20px)" },
  { name: "2xl", className: "w-2xl", value: "1.5rem (24px)" },
  { name: "3xl", className: "w-3xl", value: "1.75rem (28px)" },
  { name: "4xl", className: "w-4xl", value: "2rem (32px)" },
  { name: "5xl", className: "w-5xl", value: "2.5rem (40px)" },
  { name: "6xl", className: "w-6xl", value: "3rem (48px)" },
  { name: "7xl", className: "w-7xl", value: "4rem (64px)" },
  { name: "8xl", className: "w-8xl", value: "5rem (80px)" },
  { name: "9xl", className: "w-9xl", value: "6rem (96px)" },
  { name: "10xl", className: "w-10xl", value: "8rem (128px)" },
  { name: "11xl", className: "w-11xl", value: "10rem (160px)" },
  { name: "12xl", className: "w-12xl", value: "12rem (192px)" },
];

export function TokensDocumentation() {
  return (
    <>
      {/* Brand Color Scales */}
      <Section
        title="Brand Colors"
        description="Raw color primitives organized by scale. Use bg-brand-{scale}-{shade} for backgrounds."
      >
        <div className="space-y-8">
          {brandColorScales.map((scale) => (
            <div key={scale.name}>
              <h3 className="text-primary mb-3 text-sm font-semibold">
                {scale.name}
              </h3>
              <div className="flex gap-1">
                {scale.colors.map((color) => (
                  <div key={color.shade} className="flex flex-col items-center">
                    <div
                      className={`${color.className} border-default h-12 w-14 border`}
                    />
                    <span className="text-tertiary mt-1 text-xs">
                      {color.shade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Background Tokens */}
      <Section
        title="Background Tokens"
        description="Semantic background colors. Use bg-{token} class."
      >
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
          {backgroundTokens.map((token) => (
            <div
              key={token.name}
              className={`${token.className} border-default flex h-20 items-center justify-center rounded-md border p-2`}
            >
              <span
                className={`text-xs font-mono ${token.dark ? "text-white" : "text-primary"}`}
              >
                {token.name}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Text Tokens */}
      <Section
        title="Text Tokens"
        description="Semantic text colors. Use text-{token} class."
      >
        <div className="bg-secondary grid grid-cols-2 gap-4 rounded-lg p-6 md:grid-cols-3 lg:grid-cols-4">
          {textTokens.map((token) => (
            <div key={token.name} className="flex items-center gap-2">
              <span className={`${token.className} text-sm font-semibold`}>
                Aa
              </span>
              <span className="text-secondary text-xs font-mono">
                {token.name}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Border Tokens */}
      <Section
        title="Border Tokens"
        description="Semantic border colors. Use border-{token} class."
      >
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
          {borderTokens.map((token) => (
            <div
              key={token.name}
              className={`${token.className} flex h-16 items-center justify-center rounded-md border-2 bg-primary`}
            >
              <span className="text-secondary text-xs font-mono">
                {token.name}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Icon Tokens */}
      <Section
        title="Icon Tokens"
        description="Icon colors. Use text-icon-{token} class with Lucide icons."
      >
        <div className="bg-secondary grid grid-cols-2 gap-4 rounded-lg p-6 md:grid-cols-4 lg:grid-cols-6">
          {iconTokens.map((token) => (
            <div key={token.name} className="flex items-center gap-2">
              <svg
                className={`${token.className} size-5`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span className="text-secondary text-xs font-mono">
                {token.name}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Border Radius Tokens */}
      <Section
        title="Border Radius Tokens"
        description="Use rounded-{token} class."
      >
        <div className="flex flex-wrap items-end gap-6">
          {radiusTokens.map((token) => (
            <div key={token.name} className="flex flex-col items-center gap-2">
              <div className={`${token.className} bg-brand size-16`} />
              <span className="text-primary text-xs font-mono font-semibold">
                {token.name}
              </span>
              <span className="text-tertiary text-xs">{token.value}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Shadow Tokens */}
      <Section
        title="Shadow Tokens"
        description="Use shadow-{token} class for elevation and depth."
      >
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {shadowTokens.map((token) => (
            <div key={token.name} className="flex flex-col items-center gap-3">
              <div
                className={`${token.className} bg-primary border-default flex h-24 w-full items-center justify-center rounded-md border`}
              >
                <span className="text-primary text-xs font-mono font-semibold">
                  {token.name}
                </span>
              </div>
              <span className="text-tertiary text-xs font-mono">
                {token.className}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Spacing Tokens */}
      <Section
        title="Spacing Tokens"
        description="Use p-{token}, m-{token}, gap-{token}, w-{token}, h-{token} classes."
      >
        <div className="space-y-2">
          {spacingTokens.map((token) => (
            <div key={token.name} className="flex items-center gap-4">
              <span className="text-primary w-10 text-xs font-mono font-semibold">
                {token.name}
              </span>
              <div className={`${token.className} bg-brand h-4 min-w-[1px]`} />
              <span className="text-tertiary text-xs">{token.value}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Spacing Usage Examples */}
      <Section
        title="Spacing in Context"
        description="Examples of spacing tokens used as padding."
      >
        <div className="flex flex-wrap items-start gap-md">
          {[
            { name: "xs", className: "p-xs" },
            { name: "sm", className: "p-sm" },
            { name: "md", className: "p-md" },
            { name: "lg", className: "p-lg" },
            { name: "xl", className: "p-xl" },
            { name: "2xl", className: "p-2xl" },
            { name: "3xl", className: "p-3xl" },
            { name: "4xl", className: "p-4xl" },
          ].map((size) => (
            <div
              key={size.name}
              className={`${size.className} bg-tertiary border-default rounded-md border`}
            >
              <div className="bg-brand rounded text-on-color px-2 py-1 text-xs font-mono">
                p-{size.name}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Gap Examples */}
      <Section title="Gap Examples" description="Spacing tokens used as gap.">
        <div className="space-y-6">
          {[
            { name: "xs", className: "gap-xs" },
            { name: "sm", className: "gap-sm" },
            { name: "md", className: "gap-md" },
            { name: "lg", className: "gap-lg" },
            { name: "xl", className: "gap-xl" },
          ].map((size) => (
            <div key={size.name} className="flex items-center">
              <span className="text-primary w-12 text-xs font-mono font-semibold">
                gap-{size.name}
              </span>
              <div className={`${size.className} flex`}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-brand size-8 rounded" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
