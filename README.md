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

OMP: **restart session** sau khi cài. Tắt **OMP Extension Packages** thì skill OSF biến mất (giống Superpowers).

- Claude Code: `/osf:osf list` · `/osf:feat …`
- OMP: `/skill:osf list` · `/skill:osf feat …` (`skills.enableSkillCommands`)

## Notes

- Claude: catalog `marketplace.json`. OMP: `omp plugin install github:sonnguyen1812/osf-kit` — đừng `marketplace add` + `osf@osf-kit`.
- OMP theo Superpowers: `.pi/extensions/osf.ts` chỉ `resources_discover` + label. **Không** `registerCommand`. Skill nằm `skills/<name>/SKILL.md`.
- Không copy skill vào `~/.claude/skills` / `~/.omp/agent/skills`.
- Windows: đừng `omp plugin link` (`EPERM`).

## Layout

```text
.claude-plugin/{plugin.json,marketplace.json}
.omp-plugin/{plugin.json,marketplace.json}
package.json                 type:module, omp.extensions, pi.extensions+skills
.pi/extensions/osf.ts        Superpowers-style (no /osf slash)
skills/<name>/SKILL.md
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
