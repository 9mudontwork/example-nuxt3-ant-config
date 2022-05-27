/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

const remResolver = (value = 0) => {
  const isNumber = Number(value)

  if (isNumber) {
    value = Number(value) / 16 + 'rem'
  }

  return value
}

const customUnitPlugin = () => {
  return plugin(function ({ matchUtilities, theme, variants }) {
    const coreList = {
      padding: 'p',
      // margin: 'm',
      width: 'w',
      height: 'h',
      maxHeight: 'max-h',
      minHeight: 'min-h',
      maxWidth: 'max-w',
      minWidth: 'min-w',
    }

    const genCore = (coreKey, coreValue) => {
      matchUtilities(
        {
          [coreValue]: (value) => ({
            [coreKey]: remResolver(value),
          }),
        },
        {
          values: theme(coreKey),
          variants: variants(coreKey),
        }
      )
    }

    for (const key in coreList) {
      genCore(key, coreList[key])
    }

    const insetList = {
      padding: 'p',
      // margin: 'm',
    }

    for (const key in insetList) {
      matchUtilities(
        {
          [`${insetList[key]}l`]: (value) => ({
            [`${key}-left`]: remResolver(value),
          }),

          [`${insetList[key]}r`]: (value) => ({
            [`${key}-right`]: remResolver(value),
          }),

          [`${insetList[key]}t`]: (value) => ({
            [`${key}-top`]: remResolver(value),
          }),

          [`${insetList[key]}b`]: (value) => ({
            [`${key}-bottom`]: remResolver(value),
          }),

          [`${insetList[key]}x`]: (value) => ({
            [`${key}-left`]: remResolver(value),
            [`${key}-right`]: remResolver(value),
          }),

          [`${insetList[key]}y`]: (value) => ({
            [`${key}-top`]: remResolver(value),
            [`${key}-bottom`]: remResolver(value),
          }),
        },
        {
          values: theme(key),
          variants: variants(key),
        }
      )
    }
  })
}

const customFontSize = () => {
  return plugin(function ({ matchUtilities, theme, variants }) {
    matchUtilities(
      {
        fz: (value) => ({
          fontSize: remResolver(value),
        }),
      },
      {
        values: theme('fontSize'),
        variants: variants('fontSize'),
      }
    )
  })
}

exports.customUnitPlugin = customUnitPlugin
exports.customFontSize = customFontSize
