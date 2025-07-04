import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import eslintPluginImport from "eslint-plugin-import";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { 
      js,
      import: eslintPluginImport,
    },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { 
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      "import/resolver": {
        typescript: {project: "./tsconfig.json"},
      },
    },
    rules: {
      "semi": ["error", "always"],
      "import/no-unresolved": "error",
      "import/named": "error",
    },
  },
]);