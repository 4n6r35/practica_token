import { decodeJsonWebToken } from "../security/token";

export const Middleware = async (req, res, next) => {

    const { authorization } = req.headers

    const token = authorization?.replace(/(\s|bearer|Bearer)/g, "");

    if (token !== undefined) {
        const decodeToken = decodeJsonWebToken(token)
        if (decodeToken === null) {
            return res.status(400).json({
                status: false,
                message: "El token ha expirado"
            })
        } else {
            return res.status(400).json({
                status: false,
                message: "No se ha encontrado token en la peticion"
            })
        }
    }
    
    return next();

}