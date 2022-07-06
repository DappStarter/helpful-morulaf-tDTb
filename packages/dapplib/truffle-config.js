require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth remember unusual install glide flower genius'; 
let testAccounts = [
"0xfc4f598ba8c32490ee53cc2305a2191ec4c622f5b0d4f3e8bf85c94d4926e9c8",
"0xf86c7044a65518001fc58bdd105a39626255f0a5975d39b2455fc618be3dd39e",
"0x00d25cd7b36ea4aa3d3e52b8640be4a5877ffead46c3b27ca6ed62b988626f42",
"0xd8bd565be12153b89180c6f6e213c0434475c5b2ec82db04a6046cc7c1c230ac",
"0xcb7d728c461471294200e16453ecc275bc69ca3f3c52e0fc4ad013c1dd994308",
"0x39654f8af241f4d672bcea84c623908c472b7204c25dfb7268fe91fc4fa8da24",
"0xcf7bbbd75d680254794bab1d01c50d680fe63f6e00f566d8c1a73adf6842f13c",
"0xeebd912cbc47f7844da4f4e01355c74c3d56481004b3e2558ef1d410dd081cde",
"0xb4deaefde0defda3c1e5903b4d5078837d53643b99f99e96bbb3fd69882f1e45",
"0xd0ff3f9e6738a370753d00d38aaefda750ee74552cf8c5724beabe6201d55319"
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

