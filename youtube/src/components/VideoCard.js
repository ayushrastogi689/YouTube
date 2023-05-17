import React from 'react'

const VideoCard = ({info}) => {
  const {snippet, statistics} = info;
  const { title, channelTitle, thumbnails } = snippet;

  console.log(info);

  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
       <img src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard
