import React from 'react'
import { AppBar,Toolbar,Typography } from '@mui/material';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
// import Sidebar2 from './Sidebar2';
const Header = () => {
    const [value, setvalue] = useState(0)
  return (
    <>
        <AppBar sx={{background:'#425F57'}}>
            <Toolbar>
                <Diversity3Icon></Diversity3Icon>
                {/* <Sidebar2/> */}
                <Tabs sx={{marginLeft:'auto'}} textColor="inherit"  value={value} onChange={(e,value)=>setvalue(value)} indicatorColor='secondary'>
                    <Tab label="Home"></Tab>
                    <Tab label="Setup"></Tab>
                    <Tab label="Leave"></Tab>
                    <Tab label="Shift"></Tab>
                    <Tab label="Payroll"></Tab>
                    <Tab label="Reports"></Tab>
                </Tabs>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Header