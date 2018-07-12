const WhiteStone = require('./WhiteStone');

class WhiteStoneBowl {
    takeStone() {
        return new WhiteStone();
    }
}

module.exports = WhiteStoneBowl