import React from 'react'
import './videos.css'
import { useNavigate } from 'react-router-dom';

function Videos() {
  const navigate = useNavigate();
  return (
    <div>
        <div className='video'>         
           <img src={require("../../assets/rick_roll.jpg")} className='thumbnails'></img>
            <div className='video-content'>
                Rick Astley - Never Gonna Give You Up (Official Music Video)
            </div>
            <img src={require("../../assets/nat_geo.jpg")} className='thumbnails'></img>
    </div>
    </div>
  )
}

export default Videos