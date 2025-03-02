import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import '../styles/App.css';

const AdminDashboard = ({ user }) => {
  const [employees, setEmployees] = useState([]);
  const [newPolicy, setNewPolicy] = useState({ title: '', description: '' });
  const [salaryData, setSalaryData] = useState({
    employeeId: '',
    month: '',
    year: '',
    basicSalary: '',
    bonuses: '',
    deductions: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await api.get('/admin/employees');
        console.log('Employees fetched:', response.data);
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
        setError(error.response?.data?.message || 'Failed to fetch employees. Please try again later.');
      }
    };
    fetchEmployees();
  }, []);

  const handleAddPolicy = async (e) => {
    e.preventDefault();
    try {
      await api.post('/admin/policy', newPolicy);
      alert('Policy added successfully');
      setNewPolicy({ title: '', description: '' });
    } catch (error) {
      console.error('Error adding policy:', error);
      setError(error.response?.data?.message || 'Failed to add policy. Please try again.');
    }
  };

  const handleDeleteEmployee = async (userId) => {
    try {
      await api.delete(`/admin/employee/${userId}`);
      setEmployees(employees.filter((emp) => emp.user._id !== userId));
    } catch (error) {
      console.error('Error deleting employee:', error);
      setError(error.response?.data?.message || 'Failed to delete employee. Please try again.');
    }
  };

  const handleDefineSalary = async (e) => {
    e.preventDefault();
    try {
      await api.post('/admin/salary', salaryData);
      alert('Salary structure defined');
      setSalaryData({ employeeId: '', month: '', year: '', basicSalary: '', bonuses: '', deductions: '' });
    } catch (error) {
      console.error('Error defining salary:', error);
      setError(error.response?.data?.message || 'Failed to define salary structure. Please try again.');
    }
  };

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      
      {error && <div className="error-message">{error}</div>}

      <div>
        <h3>Manage Employees</h3>
        {employees.length === 0 ? (
          <p>No employees found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Designation</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp._id}>
                  <td>{emp.user.name}</td>
                  <td>{emp.user.email}</td>
                  <td>{emp.designation}</td>
                  <td>{emp.salary}</td>
                  <td>
                    <button onClick={() => handleDeleteEmployee(emp.user._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div>
        <h3>Add Policy</h3>
        <form onSubmit={handleAddPolicy}>
          <input
            type="text"
            placeholder="Policy Title"
            value={newPolicy.title}
            onChange={(e) => setNewPolicy({ ...newPolicy, title: e.target.value })}
          />
          <textarea
            placeholder="Policy Description"
            value={newPolicy.description}
            onChange={(e) => setNewPolicy({ ...newPolicy, description: e.target.value })}
          />
          <button type="submit">Add Policy</button>
        </form>
      </div>

      <div>
        <h3>Define Salary Structure</h3>
        {employees.length === 0 ? (
          <p>No employees available to define salary structure.</p>
        ) : (
          <form onSubmit={handleDefineSalary}>
            <select
              value={salaryData.employeeId}
              onChange={(e) => setSalaryData({ ...salaryData, employeeId: e.target.value })}
            >
              <option value="">Select Employee</option>
              {employees.map((emp) => (
                <option key={emp._id} value={emp._id}>
                  {emp.user.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Month (e.g., January)"
              value={salaryData.month}
              onChange={(e) => setSalaryData({ ...salaryData, month: e.target.value })}
            />
            <input
              type="number"
              placeholder="Year (e.g., 2025)"
              value={salaryData.year}
              onChange={(e) => setSalaryData({ ...salaryData, year: e.target.value })}
            />
            <input
              type="number"
              placeholder="Basic Salary"
              value={salaryData.basicSalary}
              onChange={(e) => setSalaryData({ ...salaryData, basicSalary: e.target.value })}
            />
            <input
              type="number"
              placeholder="Bonuses"
              value={salaryData.bonuses}
              onChange={(e) => setSalaryData({ ...salaryData, bonuses: e.target.value })}
            />
            <input
              type="number"
              placeholder="Deductions"
              value={salaryData.deductions}
              onChange={(e) => setSalaryData({ ...salaryData, deductions: e.target.value })}
            />
            <button type="submit">Define Salary</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;