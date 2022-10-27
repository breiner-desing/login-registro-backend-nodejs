export const RegistroSchema = {
    type: "object",
    required: ["nombre", "apellido", "cedula", "correo", "fecha_expedicion", "telefono", "ciudad"],
    properties: {
        nombre: {
            type: "string",
        },
        apellido: {
            type: "string",
        },
        cedula: {
            type: "number",
        },
        correo: {
            type: "string",
        },
        fecha_expedicion: {
            type: "string",
        },
        telefono: {
            type: "number",
        },
        ciudad: {
            type: "string",
        },
        permisos: {
            type: "number",
        }
    },
};

export const LoginSchema = {
    type: "object",
    required: ["correo", "contrasenia"],
    properties: {
        correo: {
            type: "string",
        },
        contrasenia: {
            type: "string",
        }
    },
};

export const NewUserSchema = {
    type: "object",
    required: ["newUser", "newLogin"],
    properties: {
        newUser: RegistroSchema,
        newLogin: LoginSchema
    }

}

export const tokenSchema = {
    type: "object",
    required: ["token"],
    properties: {
        token: {
            type: "string"
        },
    },
};

export const correoValidSchema = {
    type: "object",
    required: ["correo"],
    properties: {
        correo: {
            type: "string"
        },
    },
};