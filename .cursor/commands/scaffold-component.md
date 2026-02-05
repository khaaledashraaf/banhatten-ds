# scaffold-component

# Scaffold Component

Description: Generates a React component from a Figma link using our architectural standards.

## Action Steps
1.  **Analyze**: Read the provided Figma Component Link.
2.  **Map**:
    * Translate Figma Variants -> `cva` intent keys (e.g., `Type=Primary` -> `variant: "default"`).
    * Identify "Slot" usage (for polymorphic rendering) if applicable.
3.  **Code Generation**:
    * Create `packages/ui/src/components/[name].tsx`.
    * **Imports**: `import { cva, type VariantProps } from "class-variance-authority";`
    * **Structure**: Export a named functional component with `forwardRef`.
    * **Icons**: Use `lucide-react` if icons are present.
4.  **Verification**:
    * Ensure all colors use `token-based` classes (e.g., `bg-primary`), NEVER hex codes.

This command will be available in chat with /scaffold-component
