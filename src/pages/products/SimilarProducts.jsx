
import { useFetchData } from '../../hooks/useFetchData'
import EachProduct from './EachProduct'

const SimilarProducts = ({ pId, cId }) => {
  const url = `/similar-products/${pId}/${cId}`
  const { value: similarProducts } = useFetchData(url, pId, cId)

  if (similarProducts) {
    return (
      <>
        <p className="h5 mt-4 m-0">
          Similar Products
        </p>
        <div className='container-fluid p-0'>
          <div className="row">

            {
              similarProducts.map(product => {
                return (
                  <div className="col-6 col-sm-6 col-md-3 p-2" key={product._id}>
                    <div className="hover-zoom border m-2">
                      <EachProduct product={product} />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

      </>
    )
  }

  return (<p>Loading Similar Products</p>)
}

export default SimilarProducts