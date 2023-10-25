const { assert } = require("chai");
const { ethers } = require("hardhat")

describe("SimpleStorage", () => {
  let simpleStorageFactory;
  let simpleStorage
  beforeEach(async () => {
    simpleStorageFactory = await ethers.getContractFactory(
      "SimpleStorage"
    )
    simpleStorage = await simpleStorageFactory.deploy()
  })

  it(
    "should be equal to 0 at starting",
    async () => {
      const value = await simpleStorage.give()
      const expectedValue = "0"

      assert.equal(value.toString(), expectedValue)
    }
  )

  it(
    "should update when we call function store",
    async () => {
      await simpleStorage.store(100)
      const expectedValue = "100"

      const value = await simpleStorage.give()

      assert.equal(value.toString(), expectedValue)
    }
  )
})