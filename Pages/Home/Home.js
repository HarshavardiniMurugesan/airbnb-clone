import React from 'react'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <div className='home__section'>
        <Card 
        src='https://a0.muscache.com/im/pictures/miso/Hosting-818350395881615522/original/5c3e3d63-2337-4f9a-b06e-f2a225902d5d.jpeg?im_w=1200'
        title='Online Experiences'
        description='Unique features to find places'/>
        <Card 
        src='https://a0.muscache.com/im/pictures/a6ca73d7-6627-4eb7-af02-ebc711c5031d.jpg?im_w=1200'
        title='Unique stays'
        description='Explore the joy of staying'/>
        <Card 
        src='https://a0.muscache.com/im/pictures/90c0ab07-d7bd-42f9-b085-f1bca998b0fe.jpg?im_w=1200'
        title='Amazing views'
        description='Feel thrilled'/>
        
      </div>
      <div className='home__section'>
        <Card 
        src='https://a0.muscache.com/im/pictures/6a53fb5f-1bbc-4728-96de-17e9fe8780f3.jpg?im_w=720'
        title='HERAKLION,GREECE'
        description='6,300 kilometers away'
        price='Rs.29,045/night'/>
        <Card 
        src='https://a0.muscache.com/im/pictures/miso/Hosting-738405202141869126/original/f77511a3-dbe6-413f-afcc-dc73d62e6cf4.jpeg?im_w=720'
        title='ANJUNA,INDIA'
        description='860 kilometers away'
        price='Rs.45,678/night'/>
        <Card 
        src='https://a0.muscache.com/im/pictures/a2f93fb8-9857-46e4-8c55-2b61d78e1a78.jpg?im_w=720'
        title='HALLIM-EUB,SOUTH KOREA'
        description='5,746 kilometers away'
        price='$Rs.55,000/night'/>
      </div>
    </div>
  )
}

export default Home
