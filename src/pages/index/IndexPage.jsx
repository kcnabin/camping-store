import React from 'react'
import CoverImage from './CoverImage'
import OfferCards from './OfferCards'
import RandomProducts from './RandomProducts'

const IndexPage = () => {

  return (
    <div>
      <CoverImage />
      <div className='mx-3'>
        <OfferCards />
        <RandomProducts />
      </div>
    </div>
  )
}

export default IndexPage