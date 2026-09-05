import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h1>Select an API to Explore</h1>
      <p>Click any button below to view details:</p>

      {/* Dummy Data APIs Section */}
      <h2>Dummy Data APIs</h2>

      <div className="btn-group">
        <Link to="/quotes">
          <button className="api-btn">Quotes API</button>
        </Link>

        <Link to="/products">
          <button className="api-btn">Products API</button>
        </Link>

        <Link to="/users">
          <button className="api-btn">Users API</button>
        </Link>

        <Link to="/todo">
          <button className="api-btn">Todo API</button>
        </Link>

        <Link to="/devices">
          <button className="api-btn">Devices API</button>
        </Link>
      </div>

      <hr style={{ margin: '40px auto', width: '60%' }} />

      {/* Real-Time APIs Section */}
      <h2>Real-Time APIs</h2>

      <div className="btn-group">
        <Link to="/weather">
          <button className="api-btn weather-btn">Weather API</button>
        </Link>

         <Link to="/crypto">
          <button className="api-btn weather-btn">Crypto Currency API</button>
        </Link>

        <Link to="/iss">
          <button className="api-btn weather-btn">ISS API</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;