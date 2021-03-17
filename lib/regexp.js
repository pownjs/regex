const Re2 = require('re2')

const _RegExp = typeof Re2 === 'function' ? Re2 : RegExp

module.exports = { RegExp: _RegExp }
