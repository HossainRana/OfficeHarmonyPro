import './Sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const[isOpen, setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen)
    const menuItems=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<DashboardIcon/>
        },
        {
            path:"/leaveentry",
            name:"Leave Entry",
            icon:<ArticleIcon/>
        },
        {
            path:"/leaveapplication",
            name:"Leave Application",
            icon:<HistoryEduIcon/>
        }
    ]
  return (
    <div className='container'>
        <div className="sidebar" style={{width: isOpen? "300px":"50px"}}>
            <div className="top-section">
                <h1 className="logo" style={{display: isOpen? "block":"none"}}>Logo</h1>
                <div className="bars" style={{marginLeft: isOpen? "120px":"0px"}}>
                    <MenuOpenIcon onClick={toggle}/>
                </div>
            </div>
            {
                menuItems.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassname="active">
                        <div className="icon">{item.icon}</div>
                        <div className="link-text" style={{display: isOpen? "block":"none"}}>{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar