import prettierPlugin from "eslint-plugin-prettier/recommended"
import { defineConfig, globalIgnores } from "eslint/config"
import tseslint from "typescript-eslint"
import eslint from "@eslint/js"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: false,
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^(_|ignore)",
        },
      ],
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          trailingComma: "all",
          printWidth: 100,
          semi: false,
          plugins: ["prettier-plugin-tailwindcss"],
        },
      ],
      "no-restricted-syntax": [
        "warn",
        {
          selector:
            "JSXAttribute[name.name='className'] Literal[value=/(?:^|\\s)(?:p|m|gap|pt|pb|pl|pr|px|py|mt|mb|ml|mr|mx|my|space-[xy]|w|h)-\\[\\d+(?:px|rem|em)\\]/]",
          message:
            "Avoid arbitrary spacing values (p-[20px], gap-[1rem]). Use design tokens instead (p-4, gap-6).",
        },
      ],
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "src/migrations/",
    "**/importMap.js",
  ]),
  prettierPlugin,
)
