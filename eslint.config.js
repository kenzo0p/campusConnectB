import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'

export default tseslint.config(
  {
    ignores: ['node_modules', 'dist'],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettier, // <--- THIS FIXES YOUR CURRENT ERROR
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn'],
      'no-console': 'off',
    },

    ignores: ["node-modules", "dist"]
  },
)
