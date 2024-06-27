// import generarJWT from "../helpers/token-sign";
import User from "../models/user"



//LOGIN
export const login = async (req, res) => {
    try {
      //verificar si existe un mail como el recibido
      const { username, password } = req.body;
  
      //verificar si el email ya existe
      let user = await User.findOne({ username }); //devulve un null
      if (!user) {
        //si el user existe
        return res.status(400).json({
          mensaje: "username or password invalid - username",
        });
      }
      // si no es valido el password
      if (password !== usuario.password) {
        return res.status(400).json({
          mensaje: "username or password invalid - password",
        });
      }
      
      // generar el token
    //   const token = await generarJWT(user._id, user.username)

      //responder que el usuario es correcto
      res.status(200).json({
        mensaje: "El usuario existe",
        uid: user._id,
        nombre: user.username
        // token: token
      });
      res.send(user)
    } catch (error) {
      console.log(error);
      res.status(400).json({
        mensaje: "user or password invalid",
      });
    }
  };

//Controlador para obtener usuarios

export const getUsers = async (req, res)=>{
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar los usuarios de la base de datos"
        })
    }
}

//Controlador para obtener un solo usaurio

export const getUser= async (req, res)=>{
    try {
        const {id} = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar el usuario de la base de datos"
        })
    }
}

// Controlador para crear un usuario

export const createUser = async (req, res)=>{
    try {
        const userNew = new User(req.body)
        await userNew.save()
        res.status(201).json({
            mensaje: "El usuario fue creado correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al crear el usuario"
        })
    }
}


// controlador para eliminar un usuario

export const deleteUser = async (req, res)=>{
    try {
        //obtener el id y luego solicitar a moongoose el borrar   
        const {id} = req.params   
        await User.findByIdAndDelete(id)
        res.status(200).json({
            mensaje: "EL usuario fue eliminado"
        })
    } 
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al eliminar el usuario"
        })
    }
}

// controlador para editar un usuario

export const updateUser = async (req, res)=>{
    try {
        //obtener el id y luego solicitar a moongoose el editar   
        const {id} = req.params   
        await User.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            mensaje: "El usuario fue actualizado correctamente"
        })
    } 
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al editar el usaurio"
        })
    }
}