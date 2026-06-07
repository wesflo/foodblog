# @wesflo/ui

`@wesflo/ui` is the reusable UI package and Storybook workbench for the food blog.

## Conventions

- Global styles are exported through `@wesflo/ui/styles`.
- Shared design values use semantic CSS Custom Properties prefixed with `--wf-*`.
- Component layout, variants, and local states live in CSS Modules.
- Blue is the primary interaction color. Pink is reserved for editorial accents.
- Disabled states use dedicated state colors rather than global opacity.
- Base UI is used where it provides accessibility behavior, such as dialogs, menus, popovers, tooltips, and accordions.
- Production exports are listed explicitly in `src/index.ts`; stories and fixtures are not exported.
