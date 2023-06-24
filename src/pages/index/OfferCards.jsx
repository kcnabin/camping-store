import React from 'react'
import EachCard from './EachCard'

const OfferCards = () => {
  const cards = [
    {
      title: 'Tents Deals',
      info: 'upto 30% off',
      photo: "/photos/camping-tent-offers.png",
      link: ""
    },
    {
      title: 'Footwear Deals',
      info: 'upto 20% off',
      photo: "/photos/hiking-shoes-offers.png",
      link: ""
    },
    {
      title: 'Backpacks Deals',
      info: 'upto 25% off',
      photo: "/photos/bagpacks-offers.png",
      link: ""
    },
    {
      title: 'Sleeping Bag Deals',
      info: 'upto 15% off',
      photo: "/photos/sleeping-bag-offers.png",
      link: ""
    }
  ]

  return (
    <div className='m-3'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 col-sm-4 col-md-3">
            <EachCard card={cards[0]} />
          </div>

          <div className="col-6 col-sm-4 col-md-3">
            <EachCard card={cards[1]} />
          </div>

          <div className="col-6 col-sm-4 col-md-3">
            <div className="d-none d-sm-block">
              <EachCard card={cards[2]} />
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3">
            <div className="d-none d-md-block">
              <EachCard card={cards[3]} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OfferCards