# commit-component

Description: Stages, commits, and pushes changes related to the most recently implemented component using a clean, conventional commit message.

---

## Action Steps

1. Analyze git status and git diff.

2. Identify:
   - Newly created component files
   - Modified files related to that component
   - Updates to COMPONENT_TRACKER.md
   - Documentation files (if added)

3. Generate a conventional commit message using this format:

   feat(ui): add [ComponentName] component

   - Implements CVA variants
   - Uses token-based classes only
   - Adds forwardRef support
   - Updates tracker and docs (if applicable)

4. Stage only relevant files:
   - packages/ui/src/components/[ComponentName].tsx
   - packages/ui/src/index.ts (if modified)
   - COMPONENT_TRACKER.md (if modified)
   - apps/docs/... (if modified)

5. Commit using the generated message.

6. Push to current branch.

---

## Constraints

- Do NOT stage unrelated files.
- Do NOT commit node_modules or lockfile unless explicitly modified for dependency reasons.
- If no changes are detected, abort.
- If multiple components were modified, summarize them clearly in the commit message.
