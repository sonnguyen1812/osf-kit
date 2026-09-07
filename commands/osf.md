---
name: osf
description: "Launch any OSF kit skill by name. Usage: /osf [skill] [args] · /osf list"
---

This command is the OSF dispatcher. Follow the `osf` skill in this plugin with the user's arguments.

- Claude Code: this command is namespaced as `/osf:osf`. Named skills are `/osf:feat`, `/osf:fix`, …
- OMP: read `skill://osf` (or this plugin's `skills/osf/SKILL.md`) and treat the rest of the invocation as user arguments. Then dispatch per that skill. Do not invoke `osf` again.

ARGUMENTS: $ARGUMENTS
