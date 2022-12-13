import { Typography } from '@mui/material'
import React from 'react'
import {main,list,userFul,currentUser} from "../utils"
import "./Sidebar.css"
import { useAppContext } from '../context/appContext'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link,to } from 'react-router-dom'
import { LinkOff } from '@mui/icons-material'

const Sidebar = () => {
    let {isSideBarOpen,mainColor, logoutUser}=useAppContext()
  return (
    <div className={`sidebar__Main  ${isSideBarOpen?"activeSidebar":""}`} id={isSideBarOpen?"activeSidebar":""}>
      <div className='small__Overflow'></div>
        <div className='AdminHeading'>
      <Typography variant='h5'  className="SideBarProminant">MuradAdmin</Typography>
        </div>

      <div className='cointainer'>
        <Typography variant='h6' style={{marginLeft:"12px"}} className="SideBarProminant">Main</Typography>
        {main.map((all)=>{
            return <div className='section'>
                <Typography variant='h7' className="SideBarSub">{all?.text}</Typography>
                <div style={{color:"gray"}}>{all?.icon}</div>
            </div>
        })}
      </div>


      <div  className='cointainer'>
        <Typography variant='h6' style={{marginLeft:"12px"}} className="SideBarProminant">List</Typography>
        {list.map((all)=>{
            return (
              <Link  to={all?.link} className='section'>
                <Typography variant='h7'  className="SideBarSub">{all?.text}</Typography>
                <div style={{color:"gray"}} >{all?.icon}</div>
            </Link>
                 )
        })}
      </div>


      <div  className='cointainer'>
        <Typography variant='h6' style={{marginLeft:"12px"}} className="SideBarProminant">UseFul</Typography>
        {userFul.map((all)=>{
            return <div className='section'>
                <Typography variant='h7'  className="SideBarSub">{all?.text}</Typography>
                <div style={{color:"gray"}}>{all?.icon}</div>
            </div>
        })}
      </div>


      <div  className='cointainer'>
        <Typography variant='h6' style={{marginLeft:"12px"}} className="SideBarProminant">User</Typography>
       
              <Link to="/currentUser" className='section'>
                <Typography variant='h7' className="SideBarSub" >User</Typography>
                <div  style={{color:"gray"}}><PersonSearchIcon fontSize='large'/></div>
            </Link>
          
              <div className='section'>
                <Typography variant='h7'  className="SideBarSub">Logout</Typography>
                <div style={{color:"gray"}}><LogoutIcon  fontSize='large' onClick={()=>logoutUser()}/></div>
            </div>
    
      </div>

      <div className='cointainer'>
       <Typography variant='h6' style={{marginLeft:"12px"}} className="SideBarProminant">Theme</Typography>
       <div className='boxes'>
        <div className='black' onClick={()=>mainColor("blac")}></div>
         <div className='white'  onClick={()=>mainColor("whit")}></div>
      </div>
      </div>


    </div>
  )
}

export default Sidebar
