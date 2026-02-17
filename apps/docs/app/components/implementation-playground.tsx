import { Button, Badge } from "banhatten-ui";

// ============================================================================
// Pricing Card Component
// ============================================================================
interface PricingCardProps {
  title: string;
  description: string;
  badge?: {
    label: string;
    color: "success" | "danger";
  };
  cta: {
    label: string;
    variant: "primary" | "secondary";
  };
}

function PricingCard({ title, description, badge, cta }: PricingCardProps) {
  return (
    <div className="flex flex-1 flex-col justify-between rounded-sm border-2 border-default bg-primary-alt px-2xl py-3xl h-[399px]">
      <div className="flex flex-col gap-md">
        <div className="flex h-6 items-center justify-between">
          <p className="text-base font-medium leading-6 text-black">{title}</p>
          {badge && (
            <Badge variant="light" color={badge.color} size="sm">
              {badge.label}
            </Badge>
          )}
        </div>
        <p className="text-sm leading-5 text-secondary whitespace-pre-wrap">
          {description}
        </p>
      </div>
      <Button variant={cta.variant} size="xs" className="w-full">
        {cta.label}
      </Button>
    </div>
  );
}

// ============================================================================
// Main Implementation Playground Component
// ============================================================================
export function ImplementationPlayground() {
  const loremDescription =
    "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum";

  return (
    <div className="bg-primary relative w-full">
      {/* Navigation Header */}
      <nav className="flex items-center justify-between px-4xl py-lg w-full border-b border-default">
        <p className="font-semibold text-3xl leading-8 tracking-tight text-primary">
          Logo
        </p>
        <div className="flex items-center gap-4xl">
          <Button variant="link" size="xs">
            Home
          </Button>
          <Button variant="link" size="xs">
            Services
          </Button>
          <Button variant="link" size="xs">
            About Us
          </Button>
          <Button variant="secondary" size="xs">
            Contact Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center gap-4xl py-5xl px-lg">
        <div className="flex flex-col items-center gap-md text-center max-w-[810px]">
          <h1 className="font-bold text-6xl leading-[72px] tracking-tight text-primary">
            Introducing Claude Opus 4.6
          </h1>
          <p className="text-lg leading-6 font-medium text-secondary max-w-[534px]">
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsum
          </p>
        </div>
        <div className="flex items-center gap-md">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="secondary" size="lg">
            More Details
          </Button>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="flex items-center justify-center gap-2xl px-lg pb-5xl">
        <div className="flex gap-2xl max-w-[1056px] w-full">
          <PricingCard
            title="Basic Package"
            description={loremDescription}
            cta={{ label: "Add to cart", variant: "secondary" }}
          />
          <PricingCard
            title="Premium Package"
            description={loremDescription}
            badge={{ label: "Best Choice", color: "success" }}
            cta={{ label: "Buy now", variant: "primary" }}
          />
          <PricingCard
            title="Advanced Package"
            description={loremDescription}
            badge={{ label: "Trending", color: "danger" }}
            cta={{ label: "Add to cart", variant: "secondary" }}
          />
        </div>
      </section>
    </div>
  );
}
