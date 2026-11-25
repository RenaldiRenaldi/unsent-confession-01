import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const configuredOutputDir = process.env.MAKEFUN_OUTPUT_DIR;
const outputDir = configuredOutputDir || "/output";
const entry = "To: my sister\nI still have the voicemail from the night before you left, and I have never once pressed play.";

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), entry, "utf8");
