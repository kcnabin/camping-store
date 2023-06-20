import React from 'react'
import { Link } from 'react-router-dom'
import { getImgSrc } from '../../../../helper/getImgSrc'

const EachProductLayout = ({ product }) => {
  return (
    <div>
      <div className="card shadow my-3 hover-zoom">
        <div className='w-100' style={{ height: "150px" }}>
          <img
            src={getImgSrc(product.photos[0])}
            style={{ height: "100%" }}
            className="card-img-top p-2 object-fit-scale"
            alt={product.name}
          />
        </div>
        <div className="card-body">
          <span className="card-title text-muted">
            {product.name}
          </span>
          <p className='mb-2'>
            {product.category}
          </p>
          <span className='text-success'>
            NRs {product.price.toLocaleString()}
          </span>
          {/* <p className="card-text fw-lighter lh-sm mt-2">
            {product.descriptions[0].substring(0, 40)}...
          </p> */}

          <div className='flex-center font-12'>
            <Link className="btn btn-secondary me-2 mt-2 font-12"
              to={`/dashboard/admin/products/edit/${product._id}`}
            >
              Edit
            </Link>

            <button className="btn btn-danger me-2 mt-2 font-12">
              Delete
            </button>

            <Link className="btn btn-dark mt-2 font-12"
              to={`/products/${product._id}`}
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EachProductLayout