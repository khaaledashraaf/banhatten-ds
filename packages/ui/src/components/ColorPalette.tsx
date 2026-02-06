import * as React from "react";

const tokenSamples = [
  {
    className: "bg-alias-bg-brand",
    label: "bg-alias-bg-brand",
    textClass: "text-white",
  },
  {
    className: "bg-alias-bg-danger",
    label: "bg-alias-bg-danger",
    textClass: "text-white",
  },
  {
    className: "bg-alias-bg-inactive",
    label: "bg-alias-bg-inactive",
    textClass: "text-alias-text-primary",
  },
  {
    className: "bg-alias-bg-success",
    label: "bg-alias-bg-success",
    textClass: "text-white",
  },
  {
    className: "bg-alias-bg-warning",
    label: "bg-alias-bg-warning",
    textClass: "text-white",
  },
  {
    className: "bg-alias-bg-info",
    label: "bg-alias-bg-info",
    textClass: "text-white",
  },
];

export const ColorPalette: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-alias-text-primary mb-4 text-xl font-semibold">
        Token Validation
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {tokenSamples.map((sample) => (
          <div
            key={sample.label}
            className={`${sample.className} ${sample.textClass} flex h-24 items-center justify-center rounded-lg p-4 text-sm font-mono`}
          >
            {sample.label}
          </div>
        ))}
      </div>

      <h3 className="text-alias-text-primary mt-8 mb-4 text-lg font-semibold">
        Text Colors
      </h3>
      <div className="space-y-2">
        <p className="text-alias-text-primary">
          text-alias-text-primary (dark gray)
        </p>
        <p className="text-alias-text-secondary">
          text-alias-text-secondary (medium gray)
        </p>
        <p className="text-alias-text-brand">
          text-alias-text-brand (primary blue)
        </p>
        <p className="text-alias-text-danger">
          text-alias-text-danger (red)
        </p>
      </div>
    </div>
  );
};
