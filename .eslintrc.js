module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  plugins: ['testcafe'],
  extends: ['eslint:recommended', 'plugin:testcafe/recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
}
