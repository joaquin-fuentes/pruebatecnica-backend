import { validationResult } from "express-validator"
import Role from "../models/role"

//Controlador para obtener roles

export const getRoles = async (req, res) => {
    try {
        const roles = await Role.find()
        res.status(200).json(roles)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar los roles de la base de datos"
        })
    }
}
//Controlador para obtener un solo rol

export const getRole = async (req, res) => {
    try {
        const { id } = req.params
        const role = await Role.findById(id)
        res.status(200).json(role)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar el role de la base de datos"
        })
    }
}

// Controlador para crear un rol

export const createRole = async (req, res) => {
    try {
        //trabajar con el resultado de la validacion de express-validator
        const errors = validationResult(req)
        // errors.isEmpty() // true: esta vacio, false: hay error
        if (!errors.isEmpty()) {
            return res.status(400).json({ errores: errors.array() })
        }
        const newRole = new Role(req.body)
        await newRole.save()
        res.status(201).json({
            mensaje: "El rol fue creado correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al crear el rol"
        })
    }
}

// controlador para eliminar un rol

export const deleteRole = async (req, res) => {
    try {
        //obtener el id y luego solicitar a moongoose el borrar   
        const { id } = req.params
        await Role.findByIdAndDelete(id)
        res.status(200).json({
            mensaje: "El rol fue eliminado"
        })
    }
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al eliminar el rol"
        })
    }
}

// controlador para editar un rol

export const updateRole = async (req, res) => {
    try {
        //obtener el id y luego solicitar a moongoose el editar   
        const { id } = req.params
        await Role.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            mensaje: "El rol fue actualizada correctamente"
        })
    }
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al editar el rol"
        })
    }
}