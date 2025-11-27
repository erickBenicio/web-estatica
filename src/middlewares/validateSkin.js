export function validateSkin(req, res, next) {
    const { titulo, modelo, imagen, precio, tipo } = req.body;
    const errores = [];

    if (!titulo || typeof titulo !== 'string') {
        errores.push(`El campo "titulo" es obligatorio y debe ser un string`);
    }

    if (!modelo || typeof modelo !== 'string') {
        errores.push(`El campo "modelo" es obligatorio y debe ser un string`);
    }

    if (!imagen || typeof imagen !== 'string') {
        errores.push(`El campo "imagen" es obligatorio y debe ser una url de string`);
    }

    if (precio === undefined || isNaN(Number(precio))) {
        errores.push(`El campo "precio" es obligatorio y debe ser numerico`);
    }

    if (!tipo || typeof tipo !== 'string') {
        errores.push(`El campo "tipo" es obligatorio y debe ser un string`);
    }

    if (errores.length > 0) {
        return res.status(400).json({ errores });
    }

    next();
}