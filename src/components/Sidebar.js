import React from 'react'
import '../css/Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar-section'>
      <div className="sidebar-subsection">
        <span className='sidebar-title'>About me</span>
        <img className='sidebar-img' src="https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <p className='sidebar-about'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam vel dolor corporis perspiciatis, tenetur fugiat cum.</p>
      </div>
      <div className="sidebar-subsection">
        <span className='sidebar-title'>categories</span>
        <ul className='sidebar-categories'>
          <li className='sidebar-category'>Buy</li>
          <li className='sidebar-category'>Sell</li>
          <li className='sidebar-category'>Rent</li>
          <li className='sidebar-category'>Hostel</li>
          <li className='sidebar-category'>B & B</li>
          <li className='sidebar-category'>Hotel</li>
        </ul>
      </div>
      <div className="sidebar-subsection">
        <span className='sidebar-title'>follow us on socials </span>
        <div className="sidebar-social-icons">
            <i className="sidebar-social-icon fa-brands fa-facebook-square"></i>
            <i className="sidebar-social-icon fa-brands fa-instagram"></i>
            <i className="sidebar-social-icon fa-brands fa-linkedin"></i>
            <i className="sidebar-social-icon fa-brands fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar