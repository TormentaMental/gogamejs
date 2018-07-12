const WhiteStoneBowl = require('../domain/WhiteStoneBowl');
const BlackStoneBowl = require('../domain/BlackStoneBowl');
const BlackStone = require('../domain/BlackStone');
const WhiteStone = require('../domain/WhiteStone');

describe('TakeStonesFromBowl', () => {
    
    it('should take a BlackStone from a Bowl of BlackStones', () => {
        const bowl = new BlackStoneBowl();
        const stone = bowl.takeStone();
        expect(stone instanceof BlackStone).toBeTruthy();
    })
    it('should take a WhiteStone from a Bowl of WhiteStones', () => {
        const bowl = new WhiteStoneBowl()
        const stone = bowl.takeStone()
        expect(stone instanceof WhiteStone).toBeTruthy()
    })
})