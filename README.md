# OSF kit

26 OpenSpec-flow skills + 8 supporting agents for **Claude Code** and **OMP**.

Marketplace `osf-kit`, plugin `osf`, `source: "./"`.

## Install (one command)

```bash
# Claude Code
claude plugin marketplace add sonnguyen1812/osf-kit && claude plugin install osf@osf-kit

# OMP (extension native: /extensions + /osf)
omp plugin install github:sonnguyen1812/osf-kit

# OMP marketplace (máy clone GitHub được)
omp plugin marketplace add sonnguyen1812/osf-kit && omp plugin install osf@osf-kit
```

Trong TUI (hai bước, marketplace chưa có sẵn):

```text
# Claude Code
/plugin marketplace add sonnguyen1812/osf-kit
/plugin install osf@osf-kit

# OMP
/marketplace add sonnguyen1812/osf-kit
/marketplace install osf@osf-kit
```

`/reload-plugins` hoặc **restart session** (extension cần restart).

- Claude Code: `/osf:osf list` · `/osf:feat …` (plugin namespace)
- OMP: `/osf list` · `/osf feat …` — hiện **OSF kit** trong `/extensions`

## Notes

- OMP không kế thừa Claude Code app. Skill/agent đi qua plugin OMP; `/osf` là `registerCommand` trong `extensions/osf.ts`.
- Không copy skill vào `~/.claude/skills` hay `~/.omp/agent/skills`.
- Windows: đừng `omp plugin link` — symlink `EPERM`. Dùng `omp plugin install github:sonnguyen1812/osf-kit` nếu `marketplace add` timeout 443.

## Layout

```text
.claude-plugin/{plugin.json,marketplace.json}
.omp-plugin/{plugin.json,marketplace.json}
package.json                 omp.extensions + omp.skills
extensions/osf.ts            OMP: /osf + /extensions
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
