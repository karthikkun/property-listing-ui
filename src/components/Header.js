import React from 'react'
import '../css/Header.css'

function Header() {
  return (
    <div className='header-section'>
        <div className="main-section">
          <span className='main-section-title'>Property Listing</span>
          <span className='main-section-subtitle'>Marketplace</span>
        </div>
        <img className='main-image' src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  )
}

export default Header