
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import ListIcon from '@mui/icons-material/List';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from "axios"
import { useRevalidator } from 'react-router-dom';

let token=localStorage.getItem("token")

let main=[
    {
        text:"Dashboard",
        icon:<DashboardIcon/>
    }
]


let list=[
    {
      text:"Users",
      icon:  <PeopleOutlineIcon  fontSize='large'/>,
      link:"/users"
    },
    {
        text:"Movies",
        icon:<LocalMoviesIcon  fontSize='large'/>,
        link:"/movies"
    },
    {
        text:"List",
        icon:<ListIcon  fontSize='large'/>,
        link:"/list"
    },
    {
        text:"Create Movie",
        icon:<LocalMoviesIcon  fontSize='large'/>,
        link:"/createMovie"
    },
    {
        text:"Create List",
        icon:<ListIcon  fontSize='large'/>,
        link:"/createList"
    },

]


let userFul=[
    {
        text:"Stats",
        icon:<QueryStatsIcon  fontSize='large'/>

    },
    {
        text:"Notification",
        icon:<NotificationsNoneIcon  fontSize='large'/>
    }
]

let Services=[
    {
        text:"System Health",
        icon:<SettingsSystemDaydreamIcon  fontSize='large'/>
    },
    {
        text:"Logs",
        icon:<SettingsBackupRestoreIcon  fontSize='large'/>
    },
    {
        text:"Settings",
        icon:<SettingsBackupRestoreIcon/>
    }
]

let currentUser=[
    {
        text:"Profile",
        icon:<PersonSearchIcon  fontSize='large'/>,
        path:"/currentUser"
    },
    {
        text:"Logout",
        icon:<LogoutIcon  fontSize='large'/>,
        path:"/"
    }
]


const authFetch = axios.create({
    baseURL: '/api/v1',
  })
  // request

  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common['Authorization'] = `Bearer ${token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  // response

  authFetch.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      // console.log(error.response)
    //   if (error.response.status === 401) {
    //     logoutUser()
    //   }
      return Promise.reject(error)
    }
  )


export {main,list,userFul,currentUser,authFetch}