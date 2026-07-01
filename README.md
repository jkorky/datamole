# Datamole's React / TypeScript Assignment

**Time spent:** ~[5] hours

**Setup:** copy `client/.env.example` → `client/.env` (required for API calls).

--- 
Since I decided to proceed task by task and write commits after tasks as you suggested with atomic commits, it made my life a little more complicated, as I realized later. It would be easier and faster to make some key SOLID principles decisions at beginning and batch multiple tasks to one bigger cluster.
## Future improvements (if continued)
- `useTodos()` hook — thinner `App.tsx` -> If I continued refactoring, I’d extract todo state/handlers into `useTodos()` to keep `App` focused on layout. (SOLID principles)
- Error/loading states for API calls
- Input styling + focus ring
## Key decisions (beyond normal tasks)
**Validation**  
- Considered Zod; for a single required field (`label`) I used `trim()` + empty guard. Sufficient for assignment scope.

**API URL**  
- **Chosen (Strategy A):** `VITE_API_URL` in `.env`, direct calls to json-server.  
- **Not implemented (Strategy B):** relative `/api` path + Vite dev proxy (more production-like, more setup).  
- **Future:** build-time env validation in CI so missing `VITE_API_URL` fails at build, not in the browser.

**ESLint**
Project uses ESLint 9 with legacy `.eslintrc.cjs`. Quick fix: `ESLINT_USE_FLAT_CONFIG=false` in lint script. Story imports updated to `@storybook/react-vite`. Full flat-config migration deferred.

**UI scope**
Input styling left minimal (starter state). Prioritized functional UX: autofocus on add/edit, footer spacing, aria-labels on icon buttons, done label styling.

**Button variants (post-F9 refactor)**
Renamed `primary/icon` → `emphasized/default` — all buttons are icon-only; variants describe visual emphasis, not content type.

---
## Agentic development (Cursor)

- Used Cursor as a coding partner; I kept ownership of architecture, commits, and final decisions.
- Workflow: full plan first → implement README tasks one-by-one → atomic commits with task IDs (B1, F2, S1, …).
- Ask mode for review/trade-offs; Agent mode for focused implementation batches.
- I actively rejected over-engineering when proposed (useMemo for counts, Storybook docs addon).

--- 

# Original Assignment tasks:

## Bugs

- [x] **B1**: `List` content
    - Fix the content alignment of the non-empty `List` component.
- [x] **B2**: `Footer` alignment
    - Fix the `Layout` component so the `Footer` is always attached to the bottom of the `Layout`.

_Fix all other bugs and visual imperfections you find._

## Features

- [x] **F1**: Default values in `Footer`
    - Modify the counters in `Footer` to show 0 when no value(s) are passed.
- [x] **F2**: Load todo items
    - After opening the application, todo items should be loaded from the server
    - The todo items should be displayed in the `List` component.
- [x] **F3**: Add a todo item
    - Implement logic, which toggles visibility between the "add" button in the `Header` and a `Form` component.
    - Entering a value inside the `Form` component and submitting it should create a new todo item.
    - Data should be persisted on the server via an API call.
- [x] **F4**: Edit a todo item's label
    - Implement logic, which toggles visibility between the "edit" button in the `ListItem` and a `Form` component.
    - Entering a value inside the `Form` component and submitting it should edit the existing todo item.
    - Changes to the data should be persisted on the server via an API call.
- [x] **F5**: Complete a todo item
    - After clicking on the checkbox in the `ListItem`, the todo item should toggle between "done" and "todo" states.
    - Changes to the data should be persisted on the server via an API call.
- [x] **F6**: Delete a todo item
    - After clicking the "delete" button in the `ListItem`, the todo item should be deleted.
    - Changes to the data should be persisted on the server via an API call.
- [x] **F7**: Sort the todo items
    - Sort the list of the todo items:
        - "todo" items (not "done") should be displayed first,
        - after that, items should be sorted by their creation date, descending.
- [x] **F8**: Count the todo items
    - Show a number of the "todo"/"done" items in the `Footer`.
- [x] **F9**: `Button` component
    - Create a `Button` component and use it instead of HTML `button` elements.

## Styling

- [x] **UI1**: `Header` "add" button alignment
    - The "add" button should be aligned to the right in the `Header` component.
- [x] **UI2**: `ListItem` actions alignment
    - Action buttons in the `ListItem` component should be aligned to the right.
- [x] **UI3**: `ListItem` actions visibility
    - Action buttons in the `ListItem` component should be visible only when hovering over the `ListItem`.

## Stories (optional tasks)

- [x] **SB1**: Add a story/stories for the `Layout` component.
- [x] **SB2**: Add stories showing available `Button` variants.
- [x] **SB3**: Add a story showcasing the `ListItem` actions visibility change on hover (implemented in _"UI3"_).

## Server

- [x] **S1**: Implement a custom endpoint for marking single todo item as "done". Calling this endpoint sets the `done` field to `true` and the `finishedAt` field to current time. Use this new endpoint in the client.
