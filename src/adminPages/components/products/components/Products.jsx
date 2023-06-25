import { useState } from 'react';
import { useFetchData } from '../../../../hooks/useFetchData'
import axios from 'axios';
import { handleError } from '../../../../helper/handleError';
import EachProductLayout from './EachProductLayout';
import LoadingIcon from '../../../../svgIcons/LoadingIcon';

const Products = () => {
  const { value: productsData, setValue: setProductData } = useFetchData('/products/all/1')
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const loadMoreProducts = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(`/products/all/${currentPage + 1}`)
      setProductData({ ...productsData, products: [...productsData.products, ...data.products] })
      setCurrentPage(currentPage + 1)

    } catch (error) {
      return handleError(error)

    } finally {
      setLoading(false)
    }
  }

  if (productsData) {
    return (
      <div>
        <h5 className="text-center">
          All Products
        </h5>

        {
          productsData && (
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

  return <LoadingIcon />
}

export default Products