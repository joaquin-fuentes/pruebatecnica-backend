import express from "express"
import cors from "cors"
import morgan from "morgan"
import path from "path"
import * as dotenv from "dotenv"
import "./src/database/dbConnection"
import usersRouter from "./src/routes/usuarios.routes"
import rolesRouter from "./src/routes/roles.routes"





//crear una instancia de express
const app = express()

//este si o si va antes del puerto
dotenv.config()//sirve para leer variables de entorno

//configurar un puerto
app.set("port", process.env.PORT || 4000)
const puerto = app.get("port")

app.listen(puerto, ()=>{
    console.log("I'm in the port "+ puerto)
})

//middlewares: funciones que ejecutan alguna tarea, generalmente antes de llegar a las rutas
app.use(cors()) //permite conexiones remotas
app.use(express.json())  //permite interpretar el formato JSON de una solicitud
app.use(express.urlencoded({extended:true}))  //permite recibir en el objeto request los string y arrays
app.use(morgan("dev")) //nos da informacion extra en la terminal
app.use(express.static(path.join(__dirname,"/public")))  

//rutas(siempre van al final)
// http://localhost:4000/api/recetas

app.use("/api", usersRouter)
app.use("/api", rolesRouter)