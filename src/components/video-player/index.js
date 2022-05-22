import React from 'react'
import ReactPlayer from 'react-player'
import myVideo from '../../assets/videos/RickRoll.mp4'
import './video-player.css'

function VideoPlayer() {
  return (
    <div>
        <div className = 'videoplayer'>
            <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" controls="true" width="60%" height="60%"/>
        </div>
        <div className='video-title'>
            Rick Astley - Never Gonna Give You Up (Official Music Video)
        </div>
        <div className='video-desc'>
        The official video for “Never Gonna Give You Up” by Rick Astley

    “Never Gonna Give You Up” was a global smash on its release in July 1987, topping the charts in 25 countries including Rick’s native UK and the US Billboard Hot 100.  It also won the Brit Award for Best single in 1988. Stock Aitken and Waterman wrote and produced the track which was the lead-off single and lead track from Rick’s debut LP “Whenever You Need Somebody”.  The album was itself a UK number one and would go on to sell over 15 million copies worldwide.
    <br />
    The legendary video was directed by Simon West – who later went on to make Hollywood blockbusters such as Con Air, Lara Croft – Tomb Raider and The Expendables 2.  The video passed the 1bn YouTube views milestone on 28 July 2021.
        </div>
    </div>
  )
}

export default VideoPlayer