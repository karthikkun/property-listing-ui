import React from 'react'
import '../css/Listing.css'
import ListingItem from './ListingItem'

function Listing() {
  return (
    <div className='listing-section'>
      <ListingItem id='1' time="two days ago" title="Awesome property!!" img_url="https://images.pexels.com/photos/7146588/pexels-photo-7146588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <ListingItem id='2' time="one days ago" title="Discount Sale" img_url="https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg"/>
      <ListingItem id='3' time="just now" title="Fully furnished home" img_url="https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187__340.jpg"/>
      <ListingItem id='4' time="just now" title="Cafe with high reputation" img_url="https://media.istockphoto.com/photos/typical-cafe-shop-in-paris-picture-id452601065?b=1&k=20&m=452601065&s=170667a&w=0&h=nNqk4ckS1usMwxH-HBsTsXUR4iglgsyLx09iIp_epOI="/>
    </div>
  )
}

export default Listing