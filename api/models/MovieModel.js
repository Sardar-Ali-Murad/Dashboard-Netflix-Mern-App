import mongoose from "mongoose";

let MovieSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Provide the movie name"]
    },
    title:{
        type:String,
        required:[true,"Please Provide the movie title"]
    },
    description:{
        type:String,
        required:[true,"Please Provide the movie description"]
    },
    type:{
        type:String,
        enum:["movie","series"],
        required:[true,"Provide the Vedio type"]
    },
    genre:{
        type:String,
        enum:["action","adventure","animated","comedy","crime","fantasy","horror","mystery","sci-fiction","romance","thriller","documentary"]
    },
    year:{
        type:Date,
        required:[true,"Provide the yaer of the vedio"]
    },
    duration:{
      type:String,
      default:"0:0:0"
    },
    posterImg:{
        type:Array,
        required:[true,"Please Provide the PosterImage To Proceed"]
    },
    vedio:{
        type:String,
        required:[true,"Please provide the actual content the vedio of the movie"]
    },
    user:{
        type:String,
        ref:"NetflixAppUsers"
    }
},{timestamps:true})


export default mongoose.model("NetflixAppMovies",MovieSchema)