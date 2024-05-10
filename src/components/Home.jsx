import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className="mt-4">Home</h1>
      <p>Welcome to our courses page!</p>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkVSANdBYd4OSxuhvQKNfb8PWstHlbFbyZw&usqp=CAU" className="card-img-top" alt="Full Stack Development" />
            <div className="card-body">
              <h5 className="card-title">Full Stack Development</h5>
              <p className="card-text">Learn full stack development with our comprehensive course.</p>
              <Link to="/full-stack" className="btn btn-primary mt-1">Explore Full Stack</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytZMLvKNFPl0WXSpXmfeM7c_qrlrI6l2Jxw&usqp=CAU" className="card-img-top" alt="Data Science" />
            <div className="card-body">
              <h5 className="card-title">Data Science</h5>
              <p className="card-text">Master data science skills with our specialized course.</p>
              <Link to="/data-science" className="btn btn-primary mt-1">explore data science</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoT8Jvk3z2OovhKzEXgMhnvBtTTiNMS3LqA&usqp=CAU" className="card-img-top" alt="Cyber Security" />
            <div className="card-body">
              <h5 className="card-title">Cyber Security</h5>
              <p className="card-text">Explore the world of cyber security with our expert instructors.</p>
              <Link to="/cyber-security" className="btn btn-primary mt-1">explore cyber security</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
