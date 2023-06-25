import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../../hooks/useFetchData'
import ProductsLayout from './ProductsLayout'
import LoadingIcon from '../../svgIcons/LoadingIcon'

const ProductCategory = () => {
  const { cId } = useParams()
  const { value: categoryProducts } = useFetchData(`/products/category/${cId}`, cId)

  if (categoryProducts) {
    return (
      <div className='mx-4 mb-4'>
        <div className='align-center my-2'>
          <h4 className=''>
            {
              (categoryProducts.length > 0)
                ? categoryProducts[0].category
                : 'No Items in Category'
            }
          </h4>
          <span className='ms-2 text-muted'>
            {`(${categoryProducts.length} products)`}
          </span>
        </div>

        <ProductsLayout products={categoryProducts} />
      </div>
    )
  }

  return (
    <LoadingIcon />
  )
}

export default ProductCategory