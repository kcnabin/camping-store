import React from 'react'
import { useFetchData } from '../../hooks/useFetchData'
import { Link } from 'react-router-dom'

const SideNav = () => {
  const { value: categories } = useFetchData('/category/all')

  return (
    <nav>
      <div
        className="offcanvas offcanvas-start w-auto"
        tabIndex="-1"
        id="sideNav"
      >
        <div className="offcanvas-header p-0 py-3 px-4">
          <h5 className="offcanvas-title text-decoration-underline">
            Browse Categories
          </h5>
          <button type="button" className="btn-close text-reset ms-2" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body p-0 text-start">
          {
            categories ? (
              <nav className='my-3'>
                {
                  categories.map(category => (
                    <div key={category._id}
                      data-bs-dismiss="offcanvas"
                      className=''
                    >
                      <Link
                        to={`/category/${category._id}`}
                        className='side-nav py-3 px-4 h5 fw-light border-top border-bottom m-0'
                      >
                        {category.name}
                      </Link>
                    </div>
                  ))
                }
              </nav>
            ) : 'Loading Categories'
          }
        </div>
      </div>
    </nav>
  )
}

export default SideNav