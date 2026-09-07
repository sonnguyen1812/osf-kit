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

OMP: **restart session** sau khi cài.

- Claude Code: `/osf:osf list` · `/osf:feat …`
- OMP: `/skill:osf list` · `/skill:osf feat …` (`skills.enableSkillCommands`)

## Notes

- Superpowers trên GitHub chỉ document **Pi** (`pi install git:github.com/obra/superpowers`), không có mục OMP. OMP đọc `package.json#pi` (fallback).
- Layout Pi/OMP: `.pi/extensions/*.ts` + `pi.extensions` / `pi.skills`. Extension **không** `registerCommand` — `/osf` slash đã bỏ. Tắt omp-plugins **không** unload TS extension; skill vẫn có thể vào qua `resources_discover`.
- Claude: catalog `marketplace.json`. OMP: `omp plugin install github:sonnguyen1812/osf-kit`.
- Không copy skill vào `~/.claude/skills` / `~/.omp/agent/skills`. Đừng `omp plugin link` trên Windows.

## Layout

```text
.claude-plugin/{plugin.json,marketplace.json}
.omp-plugin/{plugin.json,marketplace.json}
package.json                 type:module, pi.extensions + pi.skills
.pi/extensions/osf.ts        Pi/OMP adapter (no registerCommand)
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
