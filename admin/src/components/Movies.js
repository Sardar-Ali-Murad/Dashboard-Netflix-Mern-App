import React from 'react'
import { useAppContext } from '../context/appContext'
import MovieTable from "./MovieTable"

const Movies = () => {
    let {allMovies,AllMovies}=useAppContext()

    React.useEffect(()=>{
        allMovies()
    },[])
  return (
    <div>
      <MovieTable/>
    </div>
  )
}

export default Movies
