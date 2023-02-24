/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  overrides: [{ files: ['./.eslintrc.cjs'], parserOptions: { project: null } }],
  rules: {
    indent: ['warn', 2],
    'linebreak-style': ['warn', 'windows'],
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    curly: ['error', 'all'],
    '@typescript-eslint/consistent-type-imports': [
      2,
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
        // fixStyle: "separate-type-imports",
      },
    ],
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/array-type': [
      'warn',
      {
        default: 'generic',
        readonly: 'generic',
      },
    ],
    '@typescript-eslint/no-this-alias': ['warn', { allowedNames: ['shield'] }],
    '@typescript-eslint/explicit-function-return-type': ['warn'],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/sort-type-union-intersection-members': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        format: ['PascalCase'],
        selector: ['enumMember', 'class', 'interface', 'typeAlias'],
      },
      {
        format: ['snake_case'],
        selector: ['function', 'typeProperty'],
      },
      {
        format: ['camelCase'],
        selector: ['classMethod', 'classProperty'],
      },
      // {format:["snake_case"],selector:["classMethod"]}
    ],
    // extensions

    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': [
      'warn',
      { before: true, after: true },
    ],
  },
};
