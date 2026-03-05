#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";

const PROVIDER_IMPORT = `import { BanhattenMuiProvider } from "banhatten-ui-mui";`;
const CSS_IMPORT = `import "banhatten-ui-mui/css/tokens.css";`;

interface DetectionResult {
  framework: string;
  entryFile: string;
  wrapperTag: string;
}

function detect(cwd: string): DetectionResult | null {
  const pkgPath = path.join(cwd, "package.json");
  if (!fs.existsSync(pkgPath)) return null;

  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
  const deps = {
    ...pkg.dependencies,
    ...pkg.devDependencies,
  };

  // Next.js App Router
  if (deps["next"]) {
    const candidates = [
      "app/layout.tsx",
      "app/layout.jsx",
      "src/app/layout.tsx",
      "src/app/layout.jsx",
    ];
    for (const c of candidates) {
      if (fs.existsSync(path.join(cwd, c))) {
        return { framework: "Next.js (App Router)", entryFile: c, wrapperTag: "body" };
      }
    }
    // Pages Router
    const pagesCandidates = [
      "pages/_app.tsx",
      "pages/_app.jsx",
      "src/pages/_app.tsx",
      "src/pages/_app.jsx",
    ];
    for (const c of pagesCandidates) {
      if (fs.existsSync(path.join(cwd, c))) {
        return { framework: "Next.js (Pages Router)", entryFile: c, wrapperTag: "Component" };
      }
    }
  }

  // Vite / CRA
  const viteCandidates = [
    "src/App.tsx",
    "src/App.jsx",
    "src/main.tsx",
    "src/main.jsx",
    "src/index.tsx",
    "src/index.jsx",
  ];
  for (const c of viteCandidates) {
    if (fs.existsSync(path.join(cwd, c))) {
      const fwName = deps["vite"] ? "Vite" : "Create React App";
      return { framework: fwName, entryFile: c, wrapperTag: "App" };
    }
  }

  return null;
}

function findMuiVersion(cwd: string): string | null {
  const pkgPath = path.join(cwd, "package.json");
  if (!fs.existsSync(pkgPath)) return null;
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
  return pkg.dependencies?.["@mui/material"] || pkg.devDependencies?.["@mui/material"] || null;
}

function patchFile(filePath: string): boolean {
  const content = fs.readFileSync(filePath, "utf-8");

  if (content.includes("BanhattenMuiProvider")) {
    return false;
  }

  const importBlock = `${PROVIDER_IMPORT}\n${CSS_IMPORT}\n`;
  let patched: string;

  if (filePath.includes("layout.")) {
    // Next.js App Router layout
    patched = importBlock + content;
    patched = patched.replace(
      /(<body[^>]*>)([\s\S]*?)(<\/body>)/,
      `$1\n        <BanhattenMuiProvider>$2</BanhattenMuiProvider>\n      $3`
    );
  } else if (filePath.includes("_app.")) {
    // Next.js Pages Router _app
    patched = importBlock + content;
    patched = patched.replace(
      /(<Component\s)/,
      `<BanhattenMuiProvider>\n          $1`
    );
    patched = patched.replace(
      /(\/>[\s]*)([\s\S]*?return)/,
      `$1\n        </BanhattenMuiProvider>$2`
    );
  } else if (filePath.includes("main.") || filePath.includes("index.")) {
    // Vite/CRA entry point (wraps <App />)
    patched = importBlock + content;
    patched = patched.replace(
      /(<App\s*\/>)/,
      `<BanhattenMuiProvider>\n      $1\n    </BanhattenMuiProvider>`
    );
  } else {
    // Generic App.tsx
    patched = importBlock + content;
  }

  fs.writeFileSync(filePath, patched, "utf-8");
  return true;
}

function prompt(question: string): Promise<string> {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function main() {
  const cwd = process.cwd();

  console.log("");
  console.log("  ╔═══════════════════════════════════════════╗");
  console.log("  ║   Banhatten Design System — MUI Setup     ║");
  console.log("  ╚═══════════════════════════════════════════╝");
  console.log("");

  const muiVersion = findMuiVersion(cwd);
  const detected = detect(cwd);

  if (!muiVersion) {
    console.log("  ⚠  @mui/material not found in package.json.");
    console.log("     Install it first: npm install @mui/material @emotion/react @emotion/styled");
    console.log("");
    process.exit(1);
  }

  if (!detected) {
    console.log("  Could not auto-detect your project setup.");
    console.log("");
    console.log("  Add this to your app entry file manually:");
    console.log("");
    console.log(`    ${PROVIDER_IMPORT}`);
    console.log(`    ${CSS_IMPORT}`);
    console.log("");
    console.log("  Then wrap your app:");
    console.log("");
    console.log("    <BanhattenMuiProvider>");
    console.log("      <App />");
    console.log("    </BanhattenMuiProvider>");
    console.log("");
    process.exit(0);
  }

  console.log("  Detected:");
  console.log(`    Framework:  ${detected.framework}`);
  console.log(`    MUI:        ${muiVersion}`);
  console.log(`    Entry file: ${detected.entryFile}`);
  console.log("");
  console.log("  This will:");
  console.log(`    1. Add BanhattenMuiProvider import to ${detected.entryFile}`);
  console.log(`    2. Add CSS tokens import`);
  console.log(`    3. Wrap your app content with <BanhattenMuiProvider>`);
  console.log("");

  const answer = await prompt("  Proceed? (Y/n) ");

  if (answer && answer.toLowerCase() !== "y" && answer.toLowerCase() !== "yes") {
    console.log("");
    console.log("  Skipped. You can add the provider manually:");
    console.log("");
    console.log(`    ${PROVIDER_IMPORT}`);
    console.log(`    ${CSS_IMPORT}`);
    console.log("");
    process.exit(0);
  }

  const fullPath = path.join(cwd, detected.entryFile);
  const patched = patchFile(fullPath);

  if (patched) {
    console.log("");
    console.log(`  ✓ Patched ${detected.entryFile}`);
    console.log("");
    console.log("  Restart your dev server to see the Banhatten look.");
    console.log("");
  } else {
    console.log("");
    console.log("  BanhattenMuiProvider is already set up. No changes made.");
    console.log("");
  }
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
