import React from 'react'
import '../css/Header.css'

function Header() {
  return (
    <div className='header-section'>
        <div className="main-section">
          <span className='main-section-title'>Listing Application</span>
          <span className='main-section-subtitle'>Listings</span>
        </div>
        <img className='main-image' src="https://images.pexels.com/photos/2931251/pexels-photo-2931251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  )
}

export default Header