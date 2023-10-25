const ethers = require("ethers")
const fs = require("fs")
const dotenv = require("dotenv")

dotenv.config(
    {
        path: "./.env"
    }
)

const main = async () => {
    const provider = new ethers.JsonRpcProvider(process.env.URL)
    const encryptedJson = fs.readFileSync(
        "./.encryptedKey.json"
    )
    let wallet = new ethers.Wallet(process.env.PRIVATE_ADD, provider)
    // wallet = wallet.connect(provider)
    const file1 = fs.readFileSync(
        "./SimpleStorage_sol_SimpleStorage.abi",
        "utf8"
    )
    const file2 = fs.readFileSync(
        "./SimpleStorage_sol_SimpleStorage.bin",
        "utf8"
    )
    // const contractFactory = new ethers.ContractFactory(file1, file2, wallet)
    // console.log("deploying")
    // const contract = await contractFactory.deploy()

    const contractFactory = new ethers.Contract("0x53ACCacfa380a9DaE6A592846518940237399523", file1, wallet)
    console.log(`contract address : ${await contractFactory.getAddress()}`)
    const favNumber = await contractFactory.Retrieve()
    console.log(typeof (favNumber))
    console.log(`current favorite number : ${favNumber.toString()}`)
    const nouce = await wallet.getNonce()
    const transactionResponse = await contractFactory.Store("456", { nonce: nouce })
    const transactionReciept = await transactionResponse.wait(1)
    const newNumber = await contractFactory.Retrieve()
    console.log(`current favorite number : ${newNumber.toString()}`)

}

main()