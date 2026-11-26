# Incomplete GitHub tree

Direct clones of this repo may be **missing**:

- `src/main.jsx`
- `electron/main.cjs`
- full `src/styles.css`

because those files exceeded the upload size limit from the build agent.

**Use the complete release zip** `cookie-vault-windows-1.6.0.zip` from the project chat/artifacts, then:

```powershell
cd path\to\extracted\folder   # must contain package.json
.\install.ps1
npm run dev
```

Requires **Node 20 or 22 LTS** (not Node 26).
