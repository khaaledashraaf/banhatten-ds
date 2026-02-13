# finalize-component

Description: Final validation and synchronization after implementing a component.

---

## Action Steps

1. Verify:
   - CVA structure is correct
   - No hex values used
   - Uses token classes only
   - forwardRef is implemented
   - Named exports only
   - Component exported in index.ts

2. Review accessibility considerations.

3. Update COMPONENT_TRACKER.md:
   - Mark component as complete
   - Ensure variant description matches implementation

---

## Constraints

- Do NOT refactor unrelated components.
- Do NOT introduce new architecture.
- Only validate and sync.
