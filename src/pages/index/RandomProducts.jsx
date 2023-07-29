import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRandomProducts, loadMore } from '../../features/indexPage/randomProductSlice'

import CategoryLayout from '../productCategory/CategoryLayout'
import { toast } from 'react-toastify'
import LoadingIcon from '../../svgIcons/LoadingIcon'

const RandomProducts = () => {
  // const quantity = 8
  // const { value: randomProducts, setValue: setRandomProducts } = useFetchData(`/products/random/${quantity}`)
  // const [loading, setLoading] = useState(false)

  // const loadMore = async () => {
  //   setLoading(true)
  //   try {
  //     const { data } = await axios.get('/products/random/6')
  //     setRandomProducts([...randomProducts, ...data])
  //   } catch (error) {
  //     return handleError(error)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  const dispatch = useDispatch()
  const { loading, products: randomProducts, error } = useSelector(state => state.randomProducts)

  useEffect(() => {
    dispatch(fetchRandomProducts())
  }, [dispatch])

  if (loading) {
    return (
      <div className="p-3">
        <LoadingIcon />
      </div>
    )
  }

  if (!loading && error) {
    toast.error(error)

    return (
      <div className='mx-2 mt-4 mb-2'>
        {/* <LoadingIcon /> */}
      </div>
    )
  }

  if (!loading && !error) {
    return (
      <div className='mx-1 mt-4 mb-2'>
        {
          randomProducts && (
            <CategoryLayout
              products={randomProducts}
              title="On Sale Now"
            />
          )
        }
        <div className='ms-2 my-3'>
          <button
            className="btn btn-outline-success"
            onClick={() => dispatch(loadMore())}
          >
            Load More
          </button>
        </div>
      </div>
    )
  }

  return ''
}

export default RandomProducts