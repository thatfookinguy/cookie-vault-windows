# Cookie Vault (Windows)

## Complete install from GitHub

```powershell
git clone https://github.com/thatfookinguy/cookie-vault-windows.git
cd cookie-vault-windows
node reconstruct-sources.js
npm install
npm run dev
```

Use **Node 20 or 22 LTS** (not Node 26).

After `reconstruct-sources.js`, you get full `electron/main.cjs`, `src/main.jsx`, and `src/styles.css`.

## Features
- Large cookie folder scan + match active site
- Live session validation (logged in?)
- Account insights (membership/plan when site returns it)
- HTTP + SOCKS5 proxies

Cookie values are never shown in the UI.
