# Full source for 1.6.0

GitHub API pushes from the build agent are size-limited for `src/main.jsx` and `electron/main.cjs`.

**Get the complete app:**
1. Download `cookie-vault-windows-1.6.0.zip` from the chat / build artifacts
2. Or clone this repo and replace/add:
   - `src/main.jsx`
   - `electron/main.cjs`
   - `src/styles.css`
3. Use **Node 20 or 22 LTS** (not Node 26)
4. `npm install` then `npm run dev`

## Live session + membership

- **Session validation** checks if cookies still authenticate against your saved site URL
- **Pull account info** reads membership/plan/balance when the site response includes them
- Requires saving the site once and pointing Account path at a page/API that returns account JSON when possible
