// imports 
const { ethers } = require('hardhat')

// async main function 

const main = async () => {
  const simpleStorageFactory = await ethers.getContractFactory(
    "SimpleStorage"
  )
  console.log("deploying")
  const simpleStorage = await simpleStorageFactory.deploy()
  console.log(`deployed to : ${await simpleStorage.getAddress()}`)

  const currentValue = await simpleStorage.give();
  console.log(`current value : ${currentValue}`)

  const tranactionDeployement = await simpleStorage.store(100);
  await tranactionDeployement.wait(1)

  const updatedValue = await simpleStorage.give();
  console.log(`current value : ${updatedValue}`)


}

// call main function

main()
  .then((e) => process.exit(0))
  .catch((e) => {
    console.log(e);
    process.exit(1)
  })