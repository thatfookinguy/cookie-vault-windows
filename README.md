# Cookie Vault (Windows)

Local Electron app for **authorized** cookie inventory and **live session checks**.

## What it does

- Scan large cookie folders (thousands of files)
- Match the right cookie file to a saved site
- **Live validation** — sends cookies only to *your* configured site URL to see if the session is still logged in
- **Account insights** — when the site returns it: name, plan / membership (Free vs Premium), balance, etc. (color-coded)
- HTTP + SOCKS5 proxies, vault folders, restore/revive, DevTools HAR import

Cookie **values are never shown** in the UI.

## Quick start

```powershell
# Use Node 20 or 22 LTS (not Node 26)
npm install
npm run dev
```

Production:

```powershell
npm run dist
```

## Live "logged in?" + membership

1. Save the site once (URL + optional account path e.g. `/api/me`)
2. Scan cookie folder → **Match active site**
3. **Session validation** → Valid / Expired / Action needed
4. **Pull account info** → membership / plan fields when the site exposes them

Only use against sites and sessions you own or are authorized to administer.

## Proxy examples

```
1.2.3.4:8080
socks5://1.2.3.4:1080
socks5://user:pass@1.2.3.4:1080
```
