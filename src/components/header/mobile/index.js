import React from 'react'
import "./mobile.css"

function MobileMenu({ isOpen,setIsOpen }) {
  return (
    <div className='mobile'>
        <div className='close-icon' onClick={()=>setIsOpen(!isOpen)}>
            <i class="fi fi-rr-cross-circle"></i>
        </div>
        <div className='mobile-options'>
          <div className='mobile-option' onClick={()=>setIsOpen(!isOpen)}>
              <a href='#projects'>
              <i class="fi fi-rr-laptop option-icon"></i> Projects
              </a>
          </div>
          <div className='mobile-option' onClick={()=>setIsOpen(!isOpen)}>
              <a href='#contact'>
              <i class="fi fi-rr-envelope option-icon"></i>Contact
              </a>
          </div>
        </div>
    </div>
  )
}

export default MobileMenu