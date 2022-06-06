import React from 'react'
import '../css/ListingDetail.css'

function ListingDetail(props) {
  return (
    <div className='listing-detail'>
      <div className="listing-detail-content">
        <img className='listing-detail-img' src="https://images.pexels.com/photos/7146588/pexels-photo-7146588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h1 className='listing-detail-title'>
          Awesome property!!
          <div className="listing-detail-action">
            <i class="listing-detail-action-icon fa-solid fa-pen-to-square"></i>
            <i class="listing-detail-action-icon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="listing-detail-metainfo">
          <span className='listing-detail-author'>Author: <strong>John Doe</strong></span>
          <span className='listing-detail-time'>1 day ago</span>
        </div>
        <div className="listing-detail-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ad enim atque nisi. Cupiditate, voluptatibus optio. Similique, fugiat non! Esse aliquid cumque, blanditiis eum quo tenetur modi incidunt, voluptate inventore saepe quas necessitatibus aperiam? Sit cum amet sed itaque eligendi obcaecati, tempora nulla accusamus placeat temporibus omnis quae est fugit id ex praesentium autem necessitatibus qui iure perferendis aliquam eos deleniti quod? Rerum molestiae et expedita quidem minus ipsam consequuntur reiciendis odit sequi perspiciatis exercitationem earum sint, quos laborum ad. Quo modi nisi ullam amet alias maiores architecto nostrum voluptatum, perferendis, vitae dolores? Impedit repellat odio dolorum mollitia amet quas nesciunt dicta similique nam. Accusantium fuga accusamus necessitatibus nobis velit, esse suscipit odit, enim labore minus vitae quae harum, exercitationem nulla totam cupiditate quasi qui adipisci quaerat laborum blanditiis? Sit, in reiciendis vero distinctio quos omnis facere veritatis possimus, suscipit iusto minima rerum.
          </div>
      </div>
    </div>
  )
}

export default ListingDetail