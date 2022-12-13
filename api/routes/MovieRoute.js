import express from "express"
let router=express.Router()

import {createMovie,deleteMovie,updateMovie,getAllMovies,getMoviesByQueries,getSingleMovie} from "../controllers/MovieController.js"

import {isAdmin,auth} from "../middleware/auth.js"
import upload from "../controllers/UploadImage.js"
import uploadVedio from "../controllers/UploadVedio.js"
router.route("/").post(auth,isAdmin,createMovie)
router.route("/getAllMovies").get(auth,isAdmin,getAllMovies)
router.route("/upload").post(auth,isAdmin,upload)
router.route("/uploadVedio").post(auth,isAdmin,upload)
router.route("/getMovieByQuery").get(auth,getMoviesByQueries)
router.route("/:movieId").delete(auth,isAdmin,deleteMovie).patch(auth,isAdmin,updateMovie).get(auth,getSingleMovie)


export default router
