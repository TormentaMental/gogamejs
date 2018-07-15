const Board = require('../domain/Board');
const InterSection = require('../domain/InterSection');
const BlackStone = require('../domain/BlackStone');
const WhiteStone = require('../domain/WhiteStone');

describe('AddStoneOnToBoardIntersection', () => {

    it('should can add a stone on to board intersection', () => {

        const board = new Board()
        .move(new InterSection(4,5), new BlackStone())

        expect(board.toMovesAsArray()).toEqual([
            "#0 Move BlackStone to 4,5"
        ])
    });
    it('should can add 2 stone on to board intersection', () => {

        const board = new Board()
        .move(new InterSection(4,5), new BlackStone())
        .move(new InterSection(5,5), new WhiteStone())

        expect(board.toMovesAsArray()).toEqual([
            "#0 Move BlackStone to 4,5",
            "#1 Move WhiteStone to 5,5"
        ])
    });
    it('should can add 5 stone on to board intersection', () => {

        const board = new Board()
        .move(new InterSection(1,2), new BlackStone())
        .move(new InterSection(1,3), new WhiteStone())
        .move(new InterSection(1,4), new BlackStone())
        .move(new InterSection(4,4), new WhiteStone())
        .move(new InterSection(2,3), new BlackStone())

        expect(board.toMovesAsArray()).toEqual([
            "#0 Move BlackStone to 1,2",
            "#1 Move WhiteStone to 1,3",
            "#2 Move BlackStone to 1,4",
            "#3 Move WhiteStone to 4,4",
            "#4 Move BlackStone to 2,3"
        ])
    });
})