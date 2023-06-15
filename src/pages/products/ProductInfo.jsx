import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../../hooks/useFetchData'
import { getImgSrc } from '../../helper/getImgSrc'
import ProductPriceAndDiscount from './ProductPriceAndDiscount'
import ProductIntroduction from './ProductIntroduction'
import CartAction from './CartAction'
import SimilarProducts from './SimilarProducts'

const ProductInfo = () => {
  const { pId } = useParams()
  const { value: product } = useFetchData(`/products/${pId}`, pId)

  if (product) {
    return (
      <div className="container-fluid my-4 px-4">
        <div className="row">
          <div className="d-block d-md-none">
            <ProductIntroduction product={product} />
          </div>

          <div className="col-12 col-md-6 ">
            <div className='justify-center border border-2'>
              <img
                src={getImgSrc(product.photos[0])}
                alt={product.name}
                className='h-100 w-max-100 p-2 object-fit-contain'
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="ps-md-3 pt-4 pt-md-0">
              <div className='d-none d-md-block'>
                <ProductIntroduction product={product} />
              </div>

              <ProductPriceAndDiscount
                product={product}
              />

              <CartAction product={product} />
            </div>

          </div>
        </div>

        <div className='mt-3'>
          <h4>Features</h4>
          <ul>
            {
              product.descriptions.map((info, i) => <li key={i}>{info}</li>)
            }
          </ul>
        </div>

        <div className='mt-3'>
          <SimilarProducts pId={product._id} cId={product.categoryId._id} />
        </div>

      </div>
    )
  }

  return (<h4>Loading Product Details....</h4>)
}

export default ProductInfo