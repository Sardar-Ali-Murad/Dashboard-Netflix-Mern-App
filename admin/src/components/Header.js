import { Typography } from '@mui/material'

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import "./Header.css"
import { useAppContext } from '../context/appContext';

const Header = () => {
  let {openSideBar,isSideBarOpen}=useAppContext()
  return (
    <div className='headers__Main' >

      <div className='arrow'>
        <ArrowRightAltIcon onClick={openSideBar} style={{cursor:"pointer"}} fontSize='large'/>
      </div>
      <div className='searchMain'>
         <TextField
            className='search'
            style={{color:"white",outline:"white"}}
                fullWidth
                id="standard-bare"
                defaultValue="Search"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
              />
          </div>


          <div className='line'></div>
    </div>
  )
}

export default Header
