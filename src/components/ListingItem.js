import React from 'react'
import '../css/ListingItem.css'

function ListingItem() {
  return (
    <div className='listing-item'>
      <img className='listing-img' src="https://images.pexels.com/photos/7146588/pexels-photo-7146588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <div className="listing-details">
        <div className="listing-categories">
          <span className='listing-category'>Buy</span>
          <span className='listing-category'>Sell</span>
        </div>
        <span className="listing-title">Awesome property available!!</span>
        <hr />
        <span className="listing-time">two days ago</span>
        <p className='listing-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe, ducimus esse alias quaerat voluptatibus quam quo.</p>
      </div>

    </div>
  )
}

export default ListingItem