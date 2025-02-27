const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es', 'zh-CN', 'hi', 'tr-TR', 'zh-TW']
  },
  localePath: path.resolve('public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  keySeparator: false,
  namespaceSeparator: false,
  pluralSeparator: '——',
  contextSeparator: '——'
}
