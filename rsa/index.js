const crypto = require("crypto");

const encryptDataWithRSA = data => {   
    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
        // The standard secure default length for RSA keys is 2048 bits
        modulusLength: 2048,
    });

    const encryptedData = crypto.publicEncrypt(
        {
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256",
        },
        // We convert the data string to a buffer using `Buffer.from`
        Buffer.from(data)
    );
    const result = encryptedData.toString("base64")
    return result
}

module.exports = encryptDataWithRSA