import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import '../styles/app.css';

const Grievance = ({ user }) => {
  const [grievances, setGrievances] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGrievances = async () => {
      try {
        const response = await api.get('/employee/grievances');
        setGrievances(response.data);
      } catch (error) {
        console.error('Error fetching grievances:', error);
        setError('Failed to fetch grievances. Please try again.');
      }
    };
    fetchGrievances();
  }, []);

  return (
    <div className="dashboard">
      <h2>My Grievances</h2>
      {error && <div className="error-message">{error}</div>}
      {grievances.length === 0 ? (
        <p>No grievances found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {grievances.map((grievance) => (
              <tr key={grievance._id}>
                <td>{grievance.title}</td>
                <td>{grievance.description}</td>
                <td>{grievance.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Grievance;