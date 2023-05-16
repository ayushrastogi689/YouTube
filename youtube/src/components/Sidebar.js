import React from 'react'
import MenuItems from './MenuItems'

const Sidebar = () => {
  return (
    <div className='p-5 shadow-lg w-48'>
        <h1 className='font-bold'>Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Movies</li>
          <li>News</li>
          <li>Sports</li>
          <li>Gaming</li>
        </ul>
        <MenuItems />
    </div>
  )
}

export default Sidebar
