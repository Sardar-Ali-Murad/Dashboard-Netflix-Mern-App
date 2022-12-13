import MovieModel from "../models/MovieModel.js";
import {StatusCodes} from "http-status-codes"
import {BadRequestError,UnAuthenticatedError,NotFoundError} from "../errors/index.js"
import Auth from "../models/Auth.js";


const createMovie=async (req,res)=>{
    let movie=await MovieModel.create({...req.body})
    res.status(StatusCodes.CREATED).json({movie})
}

const deleteMovie=async (req,res)=>{
    let {movieId}=req.params
    let movie=await MovieModel.findOne({_id:movieId})
    if(!movie){
        throw new NotFoundError("The Movie Does Not Exists")
    }

    await movie.remove()

    res.status(StatusCodes.OK).json({msg:"The Content is deleted successfully"})
}


const updateMovie=async (req,res)=>{
    let {movieId}=req.params
    let movie=await MovieModel.findOne({_id:movieId})
    if(!movie){
        throw new NotFoundError("The Movie Does Not Exists")
    }

    const updatedMovie = await MovieModel.findByIdAndUpdate(
        req.params.movieId,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(StatusCodes.OK).json({movie,msg:'The Content is updated successfully'})
    
}

const getSingleMovie=async (req,res)=>{
    let {movieId}=req.params
    let movie=await MovieModel.findOne({_id:movieId})
    if(!movie){
        throw new NotFoundError("The Movie Does Not Exists")
    }

    res.status(StatusCodes.OK).json({movie})

}


const getAllMovies=async (req,res)=>{
    let Movies=await MovieModel.find({})
    res.status(StatusCodes.OK).json({Movies})
}



const getMoviesByQueries=async (req,res)=>{
    let {type,genre}=req.body

    let queryObj={}

    if(type){
        queryObj.type=type
    }

    if(genre){
        queryObj.genre=genre
    }
     
    // console.log(queryObj)

    let Movies=await MovieModel.find(queryObj)

    res.status(StatusCodes.OK).json({Movies})

}


export  {createMovie,updateMovie,deleteMovie,getMoviesByQueries,getAllMovies,getSingleMovie}