import bcrypt from 'bcryptjs';
import generarJWT from "../helpers/token.sign";
import User from "../models/user";

// LOGIN
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Verificar si el usuario existe
        let user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({
                mensaje: "username or password invalid - username",
            });
        }

        // Verificar si la contraseña es válida
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                mensaje: "username or password invalid - password",
            });
        }

        // Generar el token
        const token = await generarJWT(user._id, user.username);

        // Responder que el usuario es correcto
        res.status(200).json({
            mensaje: "El usuario existe",
            uid: user._id,
            username: user.username,
            name: user.name,
            status: user.status,
            role: user.role,
            token: token
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "user or password invalid",
        });
    }
};

// Controlador para obtener usuarios
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al buscar los usuarios de la base de datos",
        });
    }
};

// Controlador para obtener un solo usuario
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al buscar el usuario de la base de datos",
        });
    }
};

// Controlador para crear un usuario
export const createUser = async (req, res) => {
    try {
        const { password, ...userData } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userNew = new User({
            ...userData,
            password: hashedPassword,
        });

        await userNew.save();
        res.status(201).json({
            mensaje: "El usuario fue creado correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al crear el usuario",
        });
    }
};

// Controlador para eliminar un usuario
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.status(200).json({
            mensaje: "EL usuario fue eliminado",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al eliminar el usuario",
        });
    }
};

// Controlador para editar un usuario
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { password, ...userData } = req.body;

        // Si la contraseña está presente en los datos de la solicitud, encriptarla
        if (password) {
            const salt = await bcrypt.genSalt(10);
            userData.password = await bcrypt.hash(password, salt);
        }

        await User.findByIdAndUpdate(id, userData);
        res.status(200).json({
            mensaje: "El usuario fue actualizado correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al editar el usaurio",
        });
    }
};
