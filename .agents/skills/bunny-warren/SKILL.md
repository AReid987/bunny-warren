```markdown
# bunny-warren Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `bunny-warren` TypeScript repository. You'll learn about file naming, import/export styles, commit conventions, and how to structure and run tests. This guide is ideal for contributing to or maintaining the codebase with consistency.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `userProfile.ts`, `dataFetcher.test.ts`

### Import Style
- Use **relative imports** for referencing local modules.
  - Example:
    ```typescript
    import { fetchData } from './dataFetcher';
    ```

### Export Style
- Use **named exports** for all modules.
  - Example:
    ```typescript
    // dataFetcher.ts
    export function fetchData() { /* ... */ }
    ```

### Commit Messages
- Follow **conventional commit** format.
- Use the `build` prefix for build-related changes.
  - Example:
    ```
    build: update dependencies for security patch
    ```

## Workflows

### Code Contribution
**Trigger:** When adding or updating code in the repository  
**Command:** `/contribute`

1. Create or update files using camelCase naming.
2. Use relative imports for any local modules.
3. Export functions, types, or constants using named exports.
4. Write or update tests in files matching `*.test.*`.
5. Commit changes using the conventional commit format (e.g., `build: describe your change`).
6. Submit a pull request for review.

### Writing Tests
**Trigger:** When adding or modifying functionality that requires testing  
**Command:** `/write-test`

1. Create a test file named with the pattern `*.test.ts` (or `.js` if applicable).
2. Write tests for your functions or modules.
3. Ensure tests are discoverable by the test runner (framework is currently unknown).
4. Run tests locally to verify correctness.

## Testing Patterns

- Test files follow the `*.test.*` naming convention (e.g., `userProfile.test.ts`).
- The specific testing framework is not detected; check existing test files for framework clues.
- Place test files alongside the modules they test or in a dedicated test directory.

**Example:**
```typescript
// dataFetcher.test.ts
import { fetchData } from './dataFetcher';

describe('fetchData', () => {
  it('should return expected data', () => {
    // test implementation
  });
});
```

## Commands
| Command        | Purpose                                             |
|----------------|-----------------------------------------------------|
| /contribute    | Step-by-step guide for contributing code            |
| /write-test    | Instructions for writing and organizing tests       |
```
