import config from "../config/config.json" assert { type: "json" };
import path from "path";

console.log("Loaded config:");
console.log(config);

// Resolve absolute paths
const firstApp = config.apps[0];
const inputPath = path.resolve(firstApp.inputPath);
const outputPath = path.resolve(firstApp.baselineOutputPath);

console.log(`Running evaluation on: ${firstApp.name}`);
console.log(`Input: ${inputPath}`);
console.log(`Output: ${outputPath}`);

