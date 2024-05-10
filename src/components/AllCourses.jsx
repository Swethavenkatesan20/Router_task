import React from 'react';
import { Link } from 'react-router-dom';

const AllCourses = () => {
  return (
    <div className="container bg-dark text-white">
      <h1 className="mt-4">All Courses</h1>
      <p>Explore all available courses below:</p>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Course</th>
            <th>Description</th>
            <th>Topics Covered</th>
            <th>Explore</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Full Stack Development</td>
            <td>Learn full stack development with our comprehensive course.</td>
            <td >
              <table style={{ width: '100%' }}>
                <tbody>
                  <tr><td className="text-left" style={{ border: '1px solid white' }}>Frontend Development</td></tr>
                  <tr><td className="text-left" style={{ border: '1px solid white' }}>Backend Development</td></tr>
                  <tr><td className="text-left" style={{ border: '1px solid white' }}>Database Management</td></tr>
                  <tr><td className="text-left" style={{ border: '1px solid white' }}> API Development</td></tr>
                  <tr><td className="text-left" style={{ border: '1px solid white' }}>Deployment and Hosting</td></tr>
                </tbody>
              </table>
            </td>
            <td><Link to="/full-stack" className="btn btn-primary">Explore Full Stack</Link></td>
          </tr>
          <tr>
            <td>Data Science</td>
            <td>Master data science skills with our specialized course.</td>
            <td >
              <table style={{ width: '100%' }}>
                <tbody>
                  <tr><td className="text-left" style={{ border: '1px solid white' }}>Data Analysis</td></tr>
                  <tr><td className="text-left" style={{ border: '1px solid white' }}> Machine Learning</td></tr>
                  <tr><td className="text-left" style={{ border: '1px solid white' }}>Deep Learning</td></tr>
                  <tr><td className="text-left" style={{ border: '1px solid white' }}>Big Data</td></tr>
                  <tr><td className="text-left" style={{ border: '1px solid white' }}>Statistical Analysis</td></tr>
                </tbody>
              </table>
            </td>
            <td><Link to="/data-science" className="btn btn-primary">Explore Data Science</Link></td>
          </tr>
          <tr>
            <td>Cyber Security</td>
            <td>Explore the world of cyber security with our expert instructors.</td>
            <td >
              <table style={{ width: '100%' }}>
                <tbody>
                  <tr><td className="text-left" style={{ border: '1px solid white' }}>Network Security</td></tr>
                  <tr><td className="text-left" style={{ border: '1px solid white' }}>Web Security</td></tr>
                  <tr><td className="text-left" style={{ border: '1px solid white' }}>Encryption Techniques</td></tr>
                  <tr><td className="text-left" style={{ border: '1px solid white' }}>Security Protocols</td></tr>
                  <tr><td className="text-left" style={{ border: '1px solid white' }}>Incident Response</td></tr>
                </tbody>
              </table>
            </td>
            <td><Link to="/cyber-security" className="btn btn-primary">Explore Cyber Security</Link></td>
          </tr>
          <tr>
            <td>Careers</td>
            <td>Explore career opportunities in the tech industry.</td>
            <td >
              <table style={{ width: '100%' }}>
                <tbody >
                  <tr><td className="text-left" style={{ border: '1px solid white' }}>Profile creation</td></tr>
                  <tr><td className="text-left" style={{ border: '1px solid white' }}>Interview Preparation</td></tr>
                  <tr><td className="text-left" style={{ border: '1px solid white' }}> Resume Building</td></tr>
                  
                </tbody>
              </table>
            </td>
            <td><Link to="/career" className="btn btn-primary">Explore Careers</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllCourses;
