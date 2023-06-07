import React from 'react'

const DashboardLayout = ({ left, right }) => {

  return (
    <div className="container-fluid my-4 px-2 px-md-5">
      <div className="d-flex flex-column flex-md-row gap-2 gap-md-5">

        <div className="d-none d-sm-block">
          {left}
        </div>

        <div className="flex-grow-1">
          <div className="card p-3">
            {right}
          </div>
        </div>

      </div>
    </div>
  )
}

export default DashboardLayout