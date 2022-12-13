import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppContext } from '../context/appContext';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import {Link,to} from "react-router-dom"
import DetailsIcon from '@mui/icons-material/Details';
import { Details } from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, id,  title, type,genre,posterImg,del,update,details) {
  return { name, id, id, title, type,genre,posterImg,del,update,details };
}

export default function CustomizedTables({user}) {
  let {AllMovies,delMovie,singleMovie}=useAppContext()
  
  const rows=AllMovies?.map((all)=>{
    return createData(all?.name,all?._id,all?.title,all?.type,all?.genre,all?.posterImg,{icon:<DeleteIcon/>,id:all?._id},{icon:<UpdateIcon/>,id:all?._id},{icon:<DetailsIcon/>,id:all?._id})
  })

  function dele(id){
   delMovie(id)
  }

  function details(id){
    singleMovie(id)
 }
 function update(){
  
 }
  
  return (
    <TableContainer component={Paper} style={{width:"90%",marginLeft:"40px",marginTop:"30px"}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>NAME</StyledTableCell>
            <StyledTableCell align="right">ID</StyledTableCell>
            <StyledTableCell align="right">TITLE</StyledTableCell>
            <StyledTableCell align="right">TYPE</StyledTableCell>
            <StyledTableCell align="right">GENRE</StyledTableCell>
            <StyledTableCell align="right">IMAGE</StyledTableCell>
            <StyledTableCell align="right">DELETE</StyledTableCell>
            <StyledTableCell align="right">UPDATE</StyledTableCell>
            <StyledTableCell align="right">DETAILS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.title}</StyledTableCell>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="right">{row.genre}</StyledTableCell>
              <StyledTableCell align="right"><img style={{width:"40px",height:"40px",borderRadius:"50%"}} src={row?.posterImg[0].image}/></StyledTableCell>
              <StyledTableCell align="right" style={{cursor:"pointer"}} onClick={()=>dele(row.del.id)}>{row.del.icon}</StyledTableCell>
              <StyledTableCell align="right" style={{cursor:"pointer"}} onClick={()=>update(row.update.id)}><Link to={`/updateMovie/${row.update.id}`}>{row.update.icon}</Link></StyledTableCell>
               <StyledTableCell align="right" style={{cursor:"pointer"}} onClick={()=>details(row.details.id)}>{row.details.icon}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
