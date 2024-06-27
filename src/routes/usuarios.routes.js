import { Router } from "express";
import {check} from "express-validator"
import { createUser, getUsers, getUser, deleteUser, updateUser,login } from "../controllers/users.controllers";

const router = Router()


router.route("/users")
.get(getUsers)
.post(login)

router.route("/users/create")
.post([check("username")
        .notEmpty()
        .withMessage("The username is a mandatory data")]
         ,createUser)

router.route("/users/:id")
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser)


export default router