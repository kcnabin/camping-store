import React from 'react'
import SearchIcon from '../../svgIcons/SearchIcon'

const SmallSearchBar = ({ setShowSearch }) => {
  return (
    <div className='d-flex flex-column d-md-none text-white small-search z-3'>
      <div className='align-center py-3 px-4 bg-dark border-dark border-bottom'>
        <SearchIcon size='24px' />
        <input
          className='form-control p-0 ps-2 py-1 m-0 ms-3'
        />

        <div className='mx-2' onClick={() => setShowSearch(false)}>
          <button type="button" className="btn-close btn-close-white" aria-label="Close" />
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