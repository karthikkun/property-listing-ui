import React from 'react'
import '../css/Listing.css'
import ListingItem from './ListingItem'

function Listing() {
  return (
    <div className='listing-section'>
      <span>All Properties</span>
      <ListingItem />
      <ListingItem />
    </div>
  )
}

export default Listing