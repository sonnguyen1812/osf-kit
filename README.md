# OSF kit

26 OpenSpec-flow skills + 8 supporting agents for **Claude Code** and **OMP**.

Marketplace `osf-kit`, plugin `osf`, `source: "./"`.

## Install (one command)

```bash
# Claude Code
claude plugin marketplace add sonnguyen1812/osf-kit && claude plugin install osf@osf-kit

# OMP
omp plugin install github:sonnguyen1812/osf-kit
```

Claude TUI (marketplace chưa có):

```text
/plugin marketplace add sonnguyen1812/osf-kit
/plugin install osf@osf-kit
```

OMP: **restart session** sau khi cài. Tắt **OMP Extension Packages** thì skill OSF biến mất (provider `omp-plugins`).

- Claude Code: `/osf:osf list` · `/osf:feat …`
- OMP: `/skill:osf list` · `/skill:osf feat …` (`skills.enableSkillCommands`)

## Notes

- Official OMP plugin: `package.json#omp` (có thể `{}`) + `skills/<name>/SKILL.md` + `agents/`. Discovery: provider **omp-plugins**. Không `omp.extensions` — TS factory load qua `getAllPluginExtensionPaths`, **không** tắt theo master switch.
- Superpowers GitHub là gói **Pi**, không phải spec OMP.
- Claude: `marketplace.json`. OMP: `omp plugin install github:sonnguyen1812/osf-kit`.
- Không copy skill vào `~/.claude/skills` / `~/.omp/agent/skills`. Đừng `omp plugin link` trên Windows.

## Layout

```text
.claude-plugin/{plugin.json,marketplace.json}
.omp-plugin/{plugin.json,marketplace.json}
package.json                 omp: {}
skills/<name>/SKILL.md       omp-plugins (gated)
agents/osf-*.md
references/host.md
```

## Kit

Planning: feat, fix, chore, refactor, perf, docs, test, ci, docker, setup

Spec: proposal, apply, verify, archive

Investigate: analyze, gap-audit, explain, review, research, browser

Automation: autopilot, git, clean-room, uiux-design

Internal: explore, osf

Agents: osf-analyze, osf-apply, osf-archive, osf-clean-room, osf-gap-audit, osf-researcher, osf-uiux-designer, osf-verify
