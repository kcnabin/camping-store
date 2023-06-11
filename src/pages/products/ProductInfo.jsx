import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../../hooks/useFetchData'

const ProductInfo = () => {
  const { pId } = useParams()
  const { value: product, setValue: setProduct } = useFetchData(`/products/${pId}`, pId)
  console.log('product :', product);

  return (
    <div>ProductInfo</div>
  )
}

export default ProductInfo