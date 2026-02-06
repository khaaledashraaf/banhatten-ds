import { ColorPalette } from "@banhatten/ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary p-8">
      <h1 className="text-primary mb-8 text-3xl font-bold">
        Banhatten Design System
      </h1>
      <ColorPalette />
    </main>
  );
}
