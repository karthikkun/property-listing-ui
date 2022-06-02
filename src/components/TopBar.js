import React from 'react'
import '../css/TopBar.css'

function TopBar() {
    return (
        <div className='topbar'>
            <div className="topbar-left">
                <i className="topbar-social-icon fa-brands fa-instagram"></i>
                <i className="topbar-social-icon fa-brands fa-facebook-square"></i>
                <i className="topbar-social-icon fa-brands fa-linkedin"></i>
                <i className="topbar-social-icon fa-brands fa-twitter-square"></i>
            </div>
            <div className="topbar-center">
                <ul className="topbar-list">
                    <li className="topbar-list-item">HOME</li>
                    <li className="topbar-list-item">CREATE LISTING</li>
                    <li className="topbar-list-item">ABOUT</li>
                    <li className="topbar-list-item">CONTACT</li>
                    <li className="topbar-list-item">LOGOUT</li>
                </ul>

            </div>
            <div className="topbar-right">
                <img className='topbar-profile-pic' src='https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                <i className="topbar-search fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default TopBar