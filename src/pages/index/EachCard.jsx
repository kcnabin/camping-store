import React from 'react'

const EachCard = ({ card }) => {
  return (
    <div className="card hover-zoom">
      <div className='ratio ratio-4x3'>
        <img src={card.photo} className="card-img-top p-1 object-fit-contain" alt={card.title} />
      </div>
      <div className="card-body">
        <h6 className="card-title text-success">
          {card.title}
        </h6>
        <p className="card-text">
          {card.info}
        </p>
      </div>
    </div>
  )
}

export default EachCard