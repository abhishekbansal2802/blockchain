import { ethers } from "hardhat"
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types"

const main = async () => {
  const simpleStorageFactory: SimpleStorage__factory = await ethers.getContractFactory("SimpleStorage") as SimpleStorage__factory
  const simpleStorage: SimpleStorage = await simpleStorageFactory.deploy()

  console.log(`situated at ${await simpleStorage.getAddress()}`)

  const oldNumber = await simpleStorage.give();
  console.log(`old number : ${oldNumber.toString()}`)

  await simpleStorage.store(100);

  const newNumber = await simpleStorage.give()
  console.log(`New number : ${newNumber.toString()}`)
}

main()
  .then((e) => process.exit(0))
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })