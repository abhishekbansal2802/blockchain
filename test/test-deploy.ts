import { ethers } from 'hardhat';
import { SimpleStorage, SimpleStorage__factory } from '../typechain-types'
import { expect } from 'chai';


describe(
  "Simple Storage",
  async () => {
    let simpleStorageFactory: SimpleStorage__factory;
    let simpleStorage: SimpleStorage;
    beforeEach(async () => {
      simpleStorageFactory = await ethers.getContractFactory("SimpleStorage") as SimpleStorage__factory
      simpleStorage = await simpleStorageFactory.deploy()
    })

    it("should give zero before anything", async () => {
      const value = await simpleStorage.give()
      const expectedValue = "0"

      expect(value.toString()).to.equal(expectedValue)
    })

    it("should be able to update value", async () => {
      await simpleStorage.store(100)
      const value = await simpleStorage.give()
      const expectedValue = "100"

      expect(value.toString()).to.equal(expectedValue)
    })
  }
)