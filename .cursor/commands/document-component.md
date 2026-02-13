# document-component

Description: Generates and registers documentation for the most recently created UI component in the docs application.

---

## Action Steps

1. Identify the most recently added file in:
   packages/ui/src/components/

2. Extract:
   - Component name
   - Export name
   - Variants (if using CVA)
   - Props interface (if available)

3. Create a documentation file in:
   apps/docs/app/components/[component-name]-documentation.tsx

4. The documentation file must include:
   - Title (Component Name)
   - Short description
   - Basic usage example
   - Variant showcase (if applicable)
   - Size showcase (if applicable)
   - ImplementationPlayground integration (if present in project)
   - Proper imports from @banhatten/ui

5. Update:
   apps/docs/app/page.tsx

   - Import the new documentation component
   - Add it in correct visual order
   - Do NOT reorder unrelated sections
   - Maintain consistent structure with existing documentation sections

---

## Constraints

- Follow the existing documentation structure and style.
- Do NOT modify unrelated documentation files.
- Do NOT refactor layout.tsx or global styles.
- If documentation pattern cannot be inferred, abort and request clarification.
- Keep examples clean and minimal.
