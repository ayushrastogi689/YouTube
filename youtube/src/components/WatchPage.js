import React from 'react'
import { useDispatch } from 'react-redux'
import {useEffect} from "react"
import {closeMenu} from "../utils/appSlice"
import {useSearchParams} from "react-router-dom"
const WatchPage = () => {
  // When ever we try to watch any video our Sidebar should collapse automatically.
  // Q. How we can do that? => We have to dispatch an action.  
  // Q. Where we will do that? => Inside our WatchPage in useEffect

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"))
  return (
    <div>
      <iframe width="960" height="515" title="YouTube video player"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default WatchPage
