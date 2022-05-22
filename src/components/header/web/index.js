import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import "./web.css"

function WebMenu() {
  const [hover, setHover] = useState("#ffffff");
  return (
    <div className='web'>
        <div className='web-option' onMouseEnter={()=> setHover("#682ae9")}>
            <Link to ="/about"> About
            </Link>
        </div>
        <div className='web-option' onMouseEnter={()=> setHover("#682ae9")}>
            <Link to ="/signin"> User 
            <span>  ($0.00)</span>
            </Link>
        </div>
    </div>
  )
}

export default WebMenu