import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import CreateList from "../components/CreateList"


const ListCreate = () => {

  return (
    <div style={{display:"flex"}}>
      <Sidebar/>
      <div style={{width:"100%"}}>
        <Header/>
        <CreateList/>
      </div>
    </div>
  )
}

export default ListCreate
