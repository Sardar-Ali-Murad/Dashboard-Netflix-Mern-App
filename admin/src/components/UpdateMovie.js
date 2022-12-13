import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import FormRow from './FormRow'
import "./Form.css"

import Sidebar from './Sidebar'
import Header from './Header'
import Alert from "./Alert"
import { Button, Typography } from '@mui/material'
import FormSelect from "./FormSelect"


const UpdateMovie = () => {
    let {allMovies,AllMovies,updateMovie,showAlert}=useAppContext()
    let {movieId}=useParams()

    let array1=["action","adventure","animated","comedy","crime","fantasy","horror","mystery","sci-fiction","romance","thriller","documentary"]

    let arr2=["movie","list"]
    
    React.useEffect(()=>{
        allMovies()
    },[])
    
    // console.log(state)
    let movie=AllMovies?.find((movie)=>movie?._id===movieId)

    let [state,setState]=React.useState({
        name:movie?.name,
        title:movie?.title,
        description:movie?.description,
        type:movie?.type,
        genre:movie?.genre
    })

    function handleChange(e){
        setState((pre)=>{
            return{
                ...pre,
                [e.target.name]:e.target.value
            }
        })
    }

    console.log(state)
  return (
    <div>
    <div style={{display:"flex"}}>
      <Sidebar/>
      <div style={{width:"100%"}}>
        <Header/>


        <div style={{}}>
          <div style={{width:"50%",marginTop:"50px",marginLeft:"50px"}}>
            {showAlert && <Alert/>}
          </div>
            <div style={{marginLeft:"40px",width:"50%"}}>
      <FormRow labelText="Name" type="text" value={state?.name} handleChange={handleChange} name="name"/>
            </div>
            <div style={{marginLeft:"40px",width:"50%"}}>
      <FormRow labelText="Title" type="text" value={state?.title} handleChange={handleChange} name="title"/>
            </div>
            <div style={{marginLeft:"40px",width:"50%"}}>
        <Typography variant='h6'>Description</Typography>
      <textarea className='form-textarea form' name="description" onChange={handleChange} value={state.description} ></textarea>
  
            </div>
            <div style={{marginLeft:"40px",width:"50%",marginBottom:"60px"}}>
      <FormSelect name="genre" label="Type" value={state.genre} handleChange={handleChange} array={array1}/>
            </div>
            <div style={{marginLeft:"40px",width:"50%",marginBottom:"60px"}}>
      <FormSelect label="Genre" name="type" value={state.type} handleChange={handleChange} array={arr2} />
            </div>

            <div style={{marginLeft:"40px",width:"50%"}}>
            <Button variant='outlined' onClick={()=>updateMovie({id:movieId,obj:state})}>Update</Button>
            </div>
        </div>


      </div>
    </div>
    </div>
  )
}

export default UpdateMovie
