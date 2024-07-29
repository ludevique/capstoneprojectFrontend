import React from 'react'
import {Player} from 'react-player'

const VideoCard = ({name,Description,url}) => {
  return (
    <div className='course-video'>
        <h2>{name}</h2>
        <p>{Description}</p>
        <Player url={url}/>
    </div>
  )
}

export default VideoCard