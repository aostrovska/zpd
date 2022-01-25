const crypto = require("crypto");

const encryptData = (message) => {
    const algorithm = "des-cbc";

    // generate 8 bytes of random data
    const initVector = crypto.randomBytes(8);
    
    // secret key generate 8 bytes of random data
    const Securitykey = crypto.randomBytes(8);
    
    const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
    
    let encryptedData = cipher.update(message, "utf-8", "hex");
    encryptedData += cipher.final("hex");

    return encryptedData
}

module.exports = encryptData