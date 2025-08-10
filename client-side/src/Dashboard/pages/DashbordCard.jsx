import React from 'react'

const DashbordCard = () => {
  return (
    <div >
   
        {/* Stats cards */}
        <div className="row my-4">
          <div className="col-md-4 mb-3">
            <div className="card text-white bg-primary h-100">
              <div className="card-body">
                <h5 className="card-title">Users</h5>
                <p className="card-text display-6">1,245</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card text-white bg-success h-100">
              <div className="card-body">
                <h5 className="card-title">Sales</h5>
                <p className="card-text display-6">$23,450</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card text-white bg-warning h-100">
              <div className="card-body">
                <h5 className="card-title">Visitors</h5>
                <p className="card-text display-6">5,389</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="card">
          <div className="card-header">
            Recent Activity
          </div>
          <div className="card-body table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Activity</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>Logged in</td>
                  <td>2025-08-09</td>
                  <td><span className="badge bg-success">Success</span></td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>Updated profile</td>
                  <td>2025-08-08</td>
                  <td><span className="badge bg-info">Info</span></td>
                </tr>
                <tr>
                  <td>Mark Lee</td>
                  <td>Failed login</td>
                  <td>2025-08-07</td>
                  <td><span className="badge bg-danger">Error</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default DashbordCard
