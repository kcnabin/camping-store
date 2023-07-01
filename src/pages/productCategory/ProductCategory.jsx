import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../../hooks/useFetchData'
import ProductsLayout from './ProductsLayout'
import LoadingIcon from '../../svgIcons/LoadingIcon'
import PriceFilter from './PriceFilter'

const ProductCategory = () => {
  const { cId } = useParams()
  const { value: categoryProducts, setValue: setCategoryProducts } = useFetchData(`/category-products/${cId}`, cId)

  if (categoryProducts) {
    return (
      <div className='d-flex my-2'>
        <div style={{ minWidth: "240px" }} className='d-none d-md-block'>
          <PriceFilter setFilteredProducts={setCategoryProducts} />
        </div>

        <div className='flex-grow-1'>
          <ProductsLayout products={categoryProducts} setProducts={setCategoryProducts} />
        </div>
      </div>
    )
  }

  return (
    <LoadingIcon />
  )
}

export default ProductCategory