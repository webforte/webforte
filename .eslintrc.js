const fs = require('fs')

const prettierOptions = JSON.parse(fs.readFileSync('./.prettierrc', 'utf8'))

module.exports = {
  parser: 'babel-eslint',
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: ['flowtype', 'prettier'],
  extends: [
    'plugin:flowtype/recommended',
    'plugin:flowtype-errors/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'no-multiple-empty-lines': [2, { max: 2 }],
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'global-require': 0,
    'import/no-named-as-default': 0,
    'require-default-props': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': 0,
    'react/no-danger': 0,
    'react/prefer-stateless-function': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'no-unused-vars': 1,
    'flowtype-errors/show-errors': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'react/prop-types': [2, { ignore: ['children'] }],
  },
}
