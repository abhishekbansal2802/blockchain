require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv")
require("./tasks/block_number")
require("hardhat-gas-reporter")

dotenv.config({
  path: "./.env"
})

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    "ganache": {
      url: process.env.URL,
      accounts: [
        process.env.PRIVATE_KEY
      ],
      chainId: 1337
    },
    "localhost": {
      url: "http://127.0.0.1:8545/",
      accounts: [
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
      ]
    }
  },
  solidity: "0.8.19",
  gasReporter: {
    enabled: false ,
    outputFile: "gasreport.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: process.env.API
  }
};
