import express from "express"

let router=express.Router()

import {createList,deleteList,getListByQueries,getAllLists}  from "../controllers/ListController.js"

import {auth,isAdmin} from "../middleware/auth.js"

router.route("/").post(auth,isAdmin,createList)
router.route("/:listId").delete(auth,isAdmin,deleteList)
router.route("/byQuery").get(auth,getListByQueries)
router.route("/allLists").get(auth,isAdmin,getAllLists)

export default router