import React from 'react'
import EachProduct from '../products/EachProduct'

const ProductsLayout = ({ products }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {
          products.map((product, i) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product._id + i}>
              <div className="hover-zoom shadow-lg border rounded-4 p-2">
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