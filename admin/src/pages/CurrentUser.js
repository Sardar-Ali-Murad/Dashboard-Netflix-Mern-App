import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import axios from 'axios'
import { authFetch } from '../utils'
import Table from "../components/UserTable"
import { useAppContext } from '../context/appContext'
import FormRow from '../components/FormRow'
import { Button } from '@mui/material'
import Alert from "../components/Alert"

const CurrentUser = () => {
 let {allUsers,user,CurrentUser,currentUser,updateUser,showAlert}=useAppContext()

  React.useEffect(()=>{
      currentUser()
  },[])
  
  let [state,setState]=React.useState({
    name:CurrentUser.name,
    email:CurrentUser.email,
    password:""
  })

  
  function handleChange(e){
      setState((pre)=>{
        return {
          ...pre,
          [e.target.name]:e.target.value
        }
      })
  }

  return (
    <div style={{display:"flex"}}>
      <Sidebar/>
      <div style={{width:"100%"}}>
        <Header/>

        <div style={{marginLeft:"50px"}}> 
        <div style={{width:"40%",marginTop:"40px",marginLeft:"0px"}}>
        {showAlert && <Alert/>}
        </div>

        <div style={{width:"40%"}}>
            <FormRow type="text" handleChange={handleChange} name="name"  value={state.name} labelText="Name"/>
        </div>
        <div style={{width:"40%"}}>
            <FormRow type="text" handleChange={handleChange} name="email"  value={state.email}labelText="Email"/>
        </div>
        <div style={{width:"40%"}}>
            <FormRow type="text" handleChange={handleChange} name="password"  value={state.password}labelText="Password"/>
        </div>

        <Button variant='outlined' onClick={()=>updateUser(state)}>Update</Button>
      </div>
        </div>
    </div>
  )
}

export default CurrentUser
