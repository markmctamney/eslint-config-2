# eslint-config-markmctamney

Personal setup for `ESLint`, `Prettier`, and `TypeScript`

## Overview

### File Types / Extensions: 

- TypeScript (`.tsx`, `.ts`)
- JavaScript (`.js`)
- JSON (`.json`, `.jsonc`, `.json5`)
- YAML (`.yaml`, `.yml`)
- GraphQL (`.graphql`, `gql`)

### Target Frameworks:

- React Native / Expo
- React / NextJS

## Installation

```sh
yarn add -D eslint-config-markmctamney@https://github.com/markmctamney/eslint-config
```

You will also need to install `eslint`, `prettier`, `@typescript-eslint/eslint-plugin`, and `@typescript-eslint/parser`:

```sh
yarn add -D eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## Usage

Import this config into your own ESLint configuration using the `extends` option. ESLint checks both package.json and .eslintrc.* files for its configuration:

### package.json
```js
{
  "eslintConfig": {
    "extends": "markmctamney"
  }
}
```

### .eslintrc.js
```js
module.exports = {
  extends: 'markmctamney',
};
```

## Customizing Prettier

If you would like to customize the Prettier settings, create a file named `.prettierrc` in your project directory. An example of Prettier configuration file:

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "singleQuote": true,
  "jsxBracketSameLine": true,
  "trailingComma": "es5"
}
```

Read more about [configuring `prettier`](https://prettier.io/docs/en/configuration.html) and [all of the available options](https://prettier.io/docs/en/options.html).

