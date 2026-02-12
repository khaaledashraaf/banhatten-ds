"use client";

import { Button, Badge } from "@banhatten/ui";

// ============================================================================
// Product Data
// ============================================================================
const featuredProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    badge: "Best Seller",
    badgeColor: "brand" as const,
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199,
    originalPrice: 249,
    badge: "New",
    badgeColor: "success" as const,
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    price: 79,
    originalPrice: 99,
    badge: "-20%",
    badgeColor: "danger" as const,
  },
  {
    id: 4,
    name: "Noise Cancelling Earbuds",
    price: 149,
    originalPrice: 179,
    badge: "Limited",
    badgeColor: "warning" as const,
  },
];

const categories = [
  { name: "Electronics", count: 234 },
  { name: "Fashion", count: 512 },
  { name: "Home & Living", count: 189 },
  { name: "Sports", count: 97 },
  { name: "Books", count: 456 },
  { name: "Beauty", count: 321 },
];

const features = [
  { title: "Free Shipping", description: "On orders over $50" },
  { title: "24/7 Support", description: "We're here to help" },
  { title: "Secure Payment", description: "100% protected" },
  { title: "Easy Returns", description: "30-day return policy" },
];

// ============================================================================
// Hero Section
// ============================================================================
function HeroSection() {
  return (
    <section className="bg-brand-tertiary border-b border-default px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto w-full text-center">
        <div className="mb-4 flex justify-center gap-2">
          <Badge variant="filled" color="brand" size="lg">
            Summer Sale
          </Badge>
          <Badge variant="light" color="success" size="lg">
            Up to 50% Off
          </Badge>
        </div>
        <h1 className="text-primary mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Discover Amazing Products
        </h1>
        <p className="text-secondary mb-8 text-lg md:text-xl">
          Shop the latest trends with exclusive deals. Quality products at unbeatable prices.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="xl">
            Shop Now
          </Button>
          <Button variant="secondary" size="xl">
            View Collections
          </Button>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Features Bar
// ============================================================================
function FeaturesBar() {
  return (
    <section className="bg-secondary border-b border-default px-6 py-6">
      <div className="mx-auto grid w-full grid-cols-2 gap-4 md:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="text-center">
            <Badge variant="outlined" color="neutral" size="sm" className="mb-2">
              {feature.title}
            </Badge>
            <p className="text-tertiary text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// Categories Section
// ============================================================================
function CategoriesSection() {
  return (
    <section className="bg-primary px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto w-full">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Badge variant="light" color="brand" size="sm" className="mb-2">
              Browse
            </Badge>
            <h2 className="text-primary text-2xl font-bold">Shop by Category</h2>
          </div>
          <Button variant="link-brand" size="md">
            View All Categories →
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-secondary hover:bg-tertiary border-default group cursor-pointer rounded-md border p-4 text-center transition-colors"
            >
              <p className="text-primary mb-1 font-medium">{category.name}</p>
              <Badge variant="light" color="neutral" size="sm">
                {category.count} items
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Featured Products Section
// ============================================================================
function FeaturedProductsSection() {
  return (
    <section className="bg-secondary px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto w-full">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Badge variant="filled" color="success" size="sm" className="mb-2">
              Featured
            </Badge>
            <h2 className="text-primary text-2xl font-bold">Top Picks for You</h2>
          </div>
          <Button variant="tertiary" size="md">
            See All Products
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-primary border-default group overflow-hidden rounded-md border"
            >
              {/* Product Image Placeholder */}
              <div className="bg-tertiary relative aspect-square">
                <div className="absolute left-3 top-3">
                  <Badge variant="filled" color={product.badgeColor} size="sm">
                    {product.badge}
                  </Badge>
                </div>
                <div className="flex h-full items-center justify-center">
                  <span className="text-tertiary text-4xl">📦</span>
                </div>
              </div>
              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-primary mb-2 font-medium">{product.name}</h3>
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-brand text-lg font-bold">${product.price}</span>
                  <Badge variant="light" color="danger" size="sm">
                    <span className="line-through">${product.originalPrice}</span>
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="primary" size="xs" className="flex-1">
                    Add to Cart
                  </Button>
                  <Button variant="secondary" size="xs">
                    ♡
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Promotional Banner
// ============================================================================
function PromotionalBanner() {
  return (
    <section className="bg-brand px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto w-full text-center">
        <Badge variant="outlined" color="neutral" size="lg" className="mb-4 border-white/30 text-white">
          Limited Time Offer
        </Badge>
        <h2 className="text-on-color mb-4 text-3xl font-bold md:text-4xl">
          Get 25% Off Your First Order
        </h2>
        <p className="text-on-color/80 mb-6 text-lg">
          Sign up for our newsletter and receive an exclusive discount code.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" size="lg">
            Subscribe Now
          </Button>
          <Button variant="tertiary" size="lg" className="text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Trust Badges Section
// ============================================================================
function TrustSection() {
  return (
    <section className="bg-primary border-t border-default px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto w-full text-center">
        <p className="text-tertiary mb-4 text-sm uppercase tracking-wider">
          Trusted by 100,000+ customers worldwide
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Badge variant="light" color="brand" size="lg">
            ⭐ 4.9 Rating
          </Badge>
          <Badge variant="light" color="success" size="lg">
            ✓ Verified Seller
          </Badge>
          <Badge variant="light" color="info" size="lg">
            🔒 SSL Secured
          </Badge>
          <Badge variant="light" color="neutral" size="lg">
            📦 Fast Delivery
          </Badge>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Deals Section
// ============================================================================
function DealsSection() {
  return (
    <section className="bg-tertiary px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto w-full">
        <div className="mb-8 text-center">
          <Badge variant="filled" color="danger" size="lg" className="mb-3">
            🔥 Flash Deals
          </Badge>
          <h2 className="text-primary text-2xl font-bold">Today&apos;s Best Offers</h2>
          <p className="text-secondary mt-2">Hurry up! These deals won&apos;t last long.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {/* Deal Card 1 */}
          <div className="bg-primary border-default rounded-md border p-6 text-center">
            <Badge variant="filled" color="brand" size="sm" className="mb-3">
              Electronics
            </Badge>
            <p className="text-primary mb-2 text-xl font-bold">40% OFF</p>
            <p className="text-secondary mb-4 text-sm">All smartphones & tablets</p>
            <Button variant="primary" size="md" className="w-full">
              Shop Electronics
            </Button>
          </div>
          {/* Deal Card 2 */}
          <div className="bg-primary border-default rounded-md border p-6 text-center">
            <Badge variant="filled" color="success" size="sm" className="mb-3">
              Fashion
            </Badge>
            <p className="text-primary mb-2 text-xl font-bold">Buy 2 Get 1</p>
            <p className="text-secondary mb-4 text-sm">Selected clothing items</p>
            <Button variant="primary" size="md" className="w-full">
              Shop Fashion
            </Button>
          </div>
          {/* Deal Card 3 */}
          <div className="bg-primary border-default rounded-md border p-6 text-center">
            <Badge variant="filled" color="warning" size="sm" className="mb-3">
              Home
            </Badge>
            <p className="text-primary mb-2 text-xl font-bold">Free Shipping</p>
            <p className="text-secondary mb-4 text-sm">On all home appliances</p>
            <Button variant="primary" size="md" className="w-full">
              Shop Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Footer CTA
// ============================================================================
function FooterCTA() {
  return (
    <section className="bg-secondary border-t border-default px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto w-full text-center">
        <h2 className="text-primary mb-4 text-3xl font-bold">Ready to Start Shopping?</h2>
        <p className="text-secondary mb-8 text-lg">
          Join thousands of happy customers and discover why they love shopping with us.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="2xl">
            Create Account
          </Button>
          <Button variant="secondary" size="2xl">
            Continue as Guest
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <Badge variant="outlined" color="neutral" size="sm">
            No credit card required
          </Badge>
          <Badge variant="outlined" color="neutral" size="sm">
            Free forever plan
          </Badge>
          <Badge variant="outlined" color="neutral" size="sm">
            Cancel anytime
          </Badge>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Main Export
// ============================================================================
export function EcommerceLanding() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesBar />
      <CategoriesSection />
      <FeaturedProductsSection />
      <PromotionalBanner />
      <DealsSection />
      <TrustSection />
      <FooterCTA />
    </div>
  );
}
