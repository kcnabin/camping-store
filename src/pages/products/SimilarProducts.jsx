
import { useFetchData } from '../../hooks/useFetchData'
import EachProduct from './EachProduct'

const SimilarProducts = ({ pId, cId }) => {
  const url = `/similar-products/${pId}/${cId}`
  const { value: similarProducts } = useFetchData(url, pId, cId)

  if (similarProducts) {
    return (
      <>
        <p className="h5">
          Similar Products
        </p>
        <div className='container-fluid'>
          <div className="row">

            {
              similarProducts.map(product => {
                return (
                  <div className="col-12 col-sm-6 col-md-3 col-lg-3" key={product._id}>
                    <div className="hover-zoom border p-2 m-2">
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