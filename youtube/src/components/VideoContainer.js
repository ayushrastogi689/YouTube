import React, { useEffect, useState } from 'react'
import VideoCard from "./VideoCard"
import { YOUTUBE_VIDEO_API } from '../utils/constant';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async() => {
    const responseData = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await responseData.json();
    // console.log(jsonData.items);
    setVideos(jsonData.items)
  }
  return (
    <div>
      VideoContainer
      {videos.length > 0 && <VideoCard info = {videos[0]}/>}
    </div>
  )
}

export default VideoContainer
