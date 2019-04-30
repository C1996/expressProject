module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:import/errors', 'plugin:import/warnings', 'standard'],
  plugins: ['import'],
  rules: {
    'no-multiple-empty-lines': 0,
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: 1,
    'comma-dangle': [1, 'never'],
    'linebreak-style': [0, 'error', 'windows'],
    'space-before-function-paren': 0
  }
}
