import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";

const pluginRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

function stripFrontmatter(md: string): string {
	if (!md.startsWith("---")) return md;
	const end = md.indexOf("\n---", 3);
	if (end === -1) return md;
	return md.slice(end + 4).replace(/^\n/, "");
}

export default function osf(pi: ExtensionAPI) {
	pi.setLabel("OSF kit");

	pi.registerCommand("osf", {
		description: "OSF dispatcher. /osf list · /osf <skill> [args]",
		handler: async (args) => {
			const skillDir = join(pluginRoot, "skills", "osf");
			const body = stripFrontmatter(
				readFileSync(join(skillDir, "SKILL.md"), "utf8"),
			);
			const user = args.trim();
			pi.sendMessage(
				{
					customType: "osf-skill",
					content: `${body}\n\n[Skill directory: ${skillDir}]\nUser: ${user || "(none)"}`,
					display: true,
					attribution: "user",
				},
				{ triggerTurn: true },
			);
		},
	});
}
