import React from 'react'
import { Star } from '@material-ui/icons'

function SearchResult({
    src,
    location,
    title,
    description,
    star,
    price,
    total}) {
  return (
    <div className='searchResult'>
        <img src={src} alt=''/> 
        <div className='searchResult__info'>
            <div className='searchResult__infoTop'>

                <h3><b>{location}</b></h3>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div className='searchResult__infoBottom'>
                <div className='searchResult__stars'>
                    <Star className='searchResult__star' />
                        <p>
                            <strong>{star}</strong>
                        </p>
                        
                </div>
                <div className='searchResult__price'>
                    <h3>{price}</h3>
                    <p>{total}</p>
                </div>
            </div>
        </div>     
    </div>
  )
}

export default SearchResult
