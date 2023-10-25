import { task } from "hardhat/config";

export default task(
    "blockno",
    "get the block number",
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`current block number : ${blockNumber}`)
    }
)