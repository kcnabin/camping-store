import React from 'react'
import { Link } from 'react-router-dom'

const EachCard = ({ card }) => {

  return (
    <Link to={card.link} className="card rounded-4 hover-zoom shadow" style={{ height: "100%" }} >
      <div className='ratio ratio-4x3' style={{ height: "100%" }}>
        <img
          src={card.photo}
          className="card-img-top p-1 object-fit-contain px-3 py-2"
          alt={card.title} />
      </div>

      <div className="card-body pb-2 px-3 ">
        <h6 className="card-title text-success font-sm">
          {card.title}
        </h6>
        <p className="card-text font-sm">
          {card.info}
        </p>
      </div>
    </Link>
  )
}

export default EachCard