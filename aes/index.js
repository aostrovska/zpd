const crypto = require("crypto");

const encryptData = (message) => {
    const algorithm = "aes-256-cbc";

    // generate 16 bytes of random data
    const initVector = crypto.randomBytes(16);
    
    // secret key generate 32 bytes of random data
    const Securitykey = crypto.randomBytes(32);
    
    const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
    
    let encryptedData = cipher.update(message, "utf-8", "hex");
    encryptedData += cipher.final("hex");

    return encryptedData
}

module.exports = encryptData