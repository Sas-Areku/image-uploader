import fs from "fs";
import path from "path";
import readDirectory from "./src/readDirectory.js";
import uploadImages from "./src/upload/uploadImages.js";

// Starting file path
const requestPath = process.argv[2];

// Manifest objects
const localManifest = { 
  name: path.basename(requestPath), 
  type: "Directory", 
  children: [] 
};

const publicManifest = { 
  name: "Images",
  type: "Category",
  children: [] 
};

readDirectory(requestPath, localManifest);
await uploadImages(localManifest, publicManifest);
fs.writeFileSync('manifest.json', JSON.stringify(publicManifest, null, 2));