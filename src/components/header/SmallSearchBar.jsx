import React from 'react'
import SearchIcon from '../../svgIcons/SearchIcon'
import { useSearch } from '../../context/SearchContext'
import { useNavigate } from 'react-router-dom'

const SmallSearchBar = ({ setShowSearch }) => {
  const { search, setSearch } = useSearch()
  const navigate = useNavigate()

  const handleSubmit = () => {
    localStorage.setItem('camping-store-search', search)
    navigate('/search')
  }

  return (
    <div className='d-flex flex-column d-md-none text-white small-search z-3'>
      <div className='align-center  py-3 px-4 bg-dark border-dark border-bottom'>
        <SearchIcon size='24px' />
        <div className='flex-grow-1 mx-3'>
          <form onSubmit={handleSubmit} >
            <input
              className='form-control p-0 ps-2 py-1 m-0 '
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </form>
        </div>

        <div className='me-4' onClick={() => setShowSearch(false)}>
          <button type="button" className="btn-close btn-close-white" />
        </div>
      </div>

      <div
        className='small-search-empty z-3 flex-grow-1'
        onClick={() => setShowSearch(false)}
      ></div>
    </div>
  )
}

export default SmallSearchBar