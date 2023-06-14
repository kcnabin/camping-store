import React from 'react'
import { useFetchData } from '../../hooks/useFetchData'
import { Link } from 'react-router-dom'
import EachProduct from './EachProduct'

const SimilarProducts = ({ pId, cId }) => {
  const url = `/similar-products/${pId}/${cId}`
  const { value: similarProducts } = useFetchData(url, pId, cId)

  if (similarProducts) {
    return (
      <>
        <p className="h5">
          Similar Products
        </p>
        <div className='container-fluid'>
          <div className="row">
            {
              similarProducts.map(product => {
                return (
                  <div
                    className="col-12 col-sm-6 col-md-4 col-lg-3"
                    key={product._id}
                  >
                    <EachProduct product={product} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </>
    )
  }

  return (<p>Loading Similar Products</p>)
}

export default SimilarProducts