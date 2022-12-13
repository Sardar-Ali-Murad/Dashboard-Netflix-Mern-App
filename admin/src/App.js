import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Error,ProtectedRoute,UpdateMovie} from  "./components/index.js"
import Register from "./components/Register"
import { useAppContext } from './context/appContext.js'
import "./index.css"
import {Users,Movie,List,CurrentUser,CreateList,CreateMovie} from "./pages/index"

function App() {
  let {color}=useAppContext()
  return (
    <div className={`mainDiv ${color==="black"?"blackMain":"whiteMain"}`}>
      <BrowserRouter>
        <Routes>

           <Route path="/" element={<Register/>}/>
              <Route path="/users" element={
            <ProtectedRoute>
                <Users/>
            </ProtectedRoute>
          }/>

           <Route path="/movies" element={
            <ProtectedRoute>
                <Movie/>
            </ProtectedRoute>
          }/>


           <Route path="/list" element={
            <ProtectedRoute>
                <List/>
            </ProtectedRoute>
          }/>

           <Route path="/currentUser" element={
            <ProtectedRoute>
                <CurrentUser/>
            </ProtectedRoute>
          }/>


           <Route path="/createMovie" element={
            <ProtectedRoute>
                <CreateMovie/>
            </ProtectedRoute>
          }/>

           <Route path="/createList" element={
            <ProtectedRoute>
                <CreateList/>
            </ProtectedRoute>
          }/>

          
           <Route path="/updateMovie/:movieId" element={
            <ProtectedRoute>
                <UpdateMovie/>
            </ProtectedRoute>
          }/>

           <Route path="*" element={<Error/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
