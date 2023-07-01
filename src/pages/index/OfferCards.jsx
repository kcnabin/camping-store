import React from 'react'
import EachCard from './EachCard'

const OfferCards = () => {
  const cards = [
    {
      title: 'Tents Deals',
      info: 'upto 30% off',
      photo: "/photos/camping-tent-offers.png",
      link: "/category/64846bfbf95c2bc48cd8d5cf"
    },
    {
      title: 'Footwear Deals',
      info: 'upto 20% off',
      photo: "/photos/hiking-shoes-offers.png",
      link: "/category/64846c08f95c2bc48cd8d5d5"
    },
    {
      title: 'Backpacks Deals',
      info: 'upto 25% off',
      photo: "/photos/bagpacks-offers.png",
      link: "/category/64846bf8f95c2bc48cd8d5cc"
    },
    {
      title: 'Sleeping Bag Deals',
      info: 'upto 15% off',
      photo: "/photos/sleeping-bag-offers.png",
      link: "/category/64846c03f95c2bc48cd8d5d2"
    }
  ]

  const cardStyle = `col-6 col-sm-4 col-md-3 px-2`

  return (
    <div className='px-1 mt-3'>
      <h5 className='ms-2 mb-2'>Latest Offers</h5>
      <div className="container-fluid">
        <div className="row">
          <div className={cardStyle}>
            <EachCard card={cards[0]} />
          </div>

          <div className={cardStyle}>
            <EachCard card={cards[1]} />
          </div>

          <div className={cardStyle}>
            <div className="d-none d-sm-block" style={{ height: "100%" }}>
              <EachCard card={cards[2]} />
            </div>
          </div>

          <div className={cardStyle}>
            <div className="d-none d-md-block" style={{ height: "100%" }}>
              <EachCard card={cards[3]} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OfferCards