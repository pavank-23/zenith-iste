import React from 'react'
import "./landing.css"
import Separator from '../../common/separator/index'
import Header from '../header/index'
import Videos from '../videos/index'
import VideoPlayer from '../video-player'

function Landing() {
  return (
    <div className='landing'>
      <div>
        <Header />
      </div>
      <div>
        <Separator />
      </div>
      <br />
      <div>
        <VideoPlayer />
      </div>
    </div>
  )
}

export default Landing;