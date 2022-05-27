module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    // https://eslint.vuejs.org/user-guide/#installation
    'plugin:vue/vue3-recommended',

    // https://www.npmjs.com/package/@typescript-eslint/parser
    // https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',

    // https://github.com/nuxt/eslint-config#typescript
    // https://typescript.nuxtjs.org/guide/lint/
    '@nuxtjs/eslint-config-typescript',

    'prettier',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['vue', '@typescript-eslint', 'prettier'],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    requireConfigFile: false,
    sourceType: 'module',
    eecmaVersion: 'latest',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: true,
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'no-async-promise-executor': 'off',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'require-await': 'off',

    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],

    'vue/padding-line-between-blocks': ['error', 'always'],

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'import', next: 'export' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'always', prev: ['case', 'default'], next: '*' },
    ],

    'lines-between-class-members': ['error', 'always'],

    'vue/new-line-between-multi-line-property': [
      'error',
      {
        minLineOfMultilineProperty: 2,
      },
    ],

    'vue/multi-word-component-names': 0,

    'tailwindcss/classnames-order': [
      'warn',
      {
        prependCustom: true,
        officialSorting: true,
      },
    ],

    'tailwindcss/no-custom-classname': ['off'],

    // prettier
    'prettier/prettier': [
      'error',
      {
        usePrettierrc: true,
        endOfLine: 'auto',
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        arrowParens: 'always',
        vueIndentScriptAndStyle: true,
      },
    ],
  },
}
