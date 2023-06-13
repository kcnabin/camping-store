import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../../hooks/useFetchData'
import { getImgSrc } from '../../helper/getImgSrc'
import ProductPriceAndDiscount from './ProductPriceAndDiscount'
import ProductIntroduction from './ProductIntroduction'
import CartAction from './CartAction'

const ProductInfo = () => {
  const { pId } = useParams()
  const { value: product, setValue: setProduct } = useFetchData(`/products/${pId}`, pId)
  console.log('product :', product);



  if (product) {
    return (
      <>
        <div className="container-fluid my-4 px-4">
          <div className="row">
            <div className="col-12 col-md-6 border border-2">
              <div style={{ maxHeight: "60%" }} className='justify-center'>
                <img
                  src={getImgSrc(product.photos[0])}
                  alt={product.name}
                  className='h-100 w-max-100 p-2 object-fit-contain'
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="ps-md-3 pt-4 pt-md-0">
                <ProductIntroduction product={product} />

                <ProductPriceAndDiscount
                  product={product}
                />

                <CartAction product={product} />
              </div>

            </div>
          </div>

        </div>

        {/* <div>
          <SimilarProducts pId={product._id} />
        </div> */}
      </>
    )
  }

  return (<h4>Loading Product Details....</h4>)
}

export default ProductInfo