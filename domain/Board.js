class Board {

    constructor() {
        this.moves = [];
    }

    move(intersection, stone) {
        this.moves.push({
            intersection,
            stone
        })
        return this
    }
    toMovesAsArray() {
        return this.moves.map(({intersection, stone}, index) => {
            return `#${index} Move ${stone.toString()} to ${intersection.toString()}`
        })
    }
}

module.exports = Board