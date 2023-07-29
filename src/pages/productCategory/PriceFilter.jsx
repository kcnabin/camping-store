import React from 'react'
import { prices } from '../../filterParams/priceFilter'
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { filterCategoryProducts } from '../../features/categoryPage/categoryProductSlice';

const PriceFilter = () => {
  const dispatch = useDispatch()
  const categoryId = useLocation().pathname.split('/')[2]

  const handleFilter = e => {
    const range = e.target.value.replace(',', '-')
    const url = `/category-products/filter/${categoryId}/${range}`

    dispatch(filterCategoryProducts(url))
    // try {
    //   const { data } = await axios.get(filterUrl)
    //   console.log('data :', data);
    //   setFilteredProducts(data)

    // } catch (error) {
    //   return handleError(error)
    // }
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