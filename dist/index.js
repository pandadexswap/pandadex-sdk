
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./pandadex-sdk.cjs.production.min.js')
} else {
  module.exports = require('./pandadex-sdk.cjs.development.js')
}
