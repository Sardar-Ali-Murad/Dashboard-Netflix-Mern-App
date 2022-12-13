import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import ListComponent from "../components/List"
const List = () => {
  return (
    <div style={{display:"flex"}}>
      <Sidebar/>
      <div style={{width:"100%"}}>
        <Header/>
        <ListComponent/>
      </div>
    </div>
  )
}

export default List
