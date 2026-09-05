import React from 'react';
import { useState, useEffect } from 'react';

function DevicesAPI() {
    const url = "https://api.restful-api.dev/objects?limit=12";
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">Devices List</h2>

            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-danger text-center">Error: {error}</p>}

            {!loading && !error && (
                <div className="row g-4">
                    {data.map((item) => (
                        <div key={item.id} className="col-12 col-sm-6 col-md-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>

                                 
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DevicesAPI;