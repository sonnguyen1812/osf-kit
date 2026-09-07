# OSF kit

26 OpenSpec-flow skills and 8 supporting agents for Claude Code and OMP.

Marketplace `osf-kit`, plugin `osf`, `source: "./"`.

## Install

```bash
# Claude Code
claude plugin marketplace add sonnguyen1812/osf-kit && claude plugin install osf@osf-kit

# OMP
omp plugin install github:sonnguyen1812/osf-kit
```

Claude Code TUI (if the marketplace is not registered yet):

```text
/plugin marketplace add sonnguyen1812/osf-kit
/plugin install osf@osf-kit
```

Restart the OMP session after install.

- Claude Code: `/osf:osf list` · `/osf:feat …`
- OMP: `/skill:osf list` · `/skill:osf feat …`

## Kit

Planning: feat, fix, chore, refactor, perf, docs, test, ci, docker, setup

Spec: proposal, apply, verify, archive

Investigate: analyze, gap-audit, explain, review, research, browser

Automation: autopilot, git, clean-room, uiux-design

Internal: explore, osf

Agents: osf-analyze, osf-apply, osf-archive, osf-clean-room, osf-gap-audit, osf-researcher, osf-uiux-designer, osf-verify
