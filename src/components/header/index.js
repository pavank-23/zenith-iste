import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./header.css"
import MobileMenu from './mobile'
import WebMenu from './web'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div className='header'>
        <div className = "title">
            <Link to="/" style={{textDecoration:"none"}}>
            <p><span className="YT">YT</span>BB</p>
            </Link>
        </div>
        <div className='menu'>
            <div className='web-menu'>
                <WebMenu />
            </div>
            <div className='mobile-menu'>
                <div onClick={()=>setIsOpen(!isOpen)}>
                    <img src={require("../../assets/apps.png")}></img>
                </div>
                {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>
        </div>
    </div>
  )
}

export default Header