import React, { useEffect, useState } from 'react'
import { useSearch } from '../../context/SearchContext'
import axios from 'axios';
import { handleError } from '../../helper/handleError';
import { useFetchData } from '../../hooks/useFetchData';
import PriceFilter from '../productCategory/PriceFilter';
import ProductsLayout from '../productCategory/ProductsLayout';
import LoadingIcon from '../../svgIcons/LoadingIcon';
import CategoryLayout from '../productCategory/CategoryLayout';

const SearchPage = () => {
  const { search, setSearch } = useSearch()
  const searchText = search.replaceAll(' ', '+')

  const [products, setProducts] = useState('')

  useEffect(() => {
    if (!search) {
      return
    }

    const searchProducts = async () => {
      try {
        const { data } = await axios.get(`/search/${searchText}`)
        console.log('data :', data);
        setProducts(data)
      } catch (error) {
        return handleError(error)
      }
    }

    searchProducts()

  }, [search])

  if (products) {
    return (
      <>
        <div className='align-center mt-2'>
          <h5 className='ms-3'>
            {
              (products.length > 0)
                ? 'Searched Items'
                : 'No Items in Category'
            }
          </h5>

          <span className='ms-2 text-muted'>
            {`(${products.length} products)`}
          </span>

        </div>

        <CategoryLayout products={products} />
      </>
    )

  }

  return (
    <LoadingIcon />
  )
}

export default SearchPage