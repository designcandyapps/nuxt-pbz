import tailwindcss from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
  },
}).prepend(tailwindcss.configs['flat/recommended'])
