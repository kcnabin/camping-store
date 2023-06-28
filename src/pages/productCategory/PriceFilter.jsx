import React from 'react'
import axios from 'axios'
import { prices } from '../../filterParams/priceFilter'
import { handleError } from '../../helper/handleError';
import { useLocation } from 'react-router-dom';


const PriceFilter = ({ setFilteredProducts }) => {
  const categoryId = useLocation().pathname.split('/')[2]

  const handleFilter = async (e) => {
    const range = e.target.value.replace(',', '-')
    const filterUrl = `/category-products/filter/${categoryId}/${range}`

    try {
      const { data } = await axios.get(filterUrl)
      console.log('data :', data);
      setFilteredProducts(data)

    } catch (error) {
      return handleError(error)
    }
  }

  return (
    <div className='px-4'>
      <div>
        <h5 className='mb-3'>Filter By Price</h5>

        <form>
          {
            prices.map(price => (
              <div className="form-check" key={price._id}>
                <input
                  className="form-check-input"
                  type="radio"
                  name='price-filter'
                  value={price.array}
                  onClick={handleFilter}
                />

                <label className="form-check-label text-muted ms-2">
                  {price.name}
                </label>
              </div>
            ))
          }
        </form>
      </div>
    </div>
  )
}

export default PriceFilter