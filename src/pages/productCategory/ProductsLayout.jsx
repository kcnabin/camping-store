import React from 'react'
import EachProduct from '../products/EachProduct'

const ProductsLayout = ({ products }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {
          products.map((product, i) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product._id + i}>
              <div className="hover-zoom border rounded-4 shadow p-1 mb-3">
                <EachProduct product={product} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductsLayout