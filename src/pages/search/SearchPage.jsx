import React, { useEffect, useState } from 'react'
import { useSearch } from '../../context/SearchContext'
import axios from 'axios';
import { handleError } from '../../helper/handleError';
import LoadingIcon from '../../svgIcons/LoadingIcon';
import CategoryLayout from '../productCategory/CategoryLayout';

const SearchPage = () => {
  const { search } = useSearch()
  const searchText = search.replaceAll(' ', '+')

  const [products, setProducts] = useState('')

  useEffect(() => {
    if (!search) {
      return
    }

    const searchProducts = async () => {
      try {
        const { data } = await axios.get(`/search/${searchText}`)
        setProducts(data)
      } catch (error) {
        return handleError(error)
      }
    }

    searchProducts()

  }, [searchText, search])

  if (products) {
    return (
      <div className='mx-4 my-2'>
        <div className='align-center flex-wrap'>
          <h5 className='me-2 ms-1 ms-md-0'>
            {
              (products.length > 0)
                ? 'Searched Items'
                : 'No Items in Category'
            }
          </h5>

          <span className='text-muted'>
            {`(${products.length} products)`}
          </span>

        </div>

        <CategoryLayout products={products} />
      </div>
    )

  }

  return (
    <LoadingIcon />
  )
}

export default SearchPage