import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Movies from '../components/Movies'
import { useAppContext } from '../context/appContext'

const Movie = () => {
 let {allMovies}=useAppContext()

  React.useEffect(()=>{
      allMovies()
  },[])
  return (
    <div style={{display:"flex"}}>
      <Sidebar/>
      <div style={{width:"100%"}}>
        <Header/>
        <Movies />
      </div>
    </div>
  )
}

export default Movie
