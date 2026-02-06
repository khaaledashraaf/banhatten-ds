import * as React from "react";

const tokenSamples = [
  {
    className: "bg-brand",
    label: "bg-brand",
    textClass: "text-white",
  },
  {
    className: "bg-danger",
    label: "bg-danger",
    textClass: "text-white",
  },
  {
    className: "bg-inactive",
    label: "bg-inactive",
    textClass: "text-primary",
  },
  {
    className: "bg-success",
    label: "bg-success",
    textClass: "text-white",
  },
  {
    className: "bg-warning",
    label: "bg-warning",
    textClass: "text-white",
  },
  {
    className: "bg-info",
    label: "bg-info",
    textClass: "text-white",
  },
];

export const ColorPalette: React.FC = () => {
  return (
    <div className="p-0">
      <h2 className="text-primary mb-lg text-xl font-semibold">
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

      <h3 className="text-primary mt-8 mb-4 text-lg font-semibold">
        Text Colors
      </h3>
      <div className="space-y-2">
        <p className="text-primary">
          text-primary (dark gray)
        </p>
        <p className="text-secondary">
          text-secondary (medium gray)
        </p>
        <p className="text-brand">
          text-brand (primary blue)
        </p>
        <p className="text-danger">
          text-danger (red)
        </p>
      </div>
    </div>
  );
};
