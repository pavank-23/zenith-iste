import React from 'react'
import "./landing.css"
import Separator from '../../common/separator/index'
import Header from '../header/index'
import Videos from '../videos/index'

function Landing() {
  return (
    <div className='landing'>  
    <Header/>
    <Separator/>
      <br />
      <div>
        <Videos />
      </div>
    </div>
  )
}

export default Landing;