
import crypto from "crypto"
import jwt from "jsonwebtoken"
import "dotenv/config"

export const encryptSHA256 = (str) => {
    return crypto.createHash('sha256').update(str).digest('hex')
}

export const createTokenWithExpirence = (data, expiresIn, keyPrivate = process.env.SECRET_KEY_TOKEN) => {
    const options = {};
    if (expiresIn) {
        options.expiresIn = expiresIn
    };

    const payload = {
        user: data,
        check: true,
        date: new Date().toISOString()
    }

    return jwt.sign(payload, keyPrivate, options);
}

export const decodeJsonWebToken = (tokenText, keyPublic = process.env.SECRET_KEY_TOKEN) => {
    try {
        return jwt.verify(tokenText, keyPublic);
    } catch (error) {
        console.log('Ha ocurrido un error al momento de decodificar el token')
    }
}
