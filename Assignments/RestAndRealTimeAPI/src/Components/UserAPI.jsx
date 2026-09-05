import React from 'react';
import { useState, useEffect } from 'react';

function UserAPI() {
  const url = "https://dummyjson.com/users?limit=12";
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container my-5">
      <style>{`
        .user-card {
          border: none;
          border-radius: 14px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .user-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.15);
        }

        .user-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #2563eb;
          margin-bottom: 12px;
        }

        .user-email {
          word-break: break-all;
        }
      `}</style>

      <h2 className="text-center fw-bold mb-2">Users List</h2>
      <p className="text-center text-muted mb-4">
        Live user data fetched from dummyjson.com
      </p>

      {loading && (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && <p className="text-danger text-center">Error: {error}</p>}

      {!loading && !error && (
        <div className="row g-4">
          {users.map((user) => (
            <div key={user.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card user-card h-100 text-center">
                <div className="card-body d-flex flex-column align-items-center">
                

                  <h5 className="card-title mb-1">
                    {user.firstName} {user.lastName}
                  </h5>
                  <span className="badge bg-primary mb-2">
                    Age: {user.age}
                  </span>
                  <p className="card-text small mb-1 user-email">
                    <b>Email:</b> {user.email}
                  </p>
                  <p className="card-text small text-muted mb-0">
                    <b>Birth Date:</b> {user.birthDate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserAPI;