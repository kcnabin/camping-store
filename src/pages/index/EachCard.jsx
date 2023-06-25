import React from 'react'
import { Link } from 'react-router-dom'

const EachCard = ({ card }) => {

  return (
    <Link to={card.link} className="card rounded-4 hover-zoom shadow" >
      <div className='ratio ratio-4x3'>
        <img
          src={card.photo}
          className="card-img-top p-1 object-fit-contain p-3"
          alt={card.title} />
      </div>
      <div className="card-body">
        <h6 className="card-title text-success">
          {card.title}
        </h6>
        <p className="card-text">
          {card.info}
        </p>
      </div>
    </Link>
  )
}

export default EachCard