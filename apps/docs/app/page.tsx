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
];

// ============================================================================
// Alias Background Tokens
// ============================================================================
const backgroundTokens = [
  { name: "primary", className: "bg-primary", dark: false },
  { name: "primary-alt", className: "bg-primary-alt", dark: false },
  { name: "primary-inverse", className: "bg-primary-inverse", dark: true },
  { name: "secondary", className: "bg-secondary", dark: false },
  { name: "secondary-inverse", className: "bg-secondary-inverse", dark: true },
  { name: "tertiary", className: "bg-tertiary", dark: false },
  { name: "quarterary", className: "bg-quarterary", dark: false },
  { name: "inactive", className: "bg-inactive", dark: false },
  { name: "brand", className: "bg-brand", dark: true },
  { name: "brand-hover", className: "bg-brand-hover", dark: true },
  { name: "brand-secondary", className: "bg-brand-secondary", dark: false },
  { name: "brand-tertiary", className: "bg-brand-tertiary", dark: false },
  { name: "brand-strong", className: "bg-brand-strong", dark: true },
  { name: "success", className: "bg-success", dark: true },
  { name: "danger", className: "bg-danger", dark: true },
  { name: "warning", className: "bg-warning", dark: true },
  { name: "info", className: "bg-info", dark: true },
];

// ============================================================================
// Alias Text Tokens
// ============================================================================
const textTokens = [
  { name: "primary", className: "text-primary" },
  { name: "primary-inverse", className: "text-primary-inverse" },
  { name: "secondary", className: "text-secondary" },
  { name: "tertiary", className: "text-tertiary" },
  { name: "inactive", className: "text-inactive" },
  { name: "placeholder", className: "text-placeholder" },
  { name: "brand", className: "text-brand" },
  { name: "brand-strong", className: "text-brand-strong" },
  { name: "success", className: "text-success" },
  { name: "success-strong", className: "text-success-strong" },
  { name: "danger", className: "text-danger" },
  { name: "danger-strong", className: "text-danger-strong" },
  { name: "error", className: "text-error" },
  { name: "info", className: "text-info" },
];

// ============================================================================
// Alias Border Tokens
// ============================================================================
const borderTokens = [
  { name: "default", className: "border-default" },
  { name: "secondary", className: "border-secondary" },
  { name: "strong", className: "border-strong" },
  { name: "inactive", className: "border-inactive" },
  { name: "brand", className: "border-brand" },
  { name: "brand-secondary", className: "border-brand-secondary" },
  { name: "success", className: "border-success" },
  { name: "danger", className: "border-danger" },
  { name: "warning", className: "border-warning" },
  { name: "info", className: "border-info" },
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

// ============================================================================
// Section Component
// ============================================================================
function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-20 first:mt-0">
      <h2 className="text-primary text-xl font-semibold tracking-tight md:text-2xl">
        {title}
      </h2>
      {description && (
        <p className="text-secondary mt-2 text-sm leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-8">{children}</div>
    </section>
  );
}

// ============================================================================
// Main Page Component
// ============================================================================
export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      <main className="mx-auto max-w-screen-2xl px-8 py-12 md:px-16 lg:px-24">
        {/* Header */}
        <header className="border-default mb-16 border-b pb-10">
          <h1 className="text-primary text-4xl font-bold tracking-tight md:text-5xl">
            Banhatten Design System
          </h1>
          <p className="text-secondary mt-3 text-lg">
            Complete token documentation
          </p>
        </header>

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
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
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
      </main>
    </div>
  );
}
