import React from 'react'
import { Link } from 'react-router-dom'
import { getImgSrc } from '../../../../helper/getImgSrc'

const EachProductLayout = ({ product }) => {
  return (
    <div>
      <div className="card shadow my-3 hover-zoom">
        <div className='w-100' style={{ height: "200px" }}>
          <img
            src={getImgSrc(product.photos[0])}
            style={{ height: "100%" }}
            className="card-img-top p-2 object-fit-scale"

            alt={product.name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            {product.name}
          </h5>
          <h6>
            {product.category}
          </h6>
          <h6>
            Price: NRs {product.price.toLocaleString()}
          </h6>
          <p className="card-text fw-lighter lh-sm mt-3">
            {product.descriptions[0].substring(0, 40)}...
          </p>
          <div className='flex-center'>
            <Link className="btn btn-secondary me-2"
              to={`/dashboard/admin/products/edit/${product._id}`}
            >
              Edit
            </Link>

            <button className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EachProductLayout