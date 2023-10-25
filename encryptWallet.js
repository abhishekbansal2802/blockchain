const ethers = require("ethers")
const fs = require("fs")
const dotenv = require("dotenv")

dotenv.config(
    {
        path: "./.env"
    }
)

const main = async () => {

    const wallet = new ethers.Wallet(
        process.env.PRIVATE_ADD
    )
    const encryptedKey = await wallet.encrypt(
        process.env.PASSWORD
    )

    fs.writeFileSync(
        "./.encryptedKey.json",
        encryptedKey
    )

}

main()