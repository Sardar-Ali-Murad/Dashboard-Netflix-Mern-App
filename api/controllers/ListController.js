import MovieModel from "../models/MovieModel.js";
import ListModel from "../models/ListModel.js";
import {StatusCodes} from "http-status-codes"
import {BadRequestError,UnAuthenticatedError,NotFoundError} from "../errors/index.js"


const createList=async (req,res)=>{
   let List=await ListModel.create({...req.body})
   res.status(StatusCodes.OK).json({List})
}

const deleteList=async (req,res)=>{
    let {listId}=req.params
    let List=await ListModel.findOne({_id:listId})
    if(!List){
        throw new BadRequestError("The List is not there")
    }

    await List.remove()

    res.status(StatusCodes.OK).json({List,msg:"The List Is Deleted Siccessfully"})
}

const getAllLists=async (req,res)=>{
    let Lists=await ListModel.find({}).populate("content")
    res.status(StatusCodes.OK).json({Lists})
}

const getListByQueries=async (req,res)=>{
    let {type,genre}=req.body

    let queryObj={}

    if(type){
        queryObj.type=type
    }

    if(genre){
        queryObj.genre=genre
    }
 

    let List=await ListModel.find(queryObj).populate("content")

    res.status(StatusCodes.OK).json({List})

}

export {createList,deleteList,getListByQueries,getAllLists}