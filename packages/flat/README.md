# @houheaven/eslint-config-helper-flat

ESLint Flat Config helper for @houheaven/eslint-config-helper.

## Installation

```bash
pnpm add -D @houheaven/eslint-config-helper-flat eslint
```

## Usage

Create `eslint.config.js` in your project root:

```javascript
const { es6, typescript, vue3, html } = require("@houheaven/eslint-config-helper-flat");

module.exports = [
  ...es6,
  ...typescript,
  ...vue3,
  ...html,
  {
    // Your custom overrides
    files: ["**/*.js", "**/*.ts", "**/*.vue"],
    rules: {
      "no-console": "warn",
    },
  },
];
```

## Features

- **ES6+**: Standard JS rules.
- **TypeScript**: Type-aware linting enabled by default (requires `tsconfig.json`).
- **Vue 3**: Vue 3 specific rules with TypeScript support.
- **HTML**: HTML linting rules.

## Requirements

- ESLint >= 9.0.0
- Node.js >= 18.0.0