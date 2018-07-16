const SmallBoard = require('../domain/SmallBoard');
const BigBoard = require('../domain/BigBoard');
const Board = require('../domain_access/Board');

describe('SelectDiffentSizesOfBoard',  () => {

    it('should create a board size small',  () => {
        expect(Board.create('small') instanceof SmallBoard).toBeTruthy();
    });
    it('should create a board size big',  () => {
        expect(Board.create('big') instanceof BigBoard).toBeTruthy();
    });
});