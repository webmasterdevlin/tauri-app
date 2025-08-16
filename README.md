# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

## Tailwind CSS v4 Integration & Migration (from v3 style)

Tailwind CSS v4 is installed using the official Vite plugin. Key migration points applied:

- Added `@import "tailwindcss";` instead of legacy `@tailwind base/components/utilities` directives.
- Using `@tailwindcss/vite` plugin for faster builds and automatic PostCSS handling (removed explicit `postcss` & `autoprefixer` dev deps).
- Updated utilities where relevant (`ring` -> `ring-3`, `shadow-sm` scale semantics noted, `outline-none` -> `outline-hidden`).
- Direct utility classes used in JSX instead of local `@apply` for simplicity; can reintroduce `@apply` if desired (supported via Tailwind's processor in v4 using native layers/utilities directives).

To add custom utilities or override defaults in v4, create them with the `@utility` directive inside a CSS file imported before usage. (Not strictly needed yet in this template.)

### Development

Start dev server with Tailwind processing:
```bash
npm run dev
```

### Notes on v4 changes reflected here

| Change | Applied Example |
| ------ | --------------- |
| Removed `ring` default 3px | Explicit `focus:ring-3 focus:ring-blue-500` |
| Outline rename | `outline-hidden` used in focus utilities |
| New import style | Single `@import "tailwindcss";` in `src/App.css` |

For further customization, define theme tokens using the `@theme` directive in any imported CSS file.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)



## Steps to create and run a new project on ios and android

create a new project using the following command
```bash
npm create tauri-app@latest
npm run dev
npx tauri android init
npx tauri android dev
npx tauri ios init
npx tauri ios dev 'iPhone 16'
```

NOTE: setup signing certificate in xcode before running the below command
```bash
npx tauri ios dev --host
```

### Building for publishing

```bash
npx tauri ios build
npx tauri android build
```