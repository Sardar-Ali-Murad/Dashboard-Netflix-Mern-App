import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import CreateMovie from "../components/CreateMovie"
const MovieCreate = () => {

  return (
    <div style={{display:"flex"}}>
      <Sidebar/>
      <div style={{width:"100%"}}>
        <Header/>
        <CreateMovie/>
      </div>
    </div>
  )
}

export default MovieCreate
