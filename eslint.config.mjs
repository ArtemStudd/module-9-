import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
  ignores: ['node_modiles', 'dist']
  },
  {languageOptions: { 
    globals: {
      ...globals.browser,
    ...globals.es2021 }
  }
},
  pluginJs.configs.recommended,
  {
    files: ['**/*.js'],
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules:
    {
      ...eslintConfigPrettier.rules,
    'prefer-const' : "error",
    "no-var" : "error",
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off'
    }
  }
];