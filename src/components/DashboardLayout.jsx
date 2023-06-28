import React from 'react'

const DashboardLayout = ({ left, right }) => {

  return (
    <div className="">
      <div className="d-flex">

        <div className="admin-menu d-none d-md-block">
          {left}
        </div>

        <div className="flex-grow-1">
          <div className="py-3 px-3">
            {right}
          </div>
        </div>

      </div>
    </div>
  )
}

export default DashboardLayout