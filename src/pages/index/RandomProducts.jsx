import React from 'react'
import { useFetchData } from '../../hooks/useFetchData'
import ProductsLayout from '../productCategory/ProductsLayout'
import { handleError } from '../../helper/handleError'
import axios from 'axios'

const RandomProducts = () => {
  const quantity = 8
  const { value: randomProducts, setValue: setRandomProducts } = useFetchData(`/products/random/${quantity}`)
  console.log('randomProducts :', randomProducts);

  const loadMore = async () => {
    try {
      const { data } = await axios.get('/products/random/6')
      console.log('data :', data);
      setRandomProducts([...randomProducts, ...data])

    } catch (error) {
      return handleError(error)
    }
  }

  return (
    <div className='mx-2 mt-4 mb-2'>
      <h5 className='ps-4 mb-1'>
        On Sale Now
      </h5>

      {
        randomProducts && <ProductsLayout products={randomProducts} />
      }

      <div className='ms-3 mt-3'>
        <button
          className="btn btn-outline-success"
          onClick={() => loadMore()}
        >
          Load More
        </button>
      </div>

    </div>
  )
}

export default RandomProducts