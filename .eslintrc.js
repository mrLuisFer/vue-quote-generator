module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'vue/require-default-prop': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/order-in-components': 'off',
    'vue/attributes-order:': 'off',
    'vue/no-unused-vars': [
      'error',
      {
        ignorePattern: '^_',
      },
    ],
  },
}
