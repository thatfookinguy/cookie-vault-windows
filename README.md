# Cookie Vault (Windows)

## Full install from GitHub

```powershell
git clone https://github.com/thatfookinguy/cookie-vault-windows.git
cd cookie-vault-windows
node reconstruct-sources.js
npm install
npm run dev
```

**Node 20 or 22 LTS required** (not Node 26).

`reconstruct-sources.js` rebuilds `electron/main.cjs`, `src/main.jsx`, and `src/styles.css` from `github-payload/`.

## Features
- Large cookie folder scan + match active site
- Live session validation (still logged in?)
- Membership / plan via Pull account info when the site returns it
- HTTP + SOCKS5 proxies

Cookie values are never shown in the UI.
