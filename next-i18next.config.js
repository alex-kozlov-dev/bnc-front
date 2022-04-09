const path = require('path')

module.exports = {
  i18n: {
    locales: ['en', 'uk'],
    defaultLocale: 'uk',
    localePath: path.resolve('./public/locales'),
    localeDetection: false
  }
}
