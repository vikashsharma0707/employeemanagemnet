// import React, { useState } from 'react';
// import api from '../utils/api';
// import '../styles/App.css';
// import { Link } from 'react-router-dom';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'employee',
//     designation: '',
//     department: '',
//   });
//   const [image, setImage] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append('name', formData.name);
//     data.append('email', formData.email);
//     data.append('password', formData.password);
//     data.append('role', formData.role);
//     data.append('designation', formData.designation);
//     data.append('department', formData.department);
//     if (image) {
//       data.append('image', image);
//     }

//     try {
//       await api.post('/auth/register', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('Registration successful');
//       setFormData({
//         name: '',
//         email: '',
//         password: '',
//         role: 'employee',
//         designation: '',
//         department: '',
//       });
//       setImage(null);
//     } catch (error) {
//       console.error('Registration failed:', error);
//       if (error.code === 'ERR_NETWORK') {
//         setError('Cannot connect to the server. Please ensure the backend server is running.');
//       } else {
//         setError(error.response?.data?.message || 'Registration failed. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="register-container">
//       {error && <div className="error-message">{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <h2>Register</h2>
//         <input
//           type="text"
//           placeholder="Name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//         />
//         <select
//           value={formData.role}
//           onChange={(e) => setFormData({ ...formData, role: e.target.value })}
//         >
//           <option value="employee">Employee</option>
//           <option value="hr">HR</option>
//           <option value="admin">Admin</option>
//         </select>
//         {formData.role === 'employee' && (
//           <>
//             <input
//               type="text"
//               placeholder="Designation"
//               value={formData.designation}
//               onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
//             />
//             <input
//               type="text"
//               placeholder="Department"
//               value={formData.department}
//               onChange={(e) => setFormData({ ...formData, department: e.target.value })}
//             />
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setImage(e.target.files[0])}
//             />
//           </>
//         )}
//         <button type="submit">Register</button>
//       </form>
//       <p>
//         Already have an account? <Link to="/">Login here</Link>
//       </p>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import api from '../utils/api';
import '../styles/app.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'employee',
    designation: '',
    department: '',
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.password || !formData.role) {
      setError('Name, email, password, and role are required');
      return;
    }

    if (formData.role === 'employee' && (!formData.designation || !formData.department)) {
      setError('Designation and department are required for employees');
      return;
    }

    // Validate image
    if (image) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(image.type)) {
        setError('Only JPEG, PNG, and GIF images are allowed');
        return;
      }
      if (image.size > 5 * 1024 * 1024) { // 5MB limit
        setError('Image size must be less than 5MB');
        return;
      }
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('password', formData.password);
    data.append('role', formData.role);
    data.append('designation', formData.designation);
    data.append('department', formData.department);
    if (image) {
      data.append('image', image);
    }

    try {
      await api.post('/auth/register', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Registration successful');
      setFormData({
        name: '',
        email: '',
        password: '',
        role: 'employee',
        designation: '',
        department: '',
      });
      setImage(null);
    } catch (error) {
      console.error('Registration failed:', error);
      if (error.code === 'ERR_NETWORK') {
        setError('Cannot connect to the server. Please ensure the backend server is running.');
      } else {
        setError(error.response?.data?.message || 'Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="register-container">
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <select
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="employee">Employee</option>
          <option value="hr">HR</option>
          <option value="admin">Admin</option>
        </select>
        {formData.role === 'employee' && (
          <>
            <input
              type="text"
              placeholder="Designation"
              value={formData.designation}
              onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
            />
            <input
              type="text"
              placeholder="Department"
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            />
            <input
              type="file"
              accept="image/jpeg,image/png,image/gif"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </>
        )}
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/">Login here</Link>
      </p>
    </div>
  );
};

export default Register;