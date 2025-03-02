import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/app.css';

const NavBar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">EMS</div>
      <div className="navbar-links">
        {user ? (
          <>
            <span>Welcome, {user.name} ({user.role})</span>
            {user.role === 'admin' && <button onClick={() => navigate('/admin')}>Admin Dashboard</button>}
            {user.role === 'hr' && <button onClick={() => navigate('/hr')}>HR Dashboard</button>}
            {user.role === 'employee' && <button onClick={() => navigate('/employee')}>Employee Dashboard</button>}
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => navigate('/')}>Login</button>
            <button onClick={() => navigate('/register')}>Register</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;