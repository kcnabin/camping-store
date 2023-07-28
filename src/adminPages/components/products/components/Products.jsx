import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import { useFetchData } from '../../../../hooks/useFetchData'
// import axios from 'axios';
// import { handleError } from '../../../../helper/handleError';
import EachProductLayout from './EachProductLayout';
import LoadingIcon from '../../../../svgIcons/LoadingIcon';
import { loadAllProducts, loadMore } from '../../../../features/admin/allProducts/allProductsSlice';
import { toast } from 'react-toastify';

const Products = () => {
  // const { value: productsData, setValue: setProductData } = useFetchData('/products/all/1')
  const [currentPage, setCurrentPage] = useState(1)
  // const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const { loading, error, data: productsData } = useSelector(state => state.allProducts)

  useEffect(() => {
    const url = `/products/all/1`
    dispatch(loadAllProducts(url))
  }, [dispatch])

  const loadMoreProducts = async () => {
    try {
      dispatch(loadMore(`/products/all/${currentPage + 1}`))
      setCurrentPage(currentPage + 1)
    } catch (err) {
      console.log('err :', err);
      toast.error(error)
    }

    // setLoading(true)
    // try {
    //   const { data } = await axios.get(`/products/all/${currentPage + 1}`)
    //   setProductData({ ...productsData, products: [...productsData.products, ...data.products] })
    //   setCurrentPage(currentPage + 1)

    // } catch (error) {
    //   return handleError(error)

    // } finally {
    //   setLoading(false)
    // }
  }



  if (!loading && !error) {
    return (
      <div>
        <h5 className="text-center">
          All Products
        </h5>

        {
          (productsData?.products?.length > 0) && (
            <div className='container-fluid'>
              <div className="row">
                {
                  productsData.products.map((product, i) => {
                    return (
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3" key={product._id + i}>
                        <EachProductLayout product={product} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        }

        {
          loading
            ? <LoadingIcon />
            : (
              <button
                className="btn btn-secondary ms-3 my-3"
                onClick={() => loadMoreProducts()}
                disabled={productsData?.products?.length >= productsData?.total}
              >
                Load More
              </button>
            )
        }


      </div>
    )
  }

  if (loading) {
    return <LoadingIcon />
  }

  if (error) {
    return toast.error(error)
  }

  return <LoadingIcon />
}

export default Products