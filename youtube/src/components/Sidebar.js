import React from 'react'
import MenuItems from './MenuItems'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"

const Sidebar = () => {
  // In our sidebar we need to show and hide the sidebar on click of hamburger menu. To achive this we will use useSelector
  const isMenuOpen = useSelector(store => store.app.isMenuOpen); // You neet to subscribe to a specific portion of your store.
  if(!isMenuOpen) return null; // Early return pattern

  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li><Link to="/"> Home </Link></li>
        <li>Videos</li>
        <li>Shorts</li>
        <li>Live</li>
      </ul>
        <h1 className='font-bold'>Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Movies</li>
          <li>News</li>
          <li>Sports</li>
          <li>Gaming</li>
        </ul>
        <h1 className='font-bold'>Watch Later</h1>
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
