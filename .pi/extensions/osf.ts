import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const skillsDir = resolve(packageRoot, "skills");

export default function osf(pi: ExtensionAPI) {
	pi.setLabel("OSF kit");
	pi.on("resources_discover", async () => ({
		skillPaths: [skillsDir],
	}));
}
