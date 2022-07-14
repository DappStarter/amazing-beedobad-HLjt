require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note maze protect good kitchen obscure sister'; 
let testAccounts = [
"0x0b7161ff2fce6a315169acff225125594344ede1e92b4b905ea1694764acb496",
"0xd58609c5df2711a810f6b4187f436e6b7fec3386d3e5ba98fe49efadabbe6cd0",
"0xcae2805b762a1e5c606be2b4c3e4ae2870a30d97a2b7084b6442675c977fba82",
"0x275b2e915f3d222f1156a0971eb0e73552633f48029d9fdd788013856be224fc",
"0x965887d2bb0fbf4520fa54bce62c13b5f80b300b7a1e15c3b8e56036c2bd0e7d",
"0x3dd6e7192df9e531a30972e19e63ef390b3e3f93be42e8bf5215686af81cab55",
"0x33009abbb15079374b59db2f8af8cd7ff2c8c457a0537a94eca512816bd0f5ac",
"0x42243a909a20ccf7d9228e03509fd830b3799d7209dff63d2c2121f852bdfee1",
"0x76f17004beb74731f0098f5eb41f2f1c28b5575ce0ca433ecaba5001ce197b87",
"0xafe7da40fb3fc191644e28979cb9cb0b1ba495be8b3271ca2cd5dbbcf5c123bc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

