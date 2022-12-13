import { Button, Typography } from '@mui/material'
import React from 'react'
import FormRow from './FormRow'
import FormSelect from "./FormSelect"
import "./Form.css"
import "./Movie.css"
import { useAppContext } from '../context/appContext'
import Delete from '@mui/icons-material/Delete'
import Alert from"./Alert"



const CreateMovie = () => {
  let [images,setImages]=React.useState([])
  let [mainVedio,setMainVedio]=React.useState("")

  let [state,setState]=React.useState({
    name:"",
    title:"",
    description:"",
    type:"",
    genre:"",
    year:"",
    duration:"",
    posterImg:images,
    vedio:""
  })

  function add(){
    addMovie(state)
  }

  let { uploadImage,image,uploadVedio,
    vedio,addMovie,showAlert
  } = useAppContext()
 
  React.useEffect(()=>{
    if(image!==""){
      setImages((pre)=>{
        return [...pre,{id:pre.length===0?1:pre[pre.length-1].id+1,image:image}]
      })
      
    }
  },[image])

  React.useEffect(()=>{
    // setMainVedio(vedio)
    setState((pre)=>{
      return {...pre,vedio:vedio}
    })
  },[vedio])
  
  React.useEffect(()=>{
    setState((pre)=>{
     return {...pre,posterImg:images}
    })
  },[images])


  console.log(images)


  function handleChange(e){
    setState((pre)=>{
      return {...pre,
      [e.target.name]:e.target.value
      }
    })
  }

  let array1=["action","adventure","animated","comedy","crime","fantasy","horror","mystery","sci-fiction","romance","thriller","documentary"]

    let arr2=["movie","series"]

    let years=["2015","2016","2017","2018","2019","2020","2021","2022"]
    
    
    function handleimage(event){
        uploadImage(event)
      }
     function handlevedio(event){
       uploadVedio(event)
     }
    function delPic(id){
      setImages((pre)=>pre.filter((all)=>all.id!==id))
    }

    console.log(state)

    let alert=React.useRef()

    React.useEffect(()=>{
        alert?.current?.scrollIntoView({behavior:"smooth"})
    },[showAlert])

  return (
    <div>
      <Typography variant="h4" style={{marginLeft:"35%",marginBottom:"30px",marginTop:"20px"}}>Create Movie</Typography>
      <div className='singleMoviesPart' >
        <div ref={alert} style={{marginTop:"30px",marginLeft:"40px",width:"50%"}}>
          {showAlert && <Alert/>}
        </div>
        <FormRow label="Name" value={state.name} handleChange={handleChange} type="text" name="name" />
      </div>

      <div className='singleMoviesPart'>
        <FormRow label="Title" value={state.title} handleChange={handleChange} type="text" name="title" />
      </div>

      <div className='singleMoviesPart' style={{marginLeft:"40px",width:"50%"}}>
        <Typography variant='h6'>Description</Typography>
          <textarea className='form-textarea form' name="description" onChange={handleChange} value={state.description} ></textarea>
      </div>

      <div className='singleMoviesPart' style={{marginLeft:"40px",width:"50%",marginBottom:"60px"}}>
      <FormSelect name="genre" label="Genre" value={state.genre} handleChange={handleChange} array={array1}/>
            </div>
            <div style={{marginLeft:"40px",width:"50%",marginBottom:"60px"}}>
      <FormSelect label="Type" name="type" value={state.type} handleChange={handleChange} array={arr2} />
            </div>

            <div className='singleMoviesPart'>
           <FormRow label="Duration" value={state.duration} handleChange={handleChange} type="text" name="duration" />
         </div>

         <div className='singleMoviesPart' style={{marginLeft:"40px",width:"50%",marginBottom:"60px"}}>
           <FormSelect label="Year" name="year" value={state.year} handleChange={handleChange} array={years} />
            </div>

            <div className='singleMoviesPart' style={{marginLeft:"40px",width:"50%",marginBottom:"60px"}}>
           <FormRow labelText="Add Vedio URL Here Or Use The Below Select Method" name="vedio" value={state.vedio} handleChange={handleChange} type="text"/>
            </div>

            <div  className='singleMoviesPart'>
               <Typography variant='h6' style={{marginBottom:"40px"}}>Add Image</Typography>
               
               {images.map((all)=>{
                return <div style={{width:"50%",display:"flex",justifyContent:"space-around",padding:"10px",border:"1px solid",marginBottom:"30px"}}>
                    <img src={all?.image} style={{height:"40px",width:"40px",borderRadius:"50%"}} />
                    <Delete style={{cursor:"pointer"}} onClick={()=>delPic(all?.id)}/>
                </div>
               })}
               <input style={{marginTop:"50px"}} type="file" id="image" accept="image/*" onChange={handleimage} />
            </div> 

            <div  className='singleMoviesPart'>
               <Typography variant='h3' style={{marginBottom:"40px"}}>Select The Main Vedio Of The Content</Typography>
               {state.vedio!==""  && <video width="320" height="240" controls>
             <source src={state.vedio} type="video/mp4"/>
              </video> }
               <input style={{marginTop:"50px"}} type="file" id="image" accept="image/*" onChange={handlevedio} />
            </div> 

            <Button variant='outlined' onClick={add} style={{marginLeft:"40px",marginBottom:"30px"}}>Submit</Button>

    </div>
  )
}

export default CreateMovie
