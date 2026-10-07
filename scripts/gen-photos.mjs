// Scans public/images/gallery and writes lib/photos.json.
// Name files like "01-living-room.jpg" -> order by number, caption "Living room".
// Falls back to placeholders when the folder is empty.
import { readdirSync, writeFileSync, existsSync } from "node:fs";

const IMG = /\.(jpe?g|png|webp|avif|svg)$/i;
const collator = new Intl.Collator("en", { numeric: true });

const read = (dir) => (existsSync(dir) ? readdirSync(dir).filter((f) => IMG.test(f)).sort(collator.compare) : []);

let dir = "images/gallery";
let files = read(`public/${dir}`);
if (files.length === 0) {
  dir = "images/placeholder";
  files = read(`public/${dir}`);
}

const photos = files.map((f) => ({
  src: `/${dir}/${f}`,
  alt: f.replace(IMG, "").replace(/^\d+[-_.\s]*/, "").replace(/[-_]+/g, " ").trim().replace(/^./, (c) => c.toUpperCase()) || "Photo",
}));

writeFileSync("lib/photos.json", JSON.stringify(photos, null, 2) + "\n");
console.log(`gen-photos: ${photos.length} photos from ${dir}`);
