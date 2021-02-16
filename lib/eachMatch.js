const { RegExp } = require('./regexp')

const eachMatch = function*(regexp, input) {
    regexp = new RegExp(regexp, ((regexp.flags || '') + 'g').replace(/(.)+/, '$1'))

    let match

    while ((match = regexp.exec(input)) !== null) {
        yield match
    }
}

module.exports = { eachMatch }
