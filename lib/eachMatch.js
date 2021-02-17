const { RegExp } = require('./regexp')

const eachMatch = function*(regexp, input) {
    regexp = new RegExp(regexp, regexp.global ? '' : regexp.flags + 'g')

    let match

    while ((match = regexp.exec(input)) !== null) {
        yield match
    }
}

module.exports = { eachMatch }
