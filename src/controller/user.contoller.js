import { dbInstance } from "../database/config.js"
import { User } from "../models/user.js";
import { createTokenWithExpirence, encryptSHA256 } from "../security/token.js";


export const registerUserController = async (req, res) => {
    const { password, ...data } = req.body
    const transaction = await dbInstance.transaction();

    try {

        const hashPassword = encryptSHA256(password)
        await User.create({ password: hashPassword, ...data }, { transaction })
        transaction.commit()

        return res.status(200).json({
            status: true,
            message: "Registro exitoso"
        })

    } catch (error) {
        transaction.rollback()
        return res.status(500).json({
            status: false,
            message: "Ha surgido un error el procesar la solicitud de regitro",
            err: error
        })
    }
}

export const AuthController = async (req, res) => {
    const { username, email, password } = req.body

    const query = {};
    const hashPassword = encryptSHA256(password);

    if (email !== undefined) {
        query.email = email;
    }

    if (username !== undefined) {
        query.username = username;
    }

    if (hashPassword !== "") {
        query.password = hashPassword
    }

    const userAuthenticated = await User.findOne({ where: query })
    if (userAuthenticated != null) {
        const { id_user, name, lastname } = userAuthenticated
        const token = createTokenWithExpirence({
            data: {
                id_user: id_user,
                name: `${name} ${lastname}`
            }, expiresIn: '1h'
        });

        return res.status(200).json({
            successful: true,
            token: token
        })

    }

    return res.status(404).json({
        message: `Ups, ha ocurrido un error, por favor verifique las credenciales.`,
    })
}