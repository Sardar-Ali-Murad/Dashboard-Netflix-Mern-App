
import { Typography } from '@mui/material'
import React from 'react'
import { useAppContext } from '../context/appContext'
import ListTable from "./ListTable"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import "./Movie.css"




const List = () => {
    let {allList,singleListId,AllList}=useAppContext()
    let [singleList,setSingleList]=React.useState({})

    let listRef=React.useRef()

    React.useEffect(()=>{
       allList()
    },[])

    React.useEffect(()=>{
         let list=AllList.find((all)=>all._id==singleListId)
         setSingleList(list)
    },[singleListId])

    React.useEffect(()=>{
        listRef?.current?.scrollIntoView({behavior:"smooth"})
    },[singleList])
    console.log(singleList)

  return (
    <div>

       <ListTable/>
          {
            singleList &&
       <div style={{marginLeft:"10%",marginTop:"60px"}}>
        <Typography variant='h4'>List Details</Typography>
         <Typography variant='h6' style={{marginTop:"20px"}}>{singleList?.title}(title)</Typography>  
         <Typography variant='h6' style={{marginTop:"20px"}}>{singleList?.description}(description)</Typography>  
         <Typography variant='h6' style={{marginTop:"20px"}}>{singleList?.type}(type)</Typography>  
         <Typography variant='h6' style={{marginTop:"20px"}}>{singleList?.genre}(genre)</Typography>

            <Typography variant='h4' style={{marginTop:"20px",marginBottom:"30px"}}>Movies Of The List</Typography>
          <div className='grid' ref={listRef} >
             {
               singleList?.content?.map((all)=>{
                 return (
                   
                   <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={all?.posterImg[0].image}
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {all?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {all?.title}
        </Typography>
        <Typography style={{marginTop:'20px'}} variant="body2" color="text.secondary">
            {all?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{all?.type}</Button>
        <Button size="small">{all?.genre}</Button>
      </CardActions>
    </Card>
                )
                
              })

            }

            

        
          </div>

   
       </div>
        }

    </div>
    
  )
}

export default List
