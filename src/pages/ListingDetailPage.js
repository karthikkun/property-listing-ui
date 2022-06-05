import React from 'react'
import ListingDetail from '../components/ListingDetail'
import Sidebar from '../components/Sidebar'
import '../css/ListingDetailPage.css'

function ListingDetailPage() {
  return (
    <div className='listing-detail-page'>
        <ListingDetail />
        <Sidebar />
    </div>
  )
}

export default ListingDetailPage