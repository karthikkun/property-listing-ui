import React from 'react'
import Header from '../components/Header'
import Listing from '../components/Listing'
import Sidebar from '../components/Sidebar'
import '../css/Home.css'

function Home() {
  return (
    <div>
      <Header />
      <div className='home-page'>
        <Listing />
        <Sidebar />
      </div>
    </div>
  )
}

export default Home