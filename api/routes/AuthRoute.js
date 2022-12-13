import express from "express"
let router=express.Router()

import {Login,Register,deleteUser,updateUser,getAllUsers,getCurrentUser} from "../controllers/Users.js"

import {auth,isAdmin} from "../middleware/auth.js"

router.route("/register").post(Register)
router.route("/login").post(Login)
router.route("/getAllUsers").get(auth,isAdmin,getAllUsers)
router.route("/:userId").delete(auth,deleteUser)
router.route("/updateCurrentUser").patch(auth,updateUser)
router.route("/getCurrentUser").get(auth,getCurrentUser)



export default router