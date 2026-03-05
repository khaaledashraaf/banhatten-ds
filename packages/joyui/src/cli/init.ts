#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";

const PROVIDER_IMPORT = `import { BanhattenJoyProvider } from "banhatten-ui-joyui";`;
const CSS_IMPORT = `import "banhatten-ui-joyui/css/tokens.css";`;

interface DetectionResult {
  framework: string;
  entryFile: string;
}

function detect(cwd: string): DetectionResult | null {
  const pkgPath = path.join(cwd, "package.json");
  if (!fs.existsSync(pkgPath)) return null;

  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };

  if (deps["next"]) {
    const candidates = [
      "app/layout.tsx", "app/layout.jsx",
      "src/app/layout.tsx", "src/app/layout.jsx",
    ];
    for (const c of candidates) {
      if (fs.existsSync(path.join(cwd, c))) {
        return { framework: "Next.js (App Router)", entryFile: c };
      }
    }
    const pagesCandidates = [
      "pages/_app.tsx", "pages/_app.jsx",
      "src/pages/_app.tsx", "src/pages/_app.jsx",
    ];
    for (const c of pagesCandidates) {
      if (fs.existsSync(path.join(cwd, c))) {
        return { framework: "Next.js (Pages Router)", entryFile: c };
      }
    }
  }

  const viteCandidates = [
    "src/App.tsx", "src/App.jsx",
    "src/main.tsx", "src/main.jsx",
    "src/index.tsx", "src/index.jsx",
  ];
  for (const c of viteCandidates) {
    if (fs.existsSync(path.join(cwd, c))) {
      const fwName = deps["vite"] ? "Vite" : "Create React App";
      return { framework: fwName, entryFile: c };
    }
  }

  return null;
}

function findJoyVersion(cwd: string): string | null {
  const pkgPath = path.join(cwd, "package.json");
  if (!fs.existsSync(pkgPath)) return null;
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
  return pkg.dependencies?.["@mui/joy"] || pkg.devDependencies?.["@mui/joy"] || null;
}

function patchFile(filePath: string): boolean {
  const content = fs.readFileSync(filePath, "utf-8");

  if (content.includes("BanhattenJoyProvider")) {
    return false;
  }

  const importBlock = `${PROVIDER_IMPORT}\n${CSS_IMPORT}\n`;
  let patched: string;

  if (filePath.includes("layout.")) {
    patched = importBlock + content;
    patched = patched.replace(
      /(<body[^>]*>)([\s\S]*?)(<\/body>)/,
      `$1\n        <BanhattenJoyProvider>$2</BanhattenJoyProvider>\n      $3`
    );
  } else if (filePath.includes("_app.")) {
    patched = importBlock + content;
    patched = patched.replace(
      /(<Component\s)/,
      `<BanhattenJoyProvider>\n          $1`
    );
    patched = patched.replace(
      /(\/>[\s]*)([\s\S]*?return)/,
      `$1\n        </BanhattenJoyProvider>$2`
    );
  } else if (filePath.includes("main.") || filePath.includes("index.")) {
    patched = importBlock + content;
    patched = patched.replace(
      /(<App\s*\/>)/,
      `<BanhattenJoyProvider>\n      $1\n    </BanhattenJoyProvider>`
    );
  } else {
    patched = importBlock + content;
  }

  fs.writeFileSync(filePath, patched, "utf-8");
  return true;
}

function prompt(question: string): Promise<string> {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((res) => {
    rl.question(question, (answer) => {
      rl.close();
      res(answer.trim());
    });
  });
}

async function main() {
  const cwd = process.cwd();

  console.log("");
  console.log("  ╔═══════════════════════════════════════════╗");
  console.log("  ║  Banhatten Design System — Joy UI Setup   ║");
  console.log("  ╚═══════════════════════════════════════════╝");
  console.log("");

  const joyVersion = findJoyVersion(cwd);
  const detected = detect(cwd);

  if (!joyVersion) {
    console.log("  ⚠  @mui/joy not found in package.json.");
    console.log("     Install it first: npm install @mui/joy @emotion/react @emotion/styled");
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
    console.log("    <BanhattenJoyProvider>");
    console.log("      <App />");
    console.log("    </BanhattenJoyProvider>");
    console.log("");
    process.exit(0);
  }

  console.log("  Detected:");
  console.log(`    Framework:  ${detected.framework}`);
  console.log(`    Joy UI:     ${joyVersion}`);
  console.log(`    Entry file: ${detected.entryFile}`);
  console.log("");
  console.log("  This will:");
  console.log(`    1. Add BanhattenJoyProvider import to ${detected.entryFile}`);
  console.log(`    2. Add CSS tokens import`);
  console.log(`    3. Wrap your app content with <BanhattenJoyProvider>`);
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
    console.log("  BanhattenJoyProvider is already set up. No changes made.");
    console.log("");
  }
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
