import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import axios from 'axios'
import { authFetch } from '../utils'
import Table from "../components/UserTable"
import { useAppContext } from '../context/appContext'

const Users = () => {
 let {allUsers,user,currentUser}=useAppContext()

  React.useEffect(()=>{
      allUsers()
  },[])
  return (
    <div style={{display:"flex"}}>
      <Sidebar/>
      <div style={{width:"100%"}}>
        <Header/>
        <Table />
      </div>
    </div>
  )
}

export default Users
