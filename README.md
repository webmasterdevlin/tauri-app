# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

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