import React from 'react'
import Separator from '../../common/separator'
import Header from '../header'
import './about.css'

function About() {
  return (
    <div>    
    <Header />
    <Separator />
    <div className='text-content'>
        <h1><span className='YT'>YT</span>BB</h1>
        <p className='desc'>
            Online Video sharing and a platform to invest on content creators < br/> <br />
            If the viewer thinks highly of a channel's potential, he/she can invest using our currency in the channel and it is treated as a stock so profit/loss depends on that. The creator himself gets a fixed income based on his stock's value.It's business model is scalable by a lot and both the creators and viewers get monetary gain apart from the entertainment value.
        </p>
        <br />   
        <h2>Team Members</h2>
        <p className='teamMembers'>
            Jatin <br /> <br />
            Pavan <br /> <br />
            Kaushal <br /> <br />
            Sushant <br /> <br />
        </p>
    </div>
    </div>
  )
}

export default About