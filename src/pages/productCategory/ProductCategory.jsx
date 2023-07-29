import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductsLayout from './ProductsLayout'
import LoadingIcon from '../../svgIcons/LoadingIcon'
import PriceFilter from './PriceFilter'

import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoryProducts } from '../../features/categoryPage/categoryProductSlice'
import { toast } from 'react-toastify'

const ProductCategory = () => {
  const { cId } = useParams()
  // const { value: categoryProducts, setValue: setCategoryProducts } = useFetchData(`/category-products/${cId}`, cId)
  const { loading, products: categoryProducts, error } = useSelector(state => state.categoryProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoryProducts(cId))
  }, [dispatch, cId])

  if (loading) {
    return (
      <div className="p-4">
        <LoadingIcon />
      </div>
    )
  }

  if (!loading && error) {
    toast.error(error)
    return ""
  }

  if (!loading && !error) {
    return (
      <div className='d-flex my-2'>
        <div style={{ minWidth: "240px" }} className='d-none d-md-block'>
          <PriceFilter />
        </div>

        <div className='flex-grow-1'>
          <ProductsLayout products={categoryProducts} />
        </div>
      </div>
    )
  }


}

export default ProductCategory