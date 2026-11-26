const fs = require("fs");
const path = require("path");

function joinB64(prefix, count, outFile) {
  let s = "";
  for (let i = 0; i < count; i++) {
    const f = path.join(__dirname, "github-payload", `${prefix}.${i}`);
    s += fs.readFileSync(f, "utf8");
  }
  const buf = Buffer.from(s, "base64");
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, buf);
  console.log("wrote", outFile, buf.length, "bytes");
}

joinB64("electron-main.b64", 6, path.join(__dirname, "electron", "main.cjs"));
joinB64("src-main.b64", 8, path.join(__dirname, "src", "main.jsx"));
joinB64("src-styles.b64", 2, path.join(__dirname, "src", "styles.css"));
console.log("Done. Run: npm install && npm run dev");
