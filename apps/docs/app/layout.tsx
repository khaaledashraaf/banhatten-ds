import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Banhatten Design System",
  description: "Documentation and validation for Banhatten DS",
  icons: [
    { url: `${basePath}/favicon-light.svg`, media: "(prefers-color-scheme: light)" },
    { url: `${basePath}/favicon-dark.svg`, media: "(prefers-color-scheme: dark)" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ViewTransitions>{children}</ViewTransitions>
      </body>
    </html>
  );
}
