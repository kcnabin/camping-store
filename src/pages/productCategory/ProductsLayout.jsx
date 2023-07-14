import React from 'react'
import CategoryLayout from './CategoryLayout'
import PriceFilter from './PriceFilter'

const ProductsLayout = ({ products }) => {

  return (
    <div className='mx-3'>
      <div className='align-center flex-wrap my-1'>
        <h5 className='ms-2'>
          {
            (products.length > 0)
              ? products[0].category
              : 'No Items in Category'
          }
        </h5>

        <span className='ms-2 text-muted'>
          {`(${products.length} products)`}
        </span>

        <span
          className='btn border border-2 ms-2 d-block d-md-none'
          data-bs-toggle="offcanvas"
          data-bs-target="#filterNav"
        >
          Filter

          <div className='offcanvas offcanvas-end' id="filterNav">
            <div className='text-start py-4'>
              <PriceFilter />

              <button
                className="btn btn-outline-secondary text-reset ms-4 mt-3"
                data-bs-dismiss="offcanvas"
              >
                Close Filter
              </button>
            </div>
          </div>
        </span>

      </div>

      <CategoryLayout products={products} />

    </div>
  )
}

export default ProductsLayout