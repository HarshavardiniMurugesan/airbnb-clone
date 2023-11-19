import React from 'react'
import {Button} from '@material-ui/core'
import SearchResult from '../../components/SearchResult/SearchResult'
import '../../components/SearchResult/SearchResult.css'
import '../../Pages/Search/Search.css'

const Search = () => {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>45 stays @ 26 September # 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant='outlined'>Cancel</Button>
        <Button variant='outlined'>Type of Place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and Beds</Button>
        <Button variant='outlined'>Filter</Button>
      </div>
      <SearchResult 
      src='https://a0.muscache.com/im/pictures/8ecf49af-d485-4a01-b312-c194a76916c4.jpg?im_w=720'
      location='COLOMBO,SRILANKA'
      title='390 kilometers away'
      description='19-24 Nov'
      price='Rs.4,568/night'
      star={3}
      total='Package for 2 days Rs.11,860'
      /> 
      <SearchResult 
      src='https://a0.muscache.com/im/pictures/a4ea8044-fd1d-4511-b543-9fa19cd665ec.jpg?im_w=720'
      location='BRECKENRIDGE,COLORDO,US'
      title='3,131 kilometers away'
      description='12-20 Dec'
      star={4.3}
      price='Rs.3,18,456/night'
      total='Package for 2 days Rs.5,23,600'
      />
      <SearchResult 
      src='https://a0.muscache.com/im/pictures/67ef18d6-fb51-448f-8b47-f3ca3141d994.jpg?im_w=720'
      location='THRISSUR,INDIA'
      title='237 kilometers away'
      description='2-8 Jan'
      star={5}
      price='Rs.27,000/night'
      total='Package for 2 days Rs.59,000'
      />
      <SearchResult 
      src='https://a0.muscache.com/im/pictures/13de15a5-ca35-4ca7-bc08-7f1a5f908004.jpg?im_w=720'
      location='BAKRUNIANI,GEORGIA'
      title='Near Bakruniani sky resort'
      description='19-24 Nov'
      star={4.2}
      price='Rs.47,334/night'
      total='Package for 2 days Rs.94,672'
      />  
    </div>
  )
}

export default Search
