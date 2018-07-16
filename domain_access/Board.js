const SmallBoard = require('../domain/SmallBoard')
const BigBoard = require('../domain/BigBoard')

const map = {
    small: SmallBoard,
    big: BigBoard
}

module.exports = {
    create(key) {
        const Constructor = map[key]
        return new Constructor()
    }
}