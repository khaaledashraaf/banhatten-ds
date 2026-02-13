# generate-tokens

# Generate Tokens

Description: Scans the Figma "Brand" and "Alias" frames to generate the tokens.json file.

## Action Steps
1.  **Analyze**: Read the provided Figma Link (look for frames named "Brand Primitives" and "Alias Roles").
2.  **Extract Brand**:
    * Find all layers named `brand/[name]-[value]` (e.g., `brand/blue-500`).
    * Capture their Hex codes.
3.  **Extract Alias**:
    * Find all layers named `alias/[role]` (e.g., `alias/primary`).
    * Capture their Hex codes.
4.  **Link**:
    * Compare Alias hex codes to Brand hex codes.
    * If a match is found, the alias value MUST be a reference (e.g., `{brand.blue-500}`), NOT a hardcoded hex.
5.  **Output**:
    * Generate/Overwrite `packages/tokens/src/tokens.json`.
    * Format: `{ "brand": { ... }, "alias": { ... }, "shadow": { ... }, "radius": { ... }, "spacing": { ... } }`.

This command will be available in chat with /generate-tokens
