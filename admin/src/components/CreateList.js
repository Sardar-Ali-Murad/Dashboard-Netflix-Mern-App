import { Button, Typography } from '@mui/material'
import React from 'react'
import { useAppContext } from '../context/appContext'
import Alert from "./Alert"
import FormRow from './FormRow'
import FormSelect from "./FormSelect"
import Checkbox from '@mui/material/Checkbox';
import { borderRadius } from '@mui/system'

const CreateList = () => {

  let {showAlert,allMovies,AllMovies,addList}=useAppContext()
  let [content,setContent]=React.useState([])
  

  let [state,setState]=React.useState({
    title:"",
    type:"",
    genre:"",
    content:content
  })

  React.useEffect(()=>{
    allMovies()
  },[])



  let alert=React.useRef()

  React.useEffect(()=>{
      alert?.current?.scrollIntoView({behavior:"smooth"})
  },[showAlert])

  
  let array1=["action","adventure","animated","comedy","crime","fantasy","horror","mystery","sci-fiction","romance","thriller","documentary"]

    let arr2=["movie","series"]

    function add(){
       addList(state)
    }

    function handleChange(e){
      setState((pre)=>{
        return {...pre,
        [e.target.name]:e.target.value
        }
      })
    }

    React.useEffect(()=>{
       setState((pre)=>{
        return {...pre,content:content}
       })
    },[content])
   
   const handleCheck = (id) => (event) => {
    if(event.target.checked===true){
       setContent((pre)=>[...pre,id])
    }
    if(event.target.checked===false){
      setContent((pre)=>pre.filter((all)=>all!==id))
    }

  }
    console.log(state)
    // console.log(content)

  return (
    <div>
             <Typography variant="h4" style={{marginLeft:"35%",marginBottom:"30px",marginTop:"20px"}}>Create List</Typography>   
             <div ref={alert} style={{marginTop:"30px",marginLeft:"30px",width:"50%"}}>
          {showAlert && <Alert/>}
          <div className='singleMoviePart'>
        <FormRow label="Title" value={state.title} handleChange={handleChange} type="text" name="title" />
         </div>
      
      <div className='singleMoviePart' style={{marginLeft:"40px",marginBottom:"60px"}}>
      <FormSelect name="genre" label="Genre" value={state.genre} handleChange={handleChange} array={array1}/>
            </div>
            <div className='singleMoviePart' style={{marginLeft:"40px",marginBottom:"60px"}}>
           <FormSelect label="Type" name="type" value={state.type} handleChange={handleChange} array={arr2} />
            </div>

             <h4 style={{marginLeft:"40px"}}>Add Movies</h4>
              <div style={{marginLeft:"40px",width:"100%"}}>
                {AllMovies.map((all)=>{
                  return <div style={{padding:"25px",border:"2px solid gray",marginBottom:"30px",width:"100%"}}>
                    <Typography variant="h5">{all?.name}</Typography>
                    <Typography variant='h6'>{all.type}</Typography>
                    <Typography variant='h6'>{all.genre}</Typography>
                    <img src={all?.posterImg[0].image} style={{height:"40px",width:"40px",borderRadius:"50%"}}/>
                    <Checkbox
                //  checked={checked}
                onChange={handleCheck(all?._id)}
                inputProps={{ 'aria-label': 'controlled' }}
               />
                 </div>
                })}
              </div>

            <Button variant='outlined' onClick={add} style={{marginLeft:"40px",marginBottom:"30px"}}>Post</Button>
        </div>
    </div>
  )
}

export default CreateList
