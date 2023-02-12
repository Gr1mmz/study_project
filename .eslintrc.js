module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'linebreak-style': ['error', 'windows'],
    'eol-last': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        onlyAttribute: [''],
      },
    ],
    'max-len': ['error', { ignoreComments: true }],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index', 'object'],
          'type',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
          },
          {
            pattern: 'src/',
            group: 'internal',
          },
          {
            pattern: 'features/',
            group: 'internal',
          },
          {
            pattern: 'pages/',
            group: 'internal',
          },
          {
            pattern: 'components/',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-native', 'type'],
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
