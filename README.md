# pruebatecnica-backend


# Documentacion de endpoints 
PruebaTecnica-TreceSoftware
En estep proyecto se encuentran las carpetas donde esta cada tabla de la base de datos con sus respectivos endpoints para realizar las consultas del CRUD y del login de usuarios

﻿

roles
En esta carpeta se encuentran todos los endpoints relacionados con la tabla de "Roles"

﻿

GET
getRole
https://pruebatecnica-backend.vercel.app/api/roles/667cda3d7d1b2b1f50857470
Endpoint para traer un rol de la base de datos

﻿

GET
getRoles
https://pruebatecnica-backend.vercel.app/api/roles
Endpoint para traer todos los roles de la base de datos

﻿

POST
createRole
https://pruebatecnica-backend.vercel.app/api/roles
Endpoint para crear un nuevo rol

﻿

Body
raw (json)
json
{
	"description": "generico"
}
PUT
updateRole
https://pruebatecnica-backend.vercel.app/api/roles/667cda3d7d1b2b1f50857470
Endpoint para realizar la actualizacion de un rol

﻿

Body
raw (json)
json
{
	"description": "superAdmin"
}
DELETE
deleteRole
https://pruebatecnica-backend.vercel.app/api/roles/667cda5b7d1b2b1f50857473
Endpoint para eliminar un rol de la base de datos

﻿

users
En esta carpeta se encuentran los endpoints para realizar el CRUD de usuarios, y tambien el login

﻿

GET
gerUser
https://pruebatecnica-backend.vercel.app/api/users/667cdc8c2219e8304d6b382b
Endpoint para traer un solo usuario de la base de datos

﻿

GET
getUsers
https://pruebatecnica-backend.vercel.app/api/users
Endpoint para traer todos los usuarios de la base de datos

﻿

POST
createUser
https://pruebatecnica-backend.vercel.app/api/users/create
Endpoint para crear un nuevo usuario en la base de datos

﻿

Body
raw (json)
json
{
    "username":"admaasdsdsfdgdfgasdin",
    "email":"admingeasdnerasdasdico@gmail.com",
    "password":"123asd456",
    "name": "adminasdisasdasdtradorGenerico",
    "phone":"381609asdad7754",
    "role":"667cdb077d1b2b1f5085747a"
}
PUT
updateUser
https://pruebatecnica-backend.vercel.app/api/users/667cdc8c2219e8304d6b382b
Endpoint para realizar la actualizacion de un usuario de la base de datos

﻿

Body
raw (json)
json
{
    "username":"superadmin",
    "email":"superadmin@gmail.com",
    "password":"123456",
    "name":"super administrador",
    "phone":"3816097754",
    "role":"667cda3d7d1b2b1f50857470"
}
DELETE
deleteUser
https://pruebatecnica-backend.vercel.app/api/users/667cddb52219e8304d6b3832
Endpoint para eliminar un usuario de la base de datos

﻿

POST
login
https://pruebatecnica-backend.vercel.app/api/users
Endpoint para realizar el login

﻿

Body
raw (json)
json
{
    "username":"superadmin",
    "password":"123456"
}