module.exports = {
  extends: ['airbnb-typescript-prettier', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'curly': ['error', 'all'],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'warn',
    'class-methods-use-this': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'lines-between-class-members': 'off',
    '@typescript-eslint/no-var-requires': 'warn',
    'camelcase': 'off'
  }
}
