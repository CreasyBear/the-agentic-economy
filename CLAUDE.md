# CLAUDE Rules

## Design System

Always read DESIGN.md before making any visual or UI decisions.
All font choices, colors, spacing, and aesthetic direction are defined there.
Do not deviate without explicit user approval.
In QA mode, flag any code that doesn't match DESIGN.md.
When the user specifies a social account in the context of site CTA or launch planning, treat it as the CTA destination to wire into the site unless they explicitly ask for an on-platform action instead.
For major visual changes like typography, layout tone, or global art direction, pause and ask for explicit visual confirmation before committing or pushing them.
Avoid symbolic operator syntax inside stringified JSON payload values in content; use semantic strings or arrays instead.
