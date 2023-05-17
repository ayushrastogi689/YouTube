import React from 'react'
import { useDispatch } from 'react-redux'
import {useEffect} from "react"
import {closeMenu} from "../utils/appSlice"

const WatchPage = () => {
  // When ever we try to watch any video our Sidebar should collapse automatically.
  // Q. How we can do that? => We have to dispatch an action.  
  // Q. Where we will do that? => Inside our WatchPage in useEffect

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div>
      Watch Videos Here
    </div>
  )
}

export default WatchPage
