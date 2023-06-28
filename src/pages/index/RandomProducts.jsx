import React, { useState } from 'react'
import { useFetchData } from '../../hooks/useFetchData'
import ProductsLayout from '../productCategory/ProductsLayout'
import { handleError } from '../../helper/handleError'
import axios from 'axios'
import LoadingIcon from '../../svgIcons/LoadingIcon'
import CategoryLayout from '../productCategory/CategoryLayout'

const RandomProducts = () => {
  const quantity = 8
  const { value: randomProducts, setValue: setRandomProducts } = useFetchData(`/products/random/${quantity}`)
  const [loading, setLoading] = useState(false)

  const loadMore = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get('/products/random/6')
      setRandomProducts([...randomProducts, ...data])
    } catch (error) {
      return handleError(error)
    } finally {
      setLoading(false)
    }
  }

  if (!randomProducts) {
    return (
      <div className="p-3">
        <LoadingIcon />
      </div>
    )
  }

  return (
    <div className='mx-2 mt-4 mb-2'>
      <h5 className='ps-4 mb-1'>
        On Sale Now
      </h5>

      {
        randomProducts && <CategoryLayout products={randomProducts} />
      }

      {loading
        ? <LoadingIcon />
        : (
          <div className='ms-3 my-3'>
            <button
              className="btn btn-outline-success"
              onClick={() => loadMore()}
              disabled={loading}
            >
              Load More
            </button>
          </div>
        )}

    </div>
  )
}

export default RandomProducts