const { task } = require("hardhat/config");

task("blockno", "print the current block number", async (taskArgs, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber()

    console.log(`current block number : ${blockNumber}`)
})