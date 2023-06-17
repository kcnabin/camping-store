import React from 'react'
import { useFetchData } from '../../hooks/useFetchData'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const { value: categories } = useFetchData('/category/all')
  const location = useLocation()

  const getNavLinkStyle = (link) => {
    let style = 'me-4 py-2 nav-link '
    if (location.pathname === `/category/${link}`) {
      style += 'fw-semibold'
    }

    return style
  }

  if (categories) {
    return (
      <nav className='navbar p-0 m-0 px-4 d-none d-md-flex flex-wrap'>
        {
          categories.map(category => (
            <Link
              to={`/category/${category._id}`}
              className={getNavLinkStyle(category._id)}
              key={category._id}
            >
              {category.name}
            </Link>
          ))
        }
      </nav>
    )
  }
  return 'Loading Navigation Bar'
}

export default NavBar 