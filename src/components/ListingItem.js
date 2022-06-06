import React from 'react'
import { Link } from 'react-router-dom'
import '../css/ListingItem.css'

function ListingItem(props) {
  return (
    <div className='listing-item'>
      <img className='listing-img' src={props.img_url} alt="" />
      <div className="listing-details">
        <div className="listing-categories">
          <span className='listing-category'>Buy</span>
          <span className='listing-category'>Sell</span>
        </div>
        <span><Link to={`/detail/${props.id}`} className="listing-title">{props.title}</Link></span>
        <hr />
        <span className="listing-time">{props.time}</span>
        <p className='listing-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eum labore laborum doloremque magni, deserunt soluta dignissimos officia laboriosam, iste enim modi quisquam, minima maiores id quaerat beatae tenetur nulla? ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe, ducimus esse alias quaerat voluptatibus quam quo.</p>
      </div>

    </div>
  )
}

export default ListingItem