import { Router } from "express";
import {
    deleteRole,
    createRole,
    updateRole,
    getRoles,
    getRole
} from "../controllers/roles.controllers";
import {check} from "express-validator"

const router = Router()


router.route("/roles")
    .get(getRoles)
    .post([check("description")
           .notEmpty()
           .withMessage("Description is a mandatory data")]
                ,createRole)
router.route("/roles/:id")
    .get(getRole)
    .delete(deleteRole)
    .put(updateRole)

export default router