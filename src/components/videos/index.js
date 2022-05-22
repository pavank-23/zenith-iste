import React from 'react'
import './videos.css'
import { Link } from 'react-router-dom';

function Videos() {
  return (
    <div className='videoContainer'>
        <div className='video'>        
          <Link to="/videoplayer"> 
           <img src={require("../../assets/rick_roll.jpg")} alt="rickAstleyThumbnail" className='thumbnails'></img>
          </Link> 
            <div className='video-content'>
                Rick Astley - Never Gonna Give You Up (Official Music Video)
            </div>
            <div className='video-desc'>
            “Never Gonna Give You Up” was a global smash on its release in July 1987, topping the charts in 25 countries including Rick’s native UK and the US Billboard Hot 100.  It also won the Brit Award for Best single in 1988. Stock Aitken and Waterman wrote and produced the track which was the lead-off single and lead track from Rick’s debut LP “Whenever You Need Somebody”.....
            </div>
            <div className='creator'>
              <br/>Rick Astley 
            </div>
    </div>
    </div>
  )
}

export default Videos