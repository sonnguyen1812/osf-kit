# OSF kit

26 OpenSpec-flow skills + 8 supporting agents for **Claude Code** and **OMP**.

Marketplace `osf-kit`, plugin `osf`, `source: "./"`.

## Install (one command)

```bash
# Claude Code
claude plugin marketplace add sonnguyen1812/osf-kit && claude plugin install osf@osf-kit

# OMP
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

`/reload-plugins` hoặc session mới.

Gọi:

- Claude Code: `/osf:osf list` · `/osf:feat …`
- OMP: `/osf list` · `/osf feat …`

## Notes

- Không copy skill vào `~/.claude/skills`. OMP discovery là `skills/<name>/SKILL.md` (không recursive); `enableClaudeUser` thường tắt.
- Windows: đừng `omp plugin link` — symlink `EPERM`. Dùng marketplace install.
- Agent frontmatter chỉ `name` + `description` (không `model: sonnet|opus`, không `color`).
- Dual-host: `skills/osf/SKILL.md` + `references/host.md`. `/osf list` = KIT_CATALOG, không scan disk.

## Layout

```text
.claude-plugin/{plugin.json,marketplace.json}
.omp-plugin/{plugin.json,marketplace.json}
package.json                 pi.skills + omp.skills → ./skills
commands/osf.md
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
