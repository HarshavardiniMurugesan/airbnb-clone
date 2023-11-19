import React, { useState } from 'react'
import {Button} from '@material-ui/core'
import Search from '../Search/Search.js'
import {useNavigate} from 'react-router-dom'
import './Banner.css'

function Banner() {
  const [showSearch,setShowSearch]=useState(false)
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate('/search')
  }
  return (
    <div className='banner'>
        <div className='banner__search'>
            <Button 
            className='banner__searchButton' 
            variant='outlined' 
            onClick={()=>setShowSearch((prev)=> !prev)}>
            
            {showSearch ? 'Hide' :'Search Dates'}
            </Button>
            {showSearch && <Search />}
        </div>
        <div className='banner__info'>
          <h4>GET OUT AND STRETCH YOUR IMAGINATION</h4>
          <h5>Plan a different kind of gateway to uncover the hidden gems near you</h5>
          <Button variant='outlined' onClick={handleClick}>
            Explore Nearby
          </Button>
        </div>
    </div>
  )
}

export default Banner
