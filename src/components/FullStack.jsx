import React from 'react';
import { Link } from 'react-router-dom';

const FullStack = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="mt-4 mb-4">Full Stack Development</h1>

          <div className="card bg-dark text-white mb-4">
            <div className="card-body">
              <h5 className="card-title">Full Stack Development</h5>
              <p className="card-text">Learn full stack development with our comprehensive course.</p>
              <table className="table table-dark">
                <tbody>
                  <tr>
                    <td>Frontend Development</td>
                  </tr>
                  <tr>
                    <td>Backend Development</td>
                  </tr>
                  <tr>
                    <td>Database Management</td>
                  </tr>
                  <tr>
                    <td>API Development</td>
                  </tr>
                  <tr>
                    <td>Deployment and Hosting</td>
                  </tr>
                </tbody>
              </table>
              <Link to="/payment" className="btn btn-primary">Rate</Link>
            </div>
          </div>

          {/* Add other cards for different courses as needed */}

        </div>
      </div>
    </div>
  );
};

export default FullStack;
