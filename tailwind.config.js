/* eslint-disable @typescript-eslint/no-var-requires */
const { customUnitPlugin, customFontSize } = require('./tailwind.custom.config')

module.exports = {
  content: ['./app.vue', './global-components/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [customUnitPlugin(), customFontSize()],
  corePlugins: {
    padding: false,
    width: false,
    height: false,
    maxHeight: false,
    minHeight: false,
    maxWidth: false,
    minWidth: false,
  },
}
