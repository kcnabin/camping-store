import React from 'react'
import EachProduct from '../products/EachProduct'

const CategoryLayout = ({ products, title = '' }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h5 className='mb-0'>
          {title}
        </h5>

        {
          products.map((product, i) => (
            <div className="col-6 col-md-4 col-lg-3 p-2" key={product._id + i}>
              <div className="hover-zoom border rounded-4 shadow p-1" style={{ height: "100%" }}>
                <EachProduct product={product} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CategoryLayout