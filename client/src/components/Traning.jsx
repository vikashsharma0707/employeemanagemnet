import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import '../styles/App.css';

const Training = ({ user }) => {
  const [trainings, setTrainings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const response = await api.get('/employee/trainings');
        setTrainings(response.data);
      } catch (error) {
        console.error('Error fetching trainings:', error);
        setError('Failed to fetch trainings. Please try again.');
      }
    };
    fetchTrainings();
  }, []);

  return (
    <div className="dashboard">
      <h2>Upcoming Trainings</h2>
      {error && <div className="error-message">{error}</div>}
      {trainings.length === 0 ? (
        <p>No upcoming trainings found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {trainings.map((training) => (
              <tr key={training._id}>
                <td>{training.title}</td>
                <td>{training.description}</td>
                <td>{new Date(training.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Training;