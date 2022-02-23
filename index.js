const HDKey = require('hdkey')
// const hdkey = HDKey.fromExtendedKey("xpub6BvuYuTpk1DKCZrkYC1mvu5wpwqbYYrrGULemQ1wRMD733pUifDV32AFS8io5azjwkr3jugzVH8JYo53uByQyWyYXFPiPvPznsRJxT93e2g")
const hdkey = HDKey.fromExtendedKey("xprv9xwZ9Pvvudf1z5nHSAUmZm9DGv17968zuFR3y1cKs1g8AFVLB7uEVDqmas5d1gaWtwrUMk7KxeUUz5Abc4U8vFiLZWtGbvZS6ZEh6G45E3a")
const bitcoin = require('bitcoinjs-lib')
const bitcoinMessage = require('bitcoinjs-message')

const signature = "H6jp+4ofJPlMmSu5Owh2iuL176YtY99aSv0iE7d8JGS+QmT888KUMdM9nYLhJR33bCcxdk86T/JVB8lgX+Gm3x4="


const message = "thisistestmessage"

const sig = bitcoinMessage.sign(message, hdkey.privateKey, true)
console.log(sig);
console.log(sig.toString('base64'))

const addr = bitcoin.payments.p2pkh({ pubkey: hdkey.publicKey }).address;
console.log(addr);
console.log(bitcoinMessage.verify(message, addr, signature))
