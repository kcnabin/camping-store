import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../../hooks/useFetchData'
import EachProduct from '../products/EachProduct'

const ProductCategory = () => {
  const { cId } = useParams()
  const { value: categoryProducts } = useFetchData(`/products/category/${cId}`, cId)

  if (categoryProducts) {
    return (
      <div className='mx-4'>
        <div className='align-center my-2'>
          <h4 className=''>{categoryProducts[0].category}</h4>
          <span className='ms-2 text-muted'>
            {`(${categoryProducts.length} products)`}
          </span>
        </div>

        <div className="container-fluid">
          <div className="row">
            {
              categoryProducts.map(product => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product._id}>
                  <div className="hover-zoom border p-2 m-2">
                    <EachProduct product={product} />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }

  return (<p>Loading Category Products...</p>)
}

export default ProductCategory