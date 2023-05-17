import React from 'react'
import Sidebar from "./Sidebar";
import {Outlet} from "react-router-dom"


const Body = () => {
  // Indide Body either we can have <MainContainer /> or we will have <WatchPage /> for watching video
  // These two childern : [<MainContainer />, <WatchPage />] will go inside <Outlet />      
  return (
    <div className='flex'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Body
