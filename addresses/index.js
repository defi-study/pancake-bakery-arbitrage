const pancakev1Mainnet = require('./pancakev1-mainnet.json');
const pancakeMainnet = require('./pancake-mainnet.json');
const bakeryMainnet = require('./bakery-mainnet.json');

module.exports = {
    mainnet: {
        pancake: pancakeMainnet,
        pancakev1: pancakev1Mainnet,
        bakery: bakeryMainnet
    }
};

