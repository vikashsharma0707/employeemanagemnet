// // // // // import React, { useState, useEffect } from 'react';
// // // // // import api from '../utils/api';
// // // // // import '../styles/App.css';

// // // // // const HRDashboard = ({ user }) => {
// // // // //   const [employees, setEmployees] = useState([]);
// // // // //   const [attendance, setAttendance] = useState({ employeeId: '', date: '', status: '' });
// // // // //   const [payroll, setPayroll] = useState({ employeeId: '', month: '', year: '', basicSalary: '', bonuses: '', deductions: '' });
// // // // //   const [training, setTraining] = useState({ title: '', description: '', date: '', employees: [] });
// // // // //   const [task, setTask] = useState({ title: '', description: '', assignedTo: '', dueDate: '' });
// // // // //   const [leaveRequests, setLeaveRequests] = useState([]);
// // // // //   const [salaryData, setSalaryData] = useState({ employeeId: '', salary: '' });
// // // // //   const [error, setError] = useState(null);

// // // // //   useEffect(() => {
// // // // //     const fetchEmployees = async () => {
// // // // //       try {
// // // // //         const response = await api.get('/hr/employees');
// // // // //         console.log('Employees fetched:', response.data);
// // // // //         if (response.data.length === 0) {
// // // // //           setError('No employees found. Please register employees first.');
// // // // //         }
// // // // //         setEmployees(response.data);
// // // // //       } catch (error) {
// // // // //         console.error('Error fetching employees:', error.response ? error.response.data : error.message);
// // // // //         setError('Failed to fetch employees. Please try again later.');
// // // // //       }
// // // // //     };

// // // // //     const fetchLeaveRequests = async () => {
// // // // //       try {
// // // // //         const response = await api.get('/hr/leave-requests');
// // // // //         console.log('Leave requests fetched:', response.data);
// // // // //         setLeaveRequests(response.data);
// // // // //       } catch (error) {
// // // // //         console.error('Error fetching leave requests:', error.response ? error.response.data : error.message);
// // // // //         setError('Failed to fetch leave requests. Please try again later.');
// // // // //       }
// // // // //     };

// // // // //     fetchEmployees();
// // // // //     fetchLeaveRequests();
// // // // //   }, []);

// // // // //   const handleMarkAttendance = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       await api.post('/hr/attendance', attendance);
// // // // //       alert('Attendance marked successfully');
// // // // //       setAttendance({ employeeId: '', date: '', status: '' });
// // // // //     } catch (error) {
// // // // //       console.error('Error marking attendance:', error);
// // // // //       setError('Failed to mark attendance. Please try again.');
// // // // //     }
// // // // //   };

// // // // //   const handleProcessPayroll = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       await api.post('/hr/payroll', payroll);
// // // // //       alert('Payroll processed successfully');
// // // // //       setPayroll({ employeeId: '', month: '', year: '', basicSalary: '', bonuses: '', deductions: '' });
// // // // //     } catch (error) {
// // // // //       console.error('Error processing payroll:', error);
// // // // //       setError('Failed to process payroll. Please try again.');
// // // // //     }
// // // // //   };

// // // // //   const handleScheduleTraining = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       await api.post('/hr/training', training);
// // // // //       alert('Training scheduled successfully');
// // // // //       setTraining({ title: '', description: '', date: '', employees: [] });
// // // // //     } catch (error) {
// // // // //       console.error('Error scheduling training:', error);
// // // // //       setError('Failed to schedule training. Please try again.');
// // // // //     }
// // // // //   };

// // // // //   const handleAssignTask = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       await api.post('/hr/task', task);
// // // // //       alert('Task assigned successfully');
// // // // //       setTask({ title: '', description: '', assignedTo: '', dueDate: '' });
// // // // //     } catch (error) {
// // // // //       console.error('Error assigning task:', error);
// // // // //       setError('Failed to assign task. Please try again.');
// // // // //     }
// // // // //   };

// // // // //   const handleSetSalary = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       await api.put('/hr/set-salary', salaryData);
// // // // //       alert('Salary set successfully');
// // // // //       setEmployees(employees.map((emp) =>
// // // // //         emp._id === salaryData.employeeId ? { ...emp, salary: salaryData.salary } : emp
// // // // //       ));
// // // // //       setSalaryData({ employeeId: '', salary: '' });
// // // // //     } catch (error) {
// // // // //       console.error('Error setting salary:', error);
// // // // //       setError('Failed to set salary. Please try again.');
// // // // //     }
// // // // //   };

// // // // //   const handleLeaveAction = async (attendanceId, status) => {
// // // // //     try {
// // // // //       await api.put('/hr/leave', { attendanceId, status });
// // // // //       alert(`Leave ${status} successfully`);
// // // // //       setLeaveRequests(leaveRequests.map((req) =>
// // // // //         req._id === attendanceId ? { ...req, status } : req
// // // // //       ));
// // // // //     } catch (error) {
// // // // //       console.error(`Error ${status} leave:`, error);
// // // // //       setError(`Failed to ${status} leave. Please try again.`);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="dashboard">
// // // // //       <h2>HR Dashboard</h2>

// // // // //       {error && <div className="error-message">{error}</div>}

// // // // //       <div>
// // // // //         <h3>Employee List</h3>
// // // // //         {employees.length === 0 ? (
// // // // //           <p>No employees found.</p>
// // // // //         ) : (
// // // // //           <table>
// // // // //             <thead>
// // // // //               <tr>
// // // // //                 <th>Image</th>
// // // // //                 <th>Name</th>
// // // // //                 <th>Email</th>
// // // // //                 <th>Designation</th>
// // // // //                 <th>Salary</th>
// // // // //                 <th>Department</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {employees.map((emp) => (
// // // // //                 <tr key={emp._id}>
// // // // //                   <td>
// // // // //                     {emp.image ? (
// // // // //                       <img src={`http://localhost:5000/${emp.image}`} alt={emp.user.name} className="employee-image" />
// // // // //                     ) : (
// // // // //                       'No Image'
// // // // //                     )}
// // // // //                   </td>
// // // // //                   <td>{emp.user.name}</td>
// // // // //                   <td>{emp.user.email}</td>
// // // // //                   <td>{emp.designation}</td>
// // // // //                   <td>{emp.salary}</td>
// // // // //                   <td>{emp.department}</td>
// // // // //                 </tr>
// // // // //               ))}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         )}
// // // // //       </div>

// // // // //       <div>
// // // // //         <h3>Set Employee Salary</h3>
// // // // //         {employees.length === 0 ? (
// // // // //           <p>No employees available to set salary.</p>
// // // // //         ) : (
// // // // //           <form onSubmit={handleSetSalary}>
// // // // //             <select
// // // // //               value={salaryData.employeeId}
// // // // //               onChange={(e) => setSalaryData({ ...salaryData, employeeId: e.target.value })}
// // // // //             >
// // // // //               <option value="">Select Employee</option>
// // // // //               {employees.map((emp) => (
// // // // //                 <option key={emp._id} value={emp._id}>
// // // // //                   {emp.user.name}
// // // // //                 </option>
// // // // //               ))}
// // // // //             </select>
// // // // //             <input
// // // // //               type="number"
// // // // //               placeholder="Salary"
// // // // //               value={salaryData.salary}
// // // // //               onChange={(e) => setSalaryData({ ...salaryData, salary: e.target.value })}
// // // // //             />
// // // // //             <button type="submit">Set Salary</button>
// // // // //           </form>
// // // // //         )}
// // // // //       </div>

// // // // //       <div>
// // // // //         <h3>Mark Attendance</h3>
// // // // //         {employees.length === 0 ? (
// // // // //           <p>No employees available to mark attendance.</p>
// // // // //         ) : (
// // // // //           <form onSubmit={handleMarkAttendance}>
// // // // //             <select
// // // // //               value={attendance.employeeId}
// // // // //               onChange={(e) => setAttendance({ ...attendance, employeeId: e.target.value })}
// // // // //             >
// // // // //               <option value="">Select Employee</option>
// // // // //               {employees.map((emp) => (
// // // // //                 <option key={emp._id} value={emp._id}>
// // // // //                   {emp.user.name}
// // // // //                 </option>
// // // // //               ))}
// // // // //             </select>
// // // // //             <input
// // // // //               type="date"
// // // // //               value={attendance.date}
// // // // //               onChange={(e) => setAttendance({ ...attendance, date: e.target.value })}
// // // // //             />
// // // // //             <select
// // // // //               value={attendance.status}
// // // // //               onChange={(e) => setAttendance({ ...attendance, status: e.target.value })}
// // // // //             >
// // // // //               <option value="">Select Status</option>
// // // // //               <option value="present">Present</option>
// // // // //               <option value="absent">Absent</option>
// // // // //               <option value="leave">Leave</option>
// // // // //             </select>
// // // // //             <button type="submit">Mark Attendance</button>
// // // // //           </form>
// // // // //         )}
// // // // //       </div>

// // // // //       <div>
// // // // //         <h3>Process Payroll</h3>
// // // // //         {employees.length === 0 ? (
// // // // //           <p>No employees available to process payroll.</p>
// // // // //         ) : (
// // // // //           <form onSubmit={handleProcessPayroll}>
// // // // //             <select
// // // // //               value={payroll.employeeId}
// // // // //               onChange={(e) => setPayroll({ ...payroll, employeeId: e.target.value })}
// // // // //             >
// // // // //               <option value="">Select Employee</option>
// // // // //               {employees.map((emp) => (
// // // // //                 <option key={emp._id} value={emp._id}>
// // // // //                   {emp.user.name}
// // // // //                 </option>
// // // // //               ))}
// // // // //             </select>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Month (e.g., January)"
// // // // //               value={payroll.month}
// // // // //               onChange={(e) => setPayroll({ ...payroll, month: e.target.value })}
// // // // //             />
// // // // //             <input
// // // // //               type="number"
// // // // //               placeholder="Year (e.g., 2025)"
// // // // //               value={payroll.year}
// // // // //               onChange={(e) => setPayroll({ ...payroll, year: e.target.value })}
// // // // //             />
// // // // //             <input
// // // // //               type="number"
// // // // //               placeholder="Basic Salary"
// // // // //               value={payroll.basicSalary}
// // // // //               onChange={(e) => setPayroll({ ...payroll, basicSalary: e.target.value })}
// // // // //             />
// // // // //             <input
// // // // //               type="number"
// // // // //               placeholder="Bonuses"
// // // // //               value={payroll.bonuses}
// // // // //               onChange={(e) => setPayroll({ ...payroll, bonuses: e.target.value })}
// // // // //             />
// // // // //             <input
// // // // //               type="number"
// // // // //               placeholder="Deductions"
// // // // //               value={payroll.deductions}
// // // // //               onChange={(e) => setPayroll({ ...payroll, deductions: e.target.value })}
// // // // //             />
// // // // //             <button type="submit">Process Payroll</button>
// // // // //           </form>
// // // // //         )}
// // // // //       </div>

// // // // //       <div>
// // // // //         <h3>Schedule Training</h3>
// // // // //         {employees.length === 0 ? (
// // // // //           <p>No employees available to schedule training.</p>
// // // // //         ) : (
// // // // //           <form onSubmit={handleScheduleTraining}>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Training Title"
// // // // //               value={training.title}
// // // // //               onChange={(e) => setTraining({ ...training, title: e.target.value })}
// // // // //             />
// // // // //             <textarea
// // // // //               placeholder="Description"
// // // // //               value={training.description}
// // // // //               onChange={(e) => setTraining({ ...training, description: e.target.value })}
// // // // //             />
// // // // //             <input
// // // // //               type="date"
// // // // //               value={training.date}
// // // // //               onChange={(e) => setTraining({ ...training, date: e.target.value })}
// // // // //             />
// // // // //             <select
// // // // //               multiple
// // // // //               value={training.employees}
// // // // //               onChange={(e) =>
// // // // //                 setTraining({
// // // // //                   ...training,
// // // // //                   employees: Array.from(e.target.selectedOptions, (option) => option.value),
// // // // //                 })
// // // // //               }
// // // // //             >
// // // // //               {employees.map((emp) => (
// // // // //                 <option key={emp._id} value={emp._id}>
// // // // //                   {emp.user.name}
// // // // //                 </option>
// // // // //               ))}
// // // // //             </select>
// // // // //             <button type="submit">Schedule Training</button>
// // // // //           </form>
// // // // //         )}
// // // // //       </div>

// // // // //       <div>
// // // // //         <h3>Assign Task</h3>
// // // // //         {employees.length === 0 ? (
// // // // //           <p>No employees available to assign tasks.</p>
// // // // //         ) : (
// // // // //           <form onSubmit={handleAssignTask}>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Task Title"
// // // // //               value={task.title}
// // // // //               onChange={(e) => setTask({ ...task, title: e.target.value })}
// // // // //             />
// // // // //             <textarea
// // // // //               placeholder="Description"
// // // // //               value={task.description}
// // // // //               onChange={(e) => setTask({ ...task, description: e.target.value })}
// // // // //             />
// // // // //             <select
// // // // //               value={task.assignedTo}
// // // // //               onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
// // // // //             >
// // // // //               <option value="">Select Employee</option>
// // // // //               {employees.map((emp) => (
// // // // //                 <option key={emp._id} value={emp._id}>
// // // // //                   {emp.user.name}
// // // // //                 </option>
// // // // //               ))}
// // // // //             </select>
// // // // //             <input
// // // // //               type="date"
// // // // //               value={task.dueDate}
// // // // //               onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
// // // // //             />
// // // // //             <button type="submit">Assign Task</button>
// // // // //           </form>
// // // // //         )}
// // // // //       </div>

// // // // //       <div>
// // // // //         <h3>Leave Requests</h3>
// // // // //         {leaveRequests.length === 0 ? (
// // // // //           <p>No leave requests found.</p>
// // // // //         ) : (
// // // // //           <table>
// // // // //             <thead>
// // // // //               <tr>
// // // // //                 <th>Employee</th>
// // // // //                 <th>Date</th>
// // // // //                 <th>Status</th>
// // // // //                 <th>Actions</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {leaveRequests.map((req) => (
// // // // //                 <tr key={req._id}>
// // // // //                   <td>{req.employee && req.employee.user ? req.employee.user.name : 'Unknown'}</td>
// // // // //                   <td>{new Date(req.date).toLocaleDateString()}</td>
// // // // //                   <td>{req.status}</td>
// // // // //                   <td>
// // // // //                     {req.status === 'leave' && (
// // // // //                       <>
// // // // //                         <button onClick={() => handleLeaveAction(req._id, 'approved')}>
// // // // //                           Approve
// // // // //                         </button>
// // // // //                         <button onClick={() => handleLeaveAction(req._id, 'rejected')}>
// // // // //                           Reject
// // // // //                         </button>
// // // // //                       </>
// // // // //                     )}
// // // // //                   </td>
// // // // //                 </tr>
// // // // //               ))}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default HRDashboard;


// // // // import React, { useState, useEffect } from 'react';
// // // // import api from '../utils/api';
// // // // import '../styles/App.css';

// // // // const HRDashboard = ({ user }) => {
// // // //   const [employees, setEmployees] = useState([]);
// // // //   const [attendance, setAttendance] = useState({ employeeId: '', date: '', status: '' });
// // // //   const [payroll, setPayroll] = useState({ employeeId: '', month: '', year: '', basicSalary: '', bonuses: '', deductions: '' });
// // // //   const [training, setTraining] = useState({ title: '', description: '', date: '', employees: [] });
// // // //   const [task, setTask] = useState({ title: '', description: '', assignedTo: '', dueDate: '' });
// // // //   const [leaveRequests, setLeaveRequests] = useState([]);
// // // //   const [salaryData, setSalaryData] = useState({ employeeId: '', salary: '' });
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     const fetchEmployees = async () => {
// // // //       try {
// // // //         const response = await api.get('/hr/employees');
// // // //         console.log('Employees fetched:', response.data);
// // // //         if (response.data.length === 0) {
// // // //           setError('No employees found. Please register employees first.');
// // // //         }
// // // //         setEmployees(response.data);
// // // //       } catch (error) {
// // // //         console.error('Error fetching employees:', error.response ? error.response.data : error.message);
// // // //         setError('Failed to fetch employees. Please try again later.');
// // // //       }
// // // //     };

// // // //     const fetchLeaveRequests = async () => {
// // // //       try {
// // // //         const response = await api.get('/hr/leave-requests');
// // // //         console.log('Leave requests fetched:', response.data);
// // // //         setLeaveRequests(response.data);
// // // //       } catch (error) {
// // // //         console.error('Error fetching leave requests:', error.response ? error.response.data : error.message);
// // // //         setError('Failed to fetch leave requests. Please try again later.');
// // // //       }
// // // //     };

// // // //     fetchEmployees();
// // // //     fetchLeaveRequests();
// // // //   }, []);

// // // //   const handleMarkAttendance = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       await api.post('/hr/attendance', attendance);
// // // //       alert('Attendance marked successfully');
// // // //       setAttendance({ employeeId: '', date: '', status: '' });
// // // //     } catch (error) {
// // // //       console.error('Error marking attendance:', error);
// // // //       setError('Failed to mark attendance. Please try again.');
// // // //     }
// // // //   };

// // // //   const handleProcessPayroll = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       await api.post('/hr/payroll', payroll);
// // // //       alert('Payroll processed successfully');
// // // //       setPayroll({ employeeId: '', month: '', year: '', basicSalary: '', bonuses: '', deductions: '' });
// // // //     } catch (error) {
// // // //       console.error('Error processing payroll:', error);
// // // //       setError('Failed to process payroll. Please try again.');
// // // //     }
// // // //   };

// // // //   const handleScheduleTraining = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       await api.post('/hr/training', training);
// // // //       alert('Training scheduled successfully');
// // // //       setTraining({ title: '', description: '', date: '', employees: [] });
// // // //     } catch (error) {
// // // //       console.error('Error scheduling training:', error);
// // // //       setError('Failed to schedule training. Please try again.');
// // // //     }
// // // //   };

// // // //   const handleAssignTask = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       await api.post('/hr/task', task);
// // // //       alert('Task assigned successfully');
// // // //       setTask({ title: '', description: '', assignedTo: '', dueDate: '' });
// // // //     } catch (error) {
// // // //       console.error('Error assigning task:', error);
// // // //       setError('Failed to assign task. Please try again.');
// // // //     }
// // // //   };

// // // //   const handleSetSalary = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       await api.put('/hr/set-salary', salaryData);
// // // //       alert('Salary set successfully');
// // // //       setEmployees(employees.map((emp) =>
// // // //         emp._id === salaryData.employeeId ? { ...emp, salary: salaryData.salary } : emp
// // // //       ));
// // // //       setSalaryData({ employeeId: '', salary: '' });
// // // //     } catch (error) {
// // // //       console.error('Error setting salary:', error);
// // // //       setError('Failed to set salary. Please try again.');
// // // //     }
// // // //   };

// // // //   const handleLeaveAction = async (attendanceId, status) => {
// // // //     try {
// // // //       await api.put('/hr/leave', { attendanceId, status });
// // // //       alert(`Leave ${status} successfully`);
// // // //       setLeaveRequests(leaveRequests.map((req) =>
// // // //         req._id === attendanceId ? { ...req, status } : req
// // // //       ));
// // // //     } catch (error) {
// // // //       console.error(`Error ${status} leave:`, error);
// // // //       setError(`Failed to ${status} leave. Please try again.`);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="dashboard">
// // // //       <h2>HR Dashboard</h2>

// // // //       {error && <div className="error-message">{error}</div>}

// // // //       <div>
// // // //         <h3>Employee List</h3>
// // // //         {employees.length === 0 ? (
// // // //           <p>No employees found.</p>
// // // //         ) : (
// // // //           <table>
// // // //             <thead>
// // // //               <tr>
// // // //                 <th>Image</th>
// // // //                 <th>Name</th>
// // // //                 <th>Email</th>
// // // //                 <th>Designation</th>
// // // //                 <th>Salary</th>
// // // //                 <th>Department</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {employees.map((emp) => (
// // // //                 <tr key={emp._id}>
// // // //                   <td>
// // // //                     {emp.image ? (
// // // //                       <img
// // // //                         src={`http://localhost:5000/${emp.image}`}
// // // //                         alt={emp.user?.name || 'Employee'}
// // // //                         className="employee-image"
// // // //                         onError={(e) => { e.target.src = 'https://via.placeholder.com/50'; }} // Fallback image
// // // //                       />
// // // //                     ) : (
// // // //                       'No Image'
// // // //                     )}
// // // //                   </td>
// // // //                   <td>{emp.user?.name || 'Unknown'}</td>
// // // //                   <td>{emp.user?.email || 'Unknown'}</td>
// // // //                   <td>{emp.designation}</td>
// // // //                   <td>{emp.salary}</td>
// // // //                   <td>{emp.department}</td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         )}
// // // //       </div>

// // // //       <div>
// // // //         <h3>Set Employee Salary</h3>
// // // //         {employees.length === 0 ? (
// // // //           <p>No employees available to set salary.</p>
// // // //         ) : (
// // // //           <form onSubmit={handleSetSalary}>
// // // //             <select
// // // //               value={salaryData.employeeId}
// // // //               onChange={(e) => setSalaryData({ ...salaryData, employeeId: e.target.value })}
// // // //             >
// // // //               <option value="">Select Employee</option>
// // // //               {employees.map((emp) => (
// // // //                 <option key={emp._id} value={emp._id}>
// // // //                   {emp.user?.name || 'Unknown'}
// // // //                 </option>
// // // //               ))}
// // // //             </select>
// // // //             <input
// // // //               type="number"
// // // //               placeholder="Salary"
// // // //               value={salaryData.salary}
// // // //               onChange={(e) => setSalaryData({ ...salaryData, salary: e.target.value })}
// // // //             />
// // // //             <button type="submit">Set Salary</button>
// // // //           </form>
// // // //         )}
// // // //       </div>

// // // //       <div>
// // // //         <h3>Mark Attendance</h3>
// // // //         {employees.length === 0 ? (
// // // //           <p>No employees available to mark attendance.</p>
// // // //         ) : (
// // // //           <form onSubmit={handleMarkAttendance}>
// // // //             <select
// // // //               value={attendance.employeeId}
// // // //               onChange={(e) => setAttendance({ ...attendance, employeeId: e.target.value })}
// // // //             >
// // // //               <option value="">Select Employee</option>
// // // //               {employees.map((emp) => (
// // // //                 <option key={emp._id} value={emp._id}>
// // // //                   {emp.user?.name || 'Unknown'}
// // // //                 </option>
// // // //               ))}
// // // //             </select>
// // // //             <input
// // // //               type="date"
// // // //               value={attendance.date}
// // // //               onChange={(e) => setAttendance({ ...attendance, date: e.target.value })}
// // // //             />
// // // //             <select
// // // //               value={attendance.status}
// // // //               onChange={(e) => setAttendance({ ...attendance, status: e.target.value })}
// // // //             >
// // // //               <option value="">Select Status</option>
// // // //               <option value="present">Present</option>
// // // //               <option value="absent">Absent</option>
// // // //               <option value="leave">Leave</option>
// // // //             </select>
// // // //             <button type="submit">Mark Attendance</button>
// // // //           </form>
// // // //         )}
// // // //       </div>

// // // //       <div>
// // // //         <h3>Process Payroll</h3>
// // // //         {employees.length === 0 ? (
// // // //           <p>No employees available to process payroll.</p>
// // // //         ) : (
// // // //           <form onSubmit={handleProcessPayroll}>
// // // //             <select
// // // //               value={payroll.employeeId}
// // // //               onChange={(e) => setPayroll({ ...payroll, employeeId: e.target.value })}
// // // //             >
// // // //               <option value="">Select Employee</option>
// // // //               {employees.map((emp) => (
// // // //                 <option key={emp._id} value={emp._id}>
// // // //                   {emp.user?.name || 'Unknown'}
// // // //                 </option>
// // // //               ))}
// // // //             </select>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Month (e.g., January)"
// // // //               value={payroll.month}
// // // //               onChange={(e) => setPayroll({ ...payroll, month: e.target.value })}
// // // //             />
// // // //             <input
// // // //               type="number"
// // // //               placeholder="Year (e.g., 2025)"
// // // //               value={payroll.year}
// // // //               onChange={(e) => setPayroll({ ...payroll, year: e.target.value })}
// // // //             />
// // // //             <input
// // // //               type="number"
// // // //               placeholder="Basic Salary"
// // // //               value={payroll.basicSalary}
// // // //               onChange={(e) => setPayroll({ ...payroll, basicSalary: e.target.value })}
// // // //             />
// // // //             <input
// // // //               type="number"
// // // //               placeholder="Bonuses"
// // // //               value={payroll.bonuses}
// // // //               onChange={(e) => setPayroll({ ...payroll, bonuses: e.target.value })}
// // // //             />
// // // //             <input
// // // //               type="number"
// // // //               placeholder="Deductions"
// // // //               value={payroll.deductions}
// // // //               onChange={(e) => setPayroll({ ...payroll, deductions: e.target.value })}
// // // //             />
// // // //             <button type="submit">Process Payroll</button>
// // // //           </form>
// // // //         )}
// // // //       </div>

// // // //       <div>
// // // //         <h3>Schedule Training</h3>
// // // //         {employees.length === 0 ? (
// // // //           <p>No employees available to schedule training.</p>
// // // //         ) : (
// // // //           <form onSubmit={handleScheduleTraining}>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Training Title"
// // // //               value={training.title}
// // // //               onChange={(e) => setTraining({ ...training, title: e.target.value })}
// // // //             />
// // // //             <textarea
// // // //               placeholder="Description"
// // // //               value={training.description}
// // // //               onChange={(e) => setTraining({ ...training, description: e.target.value })}
// // // //             />
// // // //             <input
// // // //               type="date"
// // // //               value={training.date}
// // // //               onChange={(e) => setTraining({ ...training, date: e.target.value })}
// // // //             />
// // // //             <select
// // // //               multiple
// // // //               value={training.employees}
// // // //               onChange={(e) =>
// // // //                 setTraining({
// // // //                   ...training,
// // // //                   employees: Array.from(e.target.selectedOptions, (option) => option.value),
// // // //                 })
// // // //               }
// // // //             >
// // // //               {employees.map((emp) => (
// // // //                 <option key={emp._id} value={emp._id}>
// // // //                   {emp.user?.name || 'Unknown'}
// // // //                 </option>
// // // //               ))}
// // // //             </select>
// // // //             <button type="submit">Schedule Training</button>
// // // //           </form>
// // // //         )}
// // // //       </div>

// // // //       <div>
// // // //         <h3>Assign Task</h3>
// // // //         {employees.length === 0 ? (
// // // //           <p>No employees available to assign tasks.</p>
// // // //         ) : (
// // // //           <form onSubmit={handleAssignTask}>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Task Title"
// // // //               value={task.title}
// // // //               onChange={(e) => setTask({ ...task, title: e.target.value })}
// // // //             />
// // // //             <textarea
// // // //               placeholder="Description"
// // // //               value={task.description}
// // // //               onChange={(e) => setTask({ ...task, description: e.target.value })}
// // // //             />
// // // //             <select
// // // //               value={task.assignedTo}
// // // //               onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
// // // //             >
// // // //               <option value="">Select Employee</option>
// // // //               {employees.map((emp) => (
// // // //                 <option key={emp._id} value={emp._id}>
// // // //                   {emp.user?.name || 'Unknown'}
// // // //                 </option>
// // // //               ))}
// // // //             </select>
// // // //             <input
// // // //               type="date"
// // // //               value={task.dueDate}
// // // //               onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
// // // //             />
// // // //             <button type="submit">Assign Task</button>
// // // //           </form>
// // // //         )}
// // // //       </div>

// // // //       <div>
// // // //         <h3>Leave Requests</h3>
// // // //         {leaveRequests.length === 0 ? (
// // // //           <p>No leave requests found.</p>
// // // //         ) : (
// // // //           <table>
// // // //             <thead>
// // // //               <tr>
// // // //                 <th>Employee</th>
// // // //                 <th>Date</th>
// // // //                 <th>Status</th>
// // // //                 <th>Actions</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {leaveRequests.map((req) => (
// // // //                 <tr key={req._id}>
// // // //                   <td>{req.employee && req.employee.user ? req.employee.user.name : 'Unknown'}</td>
// // // //                   <td>{new Date(req.date).toLocaleDateString()}</td>
// // // //                   <td>{req.status}</td>
// // // //                   <td>
// // // //                     {req.status === 'leave' && (
// // // //                       <>
// // // //                         <button onClick={() => handleLeaveAction(req._id, 'approved')}>
// // // //                           Approve
// // // //                         </button>
// // // //                         <button onClick={() => handleLeaveAction(req._id, 'rejected')}>
// // // //                           Reject
// // // //                         </button>
// // // //                       </>
// // // //                     )}
// // // //                   </td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default HRDashboard;



// // // import React, { useState, useEffect } from 'react';
// // // import api from '../utils/api';
// // // import '../styles/App.css';

// // // const HRDashboard = ({ user }) => {
// // //   const [employees, setEmployees] = useState([]);
// // //   const [attendance, setAttendance] = useState({ employeeId: '', date: '', status: '' });
// // //   const [payroll, setPayroll] = useState({ employeeId: '', month: '', year: '', basicSalary: '', bonuses: '', deductions: '' });
// // //   const [training, setTraining] = useState({ title: '', description: '', date: '', employees: [] });
// // //   const [task, setTask] = useState({ title: '', description: '', assignedTo: '', dueDate: '' });
// // //   const [leaveRequests, setLeaveRequests] = useState([]);
// // //   const [salaryData, setSalaryData] = useState({ employeeId: '', salary: '' });
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchEmployees = async () => {
// // //       try {
// // //         const response = await api.get('/hr/employees');
// // //         console.log('Employees fetched:', response.data);
// // //         if (response.data.length === 0) {
// // //           setError('No employees found. Please register employees first.');
// // //         }
// // //         setEmployees(response.data);
// // //       } catch (error) {
// // //         console.error('Error fetching employees:', error.response ? error.response.data : error.message);
// // //         setError('Failed to fetch employees. Please try again later.');
// // //       }
// // //     };

// // //     const fetchLeaveRequests = async () => {
// // //       try {
// // //         const response = await api.get('/hr/leave-requests');
// // //         console.log('Leave requests fetched:', response.data);
// // //         setLeaveRequests(response.data);
// // //       } catch (error) {
// // //         console.error('Error fetching leave requests:', error.response ? error.response.data : error.message);
// // //         setError('Failed to fetch leave requests. Please try again later.');
// // //       }
// // //     };

// // //     fetchEmployees();
// // //     fetchLeaveRequests();
// // //   }, []);

// // //   const handleMarkAttendance = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await api.post('/hr/attendance', attendance);
// // //       alert('Attendance marked successfully');
// // //       setAttendance({ employeeId: '', date: '', status: '' });
// // //     } catch (error) {
// // //       console.error('Error marking attendance:', error);
// // //       setError('Failed to mark attendance. Please try again.');
// // //     }
// // //   };

// // //   const handleProcessPayroll = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await api.post('/hr/payroll', payroll);
// // //       alert('Payroll processed successfully');
// // //       setPayroll({ employeeId: '', month: '', year: '', basicSalary: '', bonuses: '', deductions: '' });
// // //     } catch (error) {
// // //       console.error('Error processing payroll:', error);
// // //       setError('Failed to process payroll. Please try again.');
// // //     }
// // //   };

// // //   const handleScheduleTraining = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await api.post('/hr/training', training);
// // //       alert('Training scheduled successfully');
// // //       setTraining({ title: '', description: '', date: '', employees: [] });
// // //     } catch (error) {
// // //       console.error('Error scheduling training:', error);
// // //       setError('Failed to schedule training. Please try again.');
// // //     }
// // //   };

// // //   const handleAssignTask = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await api.post('/hr/task', task);
// // //       alert('Task assigned successfully');
// // //       setTask({ title: '', description: '', assignedTo: '', dueDate: '' });
// // //     } catch (error) {
// // //       console.error('Error assigning task:', error);
// // //       setError('Failed to assign task. Please try again.');
// // //     }
// // //   };

// // //   const handleSetSalary = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await api.put('/hr/set-salary', salaryData);
// // //       alert('Salary set successfully');
// // //       setEmployees(employees.map((emp) =>
// // //         emp._id === salaryData.employeeId ? { ...emp, salary: salaryData.salary } : emp
// // //       ));
// // //       setSalaryData({ employeeId: '', salary: '' });
// // //     } catch (error) {
// // //       console.error('Error setting salary:', error);
// // //       setError('Failed to set salary. Please try again.');
// // //     }
// // //   };

// // //   const handleLeaveAction = async (attendanceId, status) => {
// // //     try {
// // //       await api.put('/hr/leave', { attendanceId, status });
// // //       alert(`Leave ${status} successfully`);
// // //       setLeaveRequests(leaveRequests.map((req) =>
// // //         req._id === attendanceId ? { ...req, status } : req
// // //       ));
// // //     } catch (error) {
// // //       console.error(`Error ${status} leave:`, error);
// // //       setError(`Failed to ${status} leave. Please try again.`);
// // //     }
// // //   };

// // //   return (
// // //     <div className="dashboard">
// // //       <h2>HR Dashboard</h2>

// // //       {error && <div className="error-message">{error}</div>}

// // //       <div>
// // //         <h3>Employee List</h3>
// // //         {employees.length === 0 ? (
// // //           <p>No employees found.</p>
// // //         ) : (
// // //           <table>
// // //             <thead>
// // //               <tr>
// // //                 <th>Image</th>
// // //                 <th>Name</th>
// // //                 <th>Email</th>
// // //                 <th>Designation</th>
// // //                 <th>Salary</th>
// // //                 <th>Department</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {employees.map((emp) => (
// // //                 <tr key={emp._id}>
// // //                   <td>
// // //                     {emp.image ? (
// // //                       <img
// // //                         src={`http://localhost:5000/${emp.image}`}
// // //                         alt={emp.user?.name || 'Employee'}
// // //                         className="employee-image"
// // //                         onError={(e) => { e.target.src = 'https://via.placeholder.com/50'; }}
// // //                       />
// // //                     ) : (
// // //                       'No Image'
// // //                     )}
// // //                   </td>
// // //                   <td>{emp.user?.name || 'Unknown'}</td>
// // //                   <td>{emp.user?.email || 'Unknown'}</td>
// // //                   <td>{emp.designation}</td>
// // //                   <td>{emp.salary}</td>
// // //                   <td>{emp.department}</td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         )}
// // //       </div>

// // //       <div>
// // //         <h3>Set Employee Salary</h3>
// // //         {employees.length === 0 ? (
// // //           <p>No employees available to set salary.</p>
// // //         ) : (
// // //           <form onSubmit={handleSetSalary}>
// // //             <select
// // //               value={salaryData.employeeId}
// // //               onChange={(e) => setSalaryData({ ...salaryData, employeeId: e.target.value })}
// // //             >
// // //               <option value="">Select Employee</option>
// // //               {employees.map((emp) => (
// // //                 <option key={emp._id} value={emp._id}>
// // //                   {emp.user?.name || 'Unknown'}
// // //                 </option>
// // //               ))}
// // //             </select>
// // //             <input
// // //               type="number"
// // //               placeholder="Salary"
// // //               value={salaryData.salary}
// // //               onChange={(e) => setSalaryData({ ...salaryData, salary: e.target.value })}
// // //             />
// // //             <button type="submit">Set Salary</button>
// // //           </form>
// // //         )}
// // //       </div>

// // //       <div>
// // //         <h3>Mark Attendance</h3>
// // //         {employees.length === 0 ? (
// // //           <p>No employees available to mark attendance.</p>
// // //         ) : (
// // //           <form onSubmit={handleMarkAttendance}>
// // //             <select
// // //               value={attendance.employeeId}
// // //               onChange={(e) => setAttendance({ ...attendance, employeeId: e.target.value })}
// // //             >
// // //               <option value="">Select Employee</option>
// // //               {employees.map((emp) => (
// // //                 <option key={emp._id} value={emp._id}>
// // //                   {emp.user?.name || 'Unknown'}
// // //                 </option>
// // //               ))}
// // //             </select>
// // //             <input
// // //               type="date"
// // //               value={attendance.date}
// // //               onChange={(e) => setAttendance({ ...attendance, date: e.target.value })}
// // //             />
// // //             <select
// // //               value={attendance.status}
// // //               onChange={(e) => setAttendance({ ...attendance, status: e.target.value })}
// // //             >
// // //               <option value="">Select Status</option>
// // //               <option value="present">Present</option>
// // //               <option value="absent">Absent</option>
// // //               <option value="leave">Leave</option>
// // //             </select>
// // //             <button type="submit">Mark Attendance</button>
// // //           </form>
// // //         )}
// // //       </div>

// // //       <div>
// // //         <h3>Process Payroll</h3>
// // //         {employees.length === 0 ? (
// // //           <p>No employees available to process payroll.</p>
// // //         ) : (
// // //           <form onSubmit={handleProcessPayroll}>
// // //             <select
// // //               value={payroll.employeeId}
// // //               onChange={(e) => setPayroll({ ...payroll, employeeId: e.target.value })}
// // //             >
// // //               <option value="">Select Employee</option>
// // //               {employees.map((emp) => (
// // //                 <option key={emp._id} value={emp._id}>
// // //                   {emp.user?.name || 'Unknown'}
// // //                 </option>
// // //               ))}
// // //             </select>
// // //             <input
// // //               type="text"
// // //               placeholder="Month (e.g., January)"
// // //               value={payroll.month}
// // //               onChange={(e) => setPayroll({ ...payroll, month: e.target.value })}
// // //             />
// // //             <input
// // //               type="number"
// // //               placeholder="Year (e.g., 2025)"
// // //               value={payroll.year}
// // //               onChange={(e) => setPayroll({ ...payroll, year: e.target.value })}
// // //             />
// // //             <input
// // //               type="number"
// // //               placeholder="Basic Salary"
// // //               value={payroll.basicSalary}
// // //               onChange={(e) => setPayroll({ ...payroll, basicSalary: e.target.value })}
// // //             />
// // //             <input
// // //               type="number"
// // //               placeholder="Bonuses"
// // //               value={payroll.bonuses}
// // //               onChange={(e) => setPayroll({ ...payroll, bonuses: e.target.value })}
// // //             />
// // //             <input
// // //               type="number"
// // //               placeholder="Deductions"
// // //               value={payroll.deductions}
// // //               onChange={(e) => setPayroll({ ...payroll, deductions: e.target.value })}
// // //             />
// // //             <button type="submit">Process Payroll</button>
// // //           </form>
// // //         )}
// // //       </div>

// // //       <div>
// // //         <h3>Schedule Training</h3>
// // //         {employees.length === 0 ? (
// // //           <p>No employees available to schedule training.</p>
// // //         ) : (
// // //           <form onSubmit={handleScheduleTraining}>
// // //             <input
// // //               type="text"
// // //               placeholder="Training Title"
// // //               value={training.title}
// // //               onChange={(e) => setTraining({ ...training, title: e.target.value })}
// // //             />
// // //             <textarea
// // //               placeholder="Description"
// // //               value={training.description}
// // //               onChange={(e) => setTraining({ ...training, description: e.target.value })}
// // //             />
// // //             <input
// // //               type="date"
// // //               value={training.date}
// // //               onChange={(e) => setTraining({ ...training, date: e.target.value })}
// // //             />
// // //             <select
// // //               multiple
// // //               value={training.employees}
// // //               onChange={(e) =>
// // //                 setTraining({
// // //                   ...training,
// // //                   employees: Array.from(e.target.selectedOptions, (option) => option.value),
// // //                 })
// // //               }
// // //             >
// // //               {employees.map((emp) => (
// // //                 <option key={emp._id} value={emp._id}>
// // //                   {emp.user?.name || 'Unknown'}
// // //                 </option>
// // //               ))}
// // //             </select>
// // //             <button type="submit">Schedule Training</button>
// // //           </form>
// // //         )}
// // //       </div>

// // //       <div>
// // //         <h3>Assign Task</h3>
// // //         {employees.length === 0 ? (
// // //           <p>No employees available to assign tasks.</p>
// // //         ) : (
// // //           <form onSubmit={handleAssignTask}>
// // //             <input
// // //               type="text"
// // //               placeholder="Task Title"
// // //               value={task.title}
// // //               onChange={(e) => setTask({ ...task, title: e.target.value })}
// // //             />
// // //             <textarea
// // //               placeholder="Description"
// // //               value={task.description}
// // //               onChange={(e) => setTask({ ...task, description: e.target.value })}
// // //             />
// // //             <select
// // //               value={task.assignedTo}
// // //               onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
// // //             >
// // //               <option value="">Select Employee</option>
// // //               {employees.map((emp) => (
// // //                 <option key={emp._id} value={emp._id}>
// // //                   {emp.user?.name || 'Unknown'}
// // //                 </option>
// // //               ))}
// // //             </select>
// // //             <input
// // //               type="date"
// // //               value={task.dueDate}
// // //               onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
// // //             />
// // //             <button type="submit">Assign Task</button>
// // //           </form>
// // //         )}
// // //       </div>

// // //       <div>
// // //         <h3>Leave Requests</h3>
// // //         {leaveRequests.length === 0 ? (
// // //           <p>No leave requests found.</p>
// // //         ) : (
// // //           <table>
// // //             <thead>
// // //               <tr>
// // //                 <th>Employee</th>
// // //                 <th>Date</th>
// // //                 <th>Status</th>
// // //                 <th>Actions</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {leaveRequests.map((req) => (
// // //                 <tr key={req._id}>
// // //                   <td>{req.employee && req.employee.user ? req.employee.user.name : 'Unknown'}</td>
// // //                   <td>{new Date(req.date).toLocaleDateString()}</td>
// // //                   <td>{req.status}</td>
// // //                   <td>
// // //                     {req.status === 'leave' && (
// // //                       <>
// // //                         <button onClick={() => handleLeaveAction(req._id, 'approved')}>
// // //                           Approve
// // //                         </button>
// // //                         <button onClick={() => handleLeaveAction(req._id, 'rejected')}>
// // //                           Reject
// // //                         </button>
// // //                       </>
// // //                     )}
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default HRDashboard
// // // 
// // import React, { useState, useEffect } from 'react';
// // import api from '../utils/api';
// // import '../styles/App.css';

// // const HRDashboard = ({ user }) => {
// //   const [employees, setEmployees] = useState([]);
// //   const [attendance, setAttendance] = useState({ employeeId: '', date: '', status: '' });
// //   const [payroll, setPayroll] = useState({ employeeId: '', month: '', year: '', basicSalary: '', bonuses: '', deductions: '' });
// //   const [training, setTraining] = useState({ title: '', description: '', date: '', employees: [] });
// //   const [task, setTask] = useState({ title: '', description: '', assignedTo: '', dueDate: '' });
// //   const [leaveRequests, setLeaveRequests] = useState([]);
// //   const [salaryData, setSalaryData] = useState({ employeeId: '', salary: '' });
// //   const [assignedTasks, setAssignedTasks] = useState([]); // New state for assigned tasks
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchEmployees = async () => {
// //       try {
// //         const response = await api.get('/hr/employees');
// //         console.log('Employees fetched:', response.data);
// //         if (response.data.length === 0) {
// //           setError('No employees found. Please register employees first.');
// //         }
// //         setEmployees(response.data);
// //       } catch (error) {
// //         console.error('Error fetching employees:', error.response ? error.response.data : error.message);
// //         setError('Failed to fetch employees. Please try again later.');
// //       }
// //     };

// //     const fetchLeaveRequests = async () => {
// //       try {
// //         const response = await api.get('/hr/leave-requests');
// //         console.log('Leave requests fetched:', response.data);
// //         setLeaveRequests(response.data);
// //       } catch (error) {
// //         console.error('Error fetching leave requests:', error.response ? error.response.data : error.message);
// //         setError('Failed to fetch leave requests. Please try again later.');
// //       }
// //     };

// //     const fetchAssignedTasks = async () => {
// //       try {
// //         const response = await api.get('/hr/assigned-tasks');
// //         console.log('Assigned tasks fetched:', response.data);
// //         setAssignedTasks(response.data);
// //       } catch (error) {
// //         console.error('Error fetching assigned tasks:', error.response ? error.response.data : error.message);
// //         setError('Failed to fetch assigned tasks. Please try again later.');
// //       }
// //     };

// //     fetchEmployees();
// //     fetchLeaveRequests();
// //     fetchAssignedTasks();
// //   }, []);

// //   const handleMarkAttendance = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await api.post('/hr/attendance', attendance);
// //       alert('Attendance marked successfully');
// //       setAttendance({ employeeId: '', date: '', status: '' });
// //     } catch (error) {
// //       console.error('Error marking attendance:', error);
// //       setError('Failed to mark attendance. Please try again.');
// //     }
// //   };

// //   const handleProcessPayroll = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await api.post('/hr/payroll', payroll);
// //       alert('Payroll processed successfully');
// //       setPayroll({ employeeId: '', month: '', year: '', basicSalary: '', bonuses: '', deductions: '' });
// //     } catch (error) {
// //       console.error('Error processing payroll:', error);
// //       setError('Failed to process payroll. Please try again.');
// //     }
// //   };

// //   const handleScheduleTraining = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await api.post('/hr/training', training);
// //       alert('Training scheduled successfully');
// //       setTraining({ title: '', description: '', date: '', employees: [] });
// //     } catch (error) {
// //       console.error('Error scheduling training:', error);
// //       setError('Failed to schedule training. Please try again.');
// //     }
// //   };

// //   const handleAssignTask = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await api.post('/hr/task', task);
// //       alert('Task assigned successfully');
// //       setTask({ title: '', description: '', assignedTo: '', dueDate: '' });
// //       // Refresh assigned tasks
// //       const response = await api.get('/hr/assigned-tasks');
// //       setAssignedTasks(response.data);
// //     } catch (error) {
// //       console.error('Error assigning task:', error);
// //       setError('Failed to assign task. Please try again.');
// //     }
// //   };

// //   const handleSetSalary = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await api.put('/hr/set-salary', salaryData);
// //       alert('Salary set successfully');
// //       setEmployees(employees.map((emp) =>
// //         emp._id === salaryData.employeeId ? { ...emp, salary: salaryData.salary } : emp
// //       ));
// //       setSalaryData({ employeeId: '', salary: '' });
// //     } catch (error) {
// //       console.error('Error setting salary:', error);
// //       setError('Failed to set salary. Please try again.');
// //     }
// //   };

// //   const handleLeaveAction = async (attendanceId, status) => {
// //     try {
// //       await api.put('/hr/leave', { attendanceId, status });
// //       alert(`Leave ${status} successfully`);
// //       setLeaveRequests(leaveRequests.map((req) =>
// //         req._id === attendanceId ? { ...req, status } : req
// //       ));
// //     } catch (error) {
// //       console.error(`Error ${status} leave:`, error);
// //       setError(`Failed to ${status} leave. Please try again.`);
// //     }
// //   };

// //   return (
// //     <div className="dashboard">
// //       <h2>HR Dashboard</h2>

// //       {error && <div className="error-message">{error}</div>}

// //       <div>
// //         <h3>Employee List</h3>
// //         {employees.length === 0 ? (
// //           <p>No employees found.</p>
// //         ) : (
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>Image</th>
// //                 <th>Name</th>
// //                 <th>Email</th>
// //                 <th>Designation</th>
// //                 <th>Salary</th>
// //                 <th>Department</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {employees.map((emp) => (
// //                 <tr key={emp._id}>
// //                   <td>
// //                     {emp.image ? (
// //                       <img
// //                         src={`http://localhost:5000/${emp.image}`}
// //                         alt={emp.user?.name || 'Employee'}
// //                         className="employee-image"
// //                         onError={(e) => { e.target.src = 'https://via.placeholder.com/50'; }}
// //                       />
// //                     ) : (
// //                       'No Image'
// //                     )}
// //                   </td>
// //                   <td>{emp.user?.name || 'Unknown'}</td>
// //                   <td>{emp.user?.email || 'Unknown'}</td>
// //                   <td>{emp.designation}</td>
// //                   <td>{emp.salary}</td>
// //                   <td>{emp.department}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         )}
// //       </div>

// //       <div>
// //         <h3>Set Employee Salary</h3>
// //         {employees.length === 0 ? (
// //           <p>No employees available to set salary.</p>
// //         ) : (
// //           <form onSubmit={handleSetSalary}>
// //             <select
// //               value={salaryData.employeeId}
// //               onChange={(e) => setSalaryData({ ...salaryData, employeeId: e.target.value })}
// //             >
// //               <option value="">Select Employee</option>
// //               {employees.map((emp) => (
// //                 <option key={emp._id} value={emp._id}>
// //                   {emp.user?.name || 'Unknown'}
// //                 </option>
// //               ))}
// //             </select>
// //             <input
// //               type="number"
// //               placeholder="Salary"
// //               value={salaryData.salary}
// //               onChange={(e) => setSalaryData({ ...salaryData, salary: e.target.value })}
// //             />
// //             <button type="submit">Set Salary</button>
// //           </form>
// //         )}
// //       </div>

// //       <div>
// //         <h3>Mark Attendance</h3>
// //         {employees.length === 0 ? (
// //           <p>No employees available to mark attendance.</p>
// //         ) : (
// //           <form onSubmit={handleMarkAttendance}>
// //             <select
// //               value={attendance.employeeId}
// //               onChange={(e) => setAttendance({ ...attendance, employeeId: e.target.value })}
// //             >
// //               <option value="">Select Employee</option>
// //               {employees.map((emp) => (
// //                 <option key={emp._id} value={emp._id}>
// //                   {emp.user?.name || 'Unknown'}
// //                 </option>
// //               ))}
// //             </select>
// //             <input
// //               type="date"
// //               value={attendance.date}
// //               onChange={(e) => setAttendance({ ...attendance, date: e.target.value })}
// //             />
// //             <select
// //               value={attendance.status}
// //               onChange={(e) => setAttendance({ ...attendance, status: e.target.value })}
// //             >
// //               <option value="">Select Status</option>
// //               <option value="present">Present</option>
// //               <option value="absent">Absent</option>
// //               <option value="leave">Leave</option>
// //             </select>
// //             <button type="submit">Mark Attendance</button>
// //           </form>
// //         )}
// //       </div>

// //       <div>
// //         <h3>Process Payroll</h3>
// //         {employees.length === 0 ? (
// //           <p>No employees available to process payroll.</p>
// //         ) : (
// //           <form onSubmit={handleProcessPayroll}>
// //             <select
// //               value={payroll.employeeId}
// //               onChange={(e) => setPayroll({ ...payroll, employeeId: e.target.value })}
// //             >
// //               <option value="">Select Employee</option>
// //               {employees.map((emp) => (
// //                 <option key={emp._id} value={emp._id}>
// //                   {emp.user?.name || 'Unknown'}
// //                 </option>
// //               ))}
// //             </select>
// //             <input
// //               type="text"
// //               placeholder="Month (e.g., January)"
// //               value={payroll.month}
// //               onChange={(e) => setPayroll({ ...payroll, month: e.target.value })}
// //             />
// //             <input
// //               type="number"
// //               placeholder="Year (e.g., 2025)"
// //               value={payroll.year}
// //               onChange={(e) => setPayroll({ ...payroll, year: e.target.value })}
// //             />
// //             <input
// //               type="number"
// //               placeholder="Basic Salary"
// //               value={payroll.basicSalary}
// //               onChange={(e) => setPayroll({ ...payroll, basicSalary: e.target.value })}
// //             />
// //             <input
// //               type="number"
// //               placeholder="Bonuses"
// //               value={payroll.bonuses}
// //               onChange={(e) => setPayroll({ ...payroll, bonuses: e.target.value })}
// //             />
// //             <input
// //               type="number"
// //               placeholder="Deductions"
// //               value={payroll.deductions}
// //               onChange={(e) => setPayroll({ ...payroll, deductions: e.target.value })}
// //             />
// //             <button type="submit">Process Payroll</button>
// //           </form>
// //         )}
// //       </div>

// //       <div>
// //         <h3>Schedule Training</h3>
// //         {employees.length === 0 ? (
// //           <p>No employees available to schedule training.</p>
// //         ) : (
// //           <form onSubmit={handleScheduleTraining}>
// //             <input
// //               type="text"
// //               placeholder="Training Title"
// //               value={training.title}
// //               onChange={(e) => setTraining({ ...training, title: e.target.value })}
// //             />
// //             <textarea
// //               placeholder="Description"
// //               value={training.description}
// //               onChange={(e) => setTraining({ ...training, description: e.target.value })}
// //             />
// //             <input
// //               type="date"
// //               value={training.date}
// //               onChange={(e) => setTraining({ ...training, date: e.target.value })}
// //             />
// //             <select
// //               multiple
// //               value={training.employees}
// //               onChange={(e) =>
// //                 setTraining({
// //                   ...training,
// //                   employees: Array.from(e.target.selectedOptions, (option) => option.value),
// //                 })
// //               }
// //             >
// //               {employees.map((emp) => (
// //                 <option key={emp._id} value={emp._id}>
// //                   {emp.user?.name || 'Unknown'}
// //                 </option>
// //               ))}
// //             </select>
// //             <button type="submit">Schedule Training</button>
// //           </form>
// //         )}
// //       </div>

// //       <div>
// //         <h3>Assign Task</h3>
// //         {employees.length === 0 ? (
// //           <p>No employees available to assign tasks.</p>
// //         ) : (
// //           <form onSubmit={handleAssignTask}>
// //             <input
// //               type="text"
// //               placeholder="Task Title"
// //               value={task.title}
// //               onChange={(e) => setTask({ ...task, title: e.target.value })}
// //             />
// //             <textarea
// //               placeholder="Description"
// //               value={task.description}
// //               onChange={(e) => setTask({ ...task, description: e.target.value })}
// //             />
// //             <select
// //               value={task.assignedTo}
// //               onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
// //             >
// //               <option value="">Select Employee</option>
// //               {employees.map((emp) => (
// //                 <option key={emp._id} value={emp._id}>
// //                   {emp.user?.name || 'Unknown'}
// //                 </option>
// //               ))}
// //             </select>
// //             <input
// //               type="date"
// //               value={task.dueDate}
// //               onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
// //             />
// //             <button type="submit">Assign Task</button>
// //           </form>
// //         )}
// //       </div>

// //       <div>
// //         <h3>View Assigned Tasks</h3>
// //         {assignedTasks.length === 0 ? (
// //           <p>No tasks assigned.</p>
// //         ) : (
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>Title</th>
// //                 <th>Description</th>
// //                 <th>Assigned To</th>
// //                 <th>Due Date</th>
// //                 <th>Status</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {assignedTasks.map((task) => (
// //                 <tr key={task._id}>
// //                   <td>{task.title}</td>
// //                   <td>{task.description}</td>
// //                   <td>{task.assignedTo?.user?.name || 'Unknown'}</td>
// //                   <td>{new Date(task.dueDate).toLocaleDateString()}</td>
// //                   <td>{task.status}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         )}
// //       </div>

// //       <div>
// //         <h3>Leave Requests</h3>
// //         {leaveRequests.length === 0 ? (
// //           <p>No leave requests found.</p>
// //         ) : (
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>Employee</th>
// //                 <th>Date</th>
// //                 <th>Status</th>
// //                 <th>Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {leaveRequests.map((req) => (
// //                 <tr key={req._id}>
// //                   <td>{req.employee && req.employee.user ? req.employee.user.name : 'Unknown'}</td>
// //                   <td>{new Date(req.date).toLocaleDateString()}</td>
// //                   <td>{req.status}</td>
// //                   <td>
// //                     {req.status === 'leave' && (
// //                       <>
// //                         <button onClick={() => handleLeaveAction(req._id, 'approved')}>
// //                           Approve
// //                         </button>
// //                         <button onClick={() => handleLeaveAction(req._id, 'rejected')}>
// //                           Reject
// //                         </button>
// //                       </>
// //                     )}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default HRDashboard;;/




// import React, { useState, useEffect } from 'react';
// import api from '../utils/api';
// import '../styles/App.css';

// const HRDashboard = ({ user }) => {
//   const [employees, setEmployees] = useState([]);
//   const [attendance, setAttendance] = useState({ employeeId: '', date: '', status: '' });
//   const [payroll, setPayroll] = useState({ employeeId: '', month: '', year: '', basicSalary: '', bonuses: '', deductions: '' });
//   const [training, setTraining] = useState({ title: '', description: '', date: '', employees: [] });
//   const [task, setTask] = useState({ title: '', description: '', assignedTo: '', dueDate: '' });
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [salaryData, setSalaryData] = useState({ employeeId: '', salary: '' });
//   const [assignedTasks, setAssignedTasks] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await api.get('/hr/employees');
//         console.log('Employees fetched:', response.data);
//         if (response.data.length === 0) {
//           setError('No employees found. Please register employees first.');
//         }
//         setEmployees(response.data);
//       } catch (error) {
//         console.error('Error fetching employees:', error.response ? error.response.data : error.message);
//         setError(error.response?.data?.message || 'Failed to fetch employees. Please try again later.');
//       }
//     };

//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await api.get('/hr/leave-requests');
//         console.log('Leave requests fetched:', response.data);
//         setLeaveRequests(response.data);
//       } catch (error) {
//         console.error('Error fetching leave requests:', error.response ? error.response.data : error.message);
//         setError(error.response?.data?.message || 'Failed to fetch leave requests. Please try again later.');
//       }
//     };

//     const fetchAssignedTasks = async () => {
//       try {
//         const response = await api.get('/hr/assigned-tasks');
//         console.log('Assigned tasks fetched:', response.data);
//         setAssignedTasks(response.data);
//       } catch (error) {
//         console.error('Error fetching assigned tasks:', error.response ? error.response.data : error.message);
//         if (error.response?.status === 404) {
//           setError('Assigned tasks endpoint not found. Please check the backend server.');
//         } else {
//           setError(error.response?.data?.message || 'Failed to fetch assigned tasks. Please try again later.');
//         }
//       }
//     };

//     fetchEmployees();
//     fetchLeaveRequests();
//     fetchAssignedTasks();
//   }, []);

//   const handleMarkAttendance = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post('/hr/attendance', attendance);
//       alert('Attendance marked successfully');
//       setAttendance({ employeeId: '', date: '', status: '' });
//     } catch (error) {
//       console.error('Error marking attendance:', error);
//       setError(error.response?.data?.message || 'Failed to mark attendance. Please try again.');
//     }
//   };

//   const handleProcessPayroll = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post('/hr/payroll', payroll);
//       alert('Payroll processed successfully');
//       setPayroll({ employeeId: '', month: '', year: '', basicSalary: '', bonuses: '', deductions: '' });
//     } catch (error) {
//       console.error('Error processing payroll:', error);
//       setError(error.response?.data?.message || 'Failed to process payroll. Please try again.');
//     }
//   };

//   const handleScheduleTraining = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post('/hr/training', training);
//       alert('Training scheduled successfully');
//       setTraining({ title: '', description: '', date: '', employees: [] });
//     } catch (error) {
//       console.error('Error scheduling training:', error);
//       setError(error.response?.data?.message || 'Failed to schedule training. Please try again.');
//     }
//   };

//   const handleAssignTask = async (e) => {
//     e.preventDefault();
//     try {
//       // Validate required fields
//       if (!task.title || !task.description || !task.assignedTo || !task.dueDate) {
//         setError('All fields (title, description, assigned to, due date) are required to assign a task.');
//         return;
//       }

//       await api.post('/hr/task', task);
//       alert('Task assigned successfully');
//       setTask({ title: '', description: '', assignedTo: '', dueDate: '' });
//       // Refresh assigned tasks
//       const response = await api.get('/hr/assigned-tasks');
//       setAssignedTasks(response.data);
//     } catch (error) {
//       console.error('Error assigning task:', error);
//       setError(error.response?.data?.message || 'Failed to assign task. Please try again.');
//     }
//   };

//   const handleSetSalary = async (e) => {
//     e.preventDefault();
//     try {
//       await api.put('/hr/set-salary', salaryData);
//       alert('Salary set successfully');
//       setEmployees(employees.map((emp) =>
//         emp._id === salaryData.employeeId ? { ...emp, salary: salaryData.salary } : emp
//       ));
//       setSalaryData({ employeeId: '', salary: '' });
//     } catch (error) {
//       console.error('Error setting salary:', error);
//       setError(error.response?.data?.message || 'Failed to set salary. Please try again.');
//     }
//   };

//   const handleLeaveAction = async (attendanceId, status) => {
//     try {
//       await api.put('/hr/leave', { attendanceId, status });
//       alert(`Leave ${status} successfully`);
//       setLeaveRequests(leaveRequests.map((req) =>
//         req._id === attendanceId ? { ...req, status } : req
//       ));
//     } catch (error) {
//       console.error(`Error ${status} leave:`, error);
//       setError(error.response?.data?.message || `Failed to ${status} leave. Please try again.`);
//     }
//   };

//   return (
//     <div className="dashboard">
//       <h2>HR Dashboard</h2>

//       {error && <div className="error-message">{error}</div>}

//       <div>
//         <h3>Employee List</h3>
//         {employees.length === 0 ? (
//           <p>No employees found.</p>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>Image</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Designation</th>
//                 <th>Salary</th>
//                 <th>Department</th>
//               </tr>
//             </thead>
//             <tbody>
//               {employees.map((emp) => (
//                 <tr key={emp._id}>
//                   <td>
//                     {emp.image ? (
//                       <img
//                         src={`http://localhost:5000/${emp.image}`}
//                         alt={emp.user?.name || 'Employee'}
//                         className="employee-image"
//                         onError={(e) => { e.target.src = 'https://via.placeholder.com/50'; }}
//                       />
//                     ) : (
//                       'No Image'
//                     )}
//                   </td>
//                   <td>{emp.user?.name || 'Unknown'}</td>
//                   <td>{emp.user?.email || 'Unknown'}</td>
//                   <td>{emp.designation}</td>
//                   <td>{emp.salary}</td>
//                   <td>{emp.department}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       <div>
//         <h3>Set Employee Salary</h3>
//         {employees.length === 0 ? (
//           <p>No employees available to set salary.</p>
//         ) : (
//           <form onSubmit={handleSetSalary}>
//             <select
//               value={salaryData.employeeId}
//               onChange={(e) => setSalaryData({ ...salaryData, employeeId: e.target.value })}
//             >
//               <option value="">Select Employee</option>
//               {employees.map((emp) => (
//                 <option key={emp._id} value={emp._id}>
//                   {emp.user?.name || 'Unknown'}
//                 </option>
//               ))}
//             </select>
//             <input
//               type="number"
//               placeholder="Salary"
//               value={salaryData.salary}
//               onChange={(e) => setSalaryData({ ...salaryData, salary: e.target.value })}
//             />
//             <button type="submit">Set Salary</button>
//           </form>
//         )}
//       </div>

//       <div>
//         <h3>Mark Attendance</h3>
//         {employees.length === 0 ? (
//           <p>No employees available to mark attendance.</p>
//         ) : (
//           <form onSubmit={handleMarkAttendance}>
//             <select
//               value={attendance.employeeId}
//               onChange={(e) => setAttendance({ ...attendance, employeeId: e.target.value })}
//             >
//               <option value="">Select Employee</option>
//               {employees.map((emp) => (
//                 <option key={emp._id} value={emp._id}>
//                   {emp.user?.name || 'Unknown'}
//                 </option>
//               ))}
//             </select>
//             <input
//               type="date"
//               value={attendance.date}
//               onChange={(e) => setAttendance({ ...attendance, date: e.target.value })}
//             />
//             <select
//               value={attendance.status}
//               onChange={(e) => setAttendance({ ...attendance, status: e.target.value })}
//             >
//               <option value="">Select Status</option>
//               <option value="present">Present</option>
//               <option value="absent">Absent</option>
//               <option value="leave">Leave</option>
//             </select>
//             <button type="submit">Mark Attendance</button>
//           </form>
//         )}
//       </div>

//       <div>
//         <h3>Process Payroll</h3>
//         {employees.length === 0 ? (
//           <p>No employees available to process payroll.</p>
//         ) : (
//           <form onSubmit={handleProcessPayroll}>
//             <select
//               value={payroll.employeeId}
//               onChange={(e) => setPayroll({ ...payroll, employeeId: e.target.value })}
//             >
//               <option value="">Select Employee</option>
//               {employees.map((emp) => (
//                 <option key={emp._id} value={emp._id}>
//                   {emp.user?.name || 'Unknown'}
//                 </option>
//               ))}
//             </select>
//             <input
//               type="text"
//               placeholder="Month (e.g., January)"
//               value={payroll.month}
//               onChange={(e) => setPayroll({ ...payroll, month: e.target.value })}
//             />
//             <input
//               type="number"
//               placeholder="Year (e.g., 2025)"
//               value={payroll.year}
//               onChange={(e) => setPayroll({ ...payroll, year: e.target.value })}
//             />
//             <input
//               type="number"
//               placeholder="Basic Salary"
//               value={payroll.basicSalary}
//               onChange={(e) => setPayroll({ ...payroll, basicSalary: e.target.value })}
//             />
//             <input
//               type="number"
//               placeholder="Bonuses"
//               value={payroll.bonuses}
//               onChange={(e) => setPayroll({ ...payroll, bonuses: e.target.value })}
//             />
//             <input
//               type="number"
//               placeholder="Deductions"
//               value={payroll.deductions}
//               onChange={(e) => setPayroll({ ...payroll, deductions: e.target.value })}
//             />
//             <button type="submit">Process Payroll</button>
//           </form>
//         )}
//       </div>

//       <div>
//         <h3>Schedule Training</h3>
//         {employees.length === 0 ? (
//           <p>No employees available to schedule training.</p>
//         ) : (
//           <form onSubmit={handleScheduleTraining}>
//             <input
//               type="text"
//               placeholder="Training Title"
//               value={training.title}
//               onChange={(e) => setTraining({ ...training, title: e.target.value })}
//             />
//             <textarea
//               placeholder="Description"
//               value={training.description}
//               onChange={(e) => setTraining({ ...training, description: e.target.value })}
//             />
//             <input
//               type="date"
//               value={training.date}
//               onChange={(e) => setTraining({ ...training, date: e.target.value })}
//             />
//             <select
//               multiple
//               value={training.employees}
//               onChange={(e) =>
//                 setTraining({
//                   ...training,
//                   employees: Array.from(e.target.selectedOptions, (option) => option.value),
//                 })
//               }
//             >
//               {employees.map((emp) => (
//                 <option key={emp._id} value={emp._id}>
//                   {emp.user?.name || 'Unknown'}
//                 </option>
//               ))}
//             </select>
//             <button type="submit">Schedule Training</button>
//           </form>
//         )}
//       </div>

//       <div>
//         <h3>Assign Task</h3>
//         {employees.length === 0 ? (
//           <p>No employees available to assign tasks.</p>
//         ) : (
//           <form onSubmit={handleAssignTask}>
//             <input
//               type="text"
//               placeholder="Task Title"
//               value={task.title}
//               onChange={(e) => setTask({ ...task, title: e.target.value })}
//             />
//             <textarea
//               placeholder="Description"
//               value={task.description}
//               onChange={(e) => setTask({ ...task, description: e.target.value })}
//             />
//             <select
//               value={task.assignedTo}
//               onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
//             >
//               <option value="">Select Employee</option>
//               {employees.map((emp) => (
//                 <option key={emp._id} value={emp._id}>
//                   {emp.user?.name || 'Unknown'}
//                 </option>
//               ))}
//             </select>
//             <input
//               type="date"
//               value={task.dueDate}
//               onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
//             />
//             <button type="submit">Assign Task</button>
//           </form>
//         )}
//       </div>

//       <div>
//         <h3>View Assigned Tasks</h3>
//         {assignedTasks.length === 0 ? (
//           <p>No tasks assigned.</p>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th>Assigned To</th>
//                 <th>Due Date</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {assignedTasks.map((task) => (
//                 <tr key={task._id}>
//                   <td>{task.title}</td>
//                   <td>{task.description}</td>
//                   <td>{task.assignedTo?.user?.name || 'Unknown'}</td>
//                   <td>{new Date(task.dueDate).toLocaleDateString()}</td>
//                   <td>{task.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       <div>
//         <h3>Leave Requests</h3>
//         {leaveRequests.length === 0 ? (
//           <p>No leave requests found.</p>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>Employee</th>
//                 <th>Date</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {leaveRequests.map((req) => (
//                 <tr key={req._id}>
//                   <td>{req.employee && req.employee.user ? req.employee.user.name : 'Unknown'}</td>
//                   <td>{new Date(req.date).toLocaleDateString()}</td>
//                   <td>{req.status}</td>
//                   <td>
//                     {req.status === 'leave' && (
//                       <>
//                         <button onClick={() => handleLeaveAction(req._id, 'approved')}>
//                           Approve
//                         </button>
//                         <button onClick={() => handleLeaveAction(req._id, 'rejected')}>
//                           Reject
//                         </button>
//                       </>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HRDashboard;

import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/Hr.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

const HRDashboard = ({ user }) => {
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState({ employeeId: '', date: '', status: '' });
  const [payroll, setPayroll] = useState({ employeeId: '', month: '', year: '', basicSalary: '', bonuses: '', deductions: '' });
  const [training, setTraining] = useState({ title: '', description: '', date: '', employees: [] });
  const [task, setTask] = useState({ title: '', description: '', assignedTo: '', dueDate: '' });
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [salaryData, setSalaryData] = useState({ employeeId: '', salary: '' });
  const [assignedTasks, setAssignedTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await api.get('/hr/employees');
        console.log('Employees fetched:', response.data);
        if (response.data.length === 0) {
          setError('No employees found. Please register employees first.');
        }
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error.response ? error.response.data : error.message);
        setError(error.response?.data?.message || 'Failed to fetch employees. Please try again later.');
      }
    };

    const fetchLeaveRequests = async () => {
      try {
        const response = await api.get('/hr/leave-requests');
        console.log('Leave requests fetched:', response.data);
        setLeaveRequests(response.data);
      } catch (error) {
        console.error('Error fetching leave requests:', error.response ? error.response.data : error.message);
        setError(error.response?.data?.message || 'Failed to fetch leave requests. Please try again later.');
      }
    };

    const fetchAssignedTasks = async () => {
      try {
        const response = await api.get('/hr/assigned-tasks');
        console.log('Assigned tasks fetched:', response.data);
        setAssignedTasks(response.data);
      } catch (error) {
        console.error('Error fetching assigned tasks:', error.response ? error.response.data : error.message);
        setError(error.response?.data?.message || 'Failed to fetch assigned tasks. Please try again later.');
      }
    };

    fetchEmployees();
    fetchLeaveRequests();
    fetchAssignedTasks();
  }, []);

  const handleMarkAttendance = async (e) => {
    e.preventDefault();
    try {
      await api.post('/hr/attendance', attendance);
      alert('Attendance marked successfully');
      setAttendance({ employeeId: '', date: '', status: '' });
    } catch (error) {
      console.error('Error marking attendance:', error);
      setError(error.response?.data?.message || 'Failed to mark attendance. Please try again.');
    }
  };

  const handleProcessPayroll = async (e) => {
    e.preventDefault();
    try {
      await api.post('/hr/payroll', payroll);
      alert('Payroll processed successfully');
      setPayroll({ employeeId: '', month: '', year: '', basicSalary: '', bonuses: '', deductions: '' });
    } catch (error) {
      console.error('Error processing payroll:', error);
      setError(error.response?.data?.message || 'Failed to process payroll. Please try again.');
    }
  };

  const handleScheduleTraining = async (e) => {
    e.preventDefault();
    try {
      await api.post('/hr/training', training);
      alert('Training scheduled successfully');
      setTraining({ title: '', description: '', date: '', employees: [] });
    } catch (error) {
      console.error('Error scheduling training:', error);
      setError(error.response?.data?.message || 'Failed to schedule training. Please try again.');
    }
  };

  const handleAssignTask = async (e) => {
    e.preventDefault();
    try {
      if (!task.title || !task.description || !task.assignedTo || !task.dueDate) {
        setError('All fields (title, description, assigned to, due date) are required to assign a task.');
        return;
      }
      await api.post('/hr/task', task);
      alert('Task assigned successfully');
      setTask({ title: '', description: '', assignedTo: '', dueDate: '' });
      const response = await api.get('/hr/assigned-tasks');
      setAssignedTasks(response.data);
    } catch (error) {
      console.error('Error assigning task:', error);
      setError(error.response?.data?.message || 'Failed to assign task. Please try again.');
    }
  };

  const handleSetSalary = async (e) => {
    e.preventDefault();
    try {
      await api.put('/hr/set-salary', salaryData);
      alert('Salary set successfully');
      setEmployees(employees.map((emp) =>
        emp._id === salaryData.employeeId ? { ...emp, salary: salaryData.salary } : emp
      ));
      setSalaryData({ employeeId: '', salary: '' });
    } catch (error) {
      console.error('Error setting salary:', error);
      setError(error.response?.data?.message || 'Failed to set salary. Please try again.');
    }
  };

  const handleLeaveAction = async (attendanceId, status) => {
    try {
      await api.put('/hr/leave', { attendanceId, status });
      alert(`Leave ${status} successfully`);
      setLeaveRequests(leaveRequests.map((req) =>
        req._id === attendanceId ? { ...req, status } : req
      ));
    } catch (error) {
      console.error(`Error ${status} leave:`, error);
      setError(error.response?.data?.message || `Failed to ${status} leave. Please try again.`);
    }
  };

  // Placeholder data for charts (you can replace this with actual API data later)
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales Report',
        data: [190000, 195000, 170000, 180000, 160000, 194560, 180000, 170000, 185000, 190000, 175000, 200000],
        fill: true,
        backgroundColor: 'rgba(113, 137, 218, 0.2)',
        borderColor: 'rgba(113, 137, 218, 1)',
        tension: 0.4,
      },
    ],
  };

  const pieChartData = {
    labels: ['Shoes', 'Dresses', 'Jeans', 'Sport Suit', 'Others'],
    datasets: [
      {
        data: [28.3, 14.16, 30, 8, 4.34],
        backgroundColor: [
          '#7189DA',
          '#FF6384',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="hr-dashboard">
      <div className="sidebar">
        <div className="logo">
          <img src="https://via.placeholder.com/30" alt="Logo" />
          <span>MYEMS</span>
        </div>
        <nav>
          <ul>
            <li className="active"><i className="fas fa-tachometer-alt"></i> Dashboard</li>
            <li><i className="fas fa-chart-line"></i> Sales</li>
            <li><i className="fas fa-boxes"></i> Inventory</li>
            <li><i className="fas fa-dollar-sign"></i> Finances</li>
            <li><i className="fas fa-users"></i> Customers</li>
            <li><i className="fas fa-bullhorn"></i> Marketing</li>
            <li><i className="fas fa-file-alt"></i> Reports <span className="badge">6</span></li>
            <li><i className="fas fa-cog"></i> Settings</li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <button className="visit-site-btn">Visit site</button>
        </div>
      </div>

      <div className="main-content">
        <header>
          <div className="welcome">
            <h1>Hey, {user?.name || 'HR'}! Look at your EMS</h1>
          </div>
          <div className="header-actions">
            <input type="text" placeholder="Search or type a command" />
            <span className="weather">36 °F</span>
            <span className="date">Today, 30 Jan 2024</span>
            <div className="profile">
              <i className="fas fa-bell"></i>
              <img src="https://via.placeholder.com/40" alt="Profile" />
              <span>{user?.name || 'HR'}</span>
              <span className="role">Manager</span>
            </div>
          </div>
        </header>

        <div className="summary-cards">
          <div className="card">
            <h3>Total Employees</h3>
            <p>{employees.length}</p>
            <span className="increase">+{employees.length > 0 ? Math.round(employees.length * 0.2) : 0} this year</span>
          </div>
          <div className="card">
            <h3>Pending Leave Requests</h3>
            <p>{leaveRequests.filter(req => req.status === 'leave').length}</p>
            <span className="increase">+{leaveRequests.filter(req => req.status === 'leave').length > 0 ? 1 : 0} this month</span>
          </div>
          <div className="card">
            <h3>Assigned Tasks</h3>
            <p>{assignedTasks.length}</p>
            <span className="increase">+{assignedTasks.length > 0 ? Math.round(assignedTasks.length * 0.25) : 0} this month</span>
          </div>
          <div className="card">
            <h3>Pending Tasks</h3>
            <p>{assignedTasks.filter(task => task.status === 'pending').length}</p>
            <span className="decrease">-{assignedTasks.filter(task => task.status === 'pending').length > 0 ? 1 : 0} this month</span>
          </div>
        </div>

        <div className="charts">
          <div className="chart-card">
            <h3>Task Completion Trend</h3>
            <Line data={lineChartData} options={{ maintainAspectRatio: false }} />
          </div>
          <div className="chart-card">
            <h3>Task Status Distribution</h3>
            <Pie data={pieChartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="tables">
          <div className="table-card">
            <h3>Assigned Tasks</h3>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Assigned To</th>
                  <th>Due Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {assignedTasks.map((task) => (
                  <tr key={task._id}>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.assignedTo?.user?.name || 'Unknown'}</td>
                    <td>{new Date(task.dueDate).toLocaleDateString()}</td>
                    <td>{task.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-card">
            <h3>Leave Requests</h3>
            <table>
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {leaveRequests.map((req) => (
                  <tr key={req._id}>
                    <td>{req.employee && req.employee.user ? req.employee.user.name : 'Unknown'}</td>
                    <td>{new Date(req.date).toLocaleDateString()}</td>
                    <td>{req.status}</td>
                    <td>
                      {req.status === 'leave' && (
                        <>
                          <button onClick={() => handleLeaveAction(req._id, 'approved')}>Approve</button>
                          <button onClick={() => handleLeaveAction(req._id, 'rejected')}>Reject</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="actions">
          <div className="action-card">
            <h3>Mark Attendance</h3>
            {employees.length === 0 ? (
              <p>No employees available to mark attendance.</p>
            ) : (
              <form onSubmit={handleMarkAttendance}>
                <select
                  value={attendance.employeeId}
                  onChange={(e) => setAttendance({ ...attendance, employeeId: e.target.value })}
                >
                  <option value="">Select Employee</option>
                  {employees.map((emp) => (
                    <option key={emp._id} value={emp._id}>
                      {emp.user?.name || 'Unknown'}
                    </option>
                  ))}
                </select>
                <input
                  type="date"
                  value={attendance.date}
                  onChange={(e) => setAttendance({ ...attendance, date: e.target.value })}
                />
                <select
                  value={attendance.status}
                  onChange={(e) => setAttendance({ ...attendance, status: e.target.value })}
                >
                  <option value="">Select Status</option>
                  <option value="present">Present</option>
                  <option value="absent">Absent</option>
                  <option value="leave">Leave</option>
                </select>
                <button type="submit">Mark Attendance</button>
              </form>
            )}
          </div>

          <div className="action-card">
            <h3>Process Payroll</h3>
            {employees.length === 0 ? (
              <p>No employees available to process payroll.</p>
            ) : (
              <form onSubmit={handleProcessPayroll}>
                <select
                  value={payroll.employeeId}
                  onChange={(e) => setPayroll({ ...payroll, employeeId: e.target.value })}
                >
                  <option value="">Select Employee</option>
                  {employees.map((emp) => (
                    <option key={emp._id} value={emp._id}>
                      {emp.user?.name || 'Unknown'}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Month (e.g., January)"
                  value={payroll.month}
                  onChange={(e) => setPayroll({ ...payroll, month: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Year (e.g., 2025)"
                  value={payroll.year}
                  onChange={(e) => setPayroll({ ...payroll, year: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Basic Salary"
                  value={payroll.basicSalary}
                  onChange={(e) => setPayroll({ ...payroll, basicSalary: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Bonuses"
                  value={payroll.bonuses}
                  onChange={(e) => setPayroll({ ...payroll, bonuses: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Deductions"
                  value={payroll.deductions}
                  onChange={(e) => setPayroll({ ...payroll, deductions: e.target.value })}
                />
                <button type="submit">Process Payroll</button>
              </form>
            )}
          </div>

          <div className="action-card">
            <h3>Schedule Training</h3>
            {employees.length === 0 ? (
              <p>No employees available to schedule training.</p>
            ) : (
              <form onSubmit={handleScheduleTraining}>
                <input
                  type="text"
                  placeholder="Training Title"
                  value={training.title}
                  onChange={(e) => setTraining({ ...training, title: e.target.value })}
                />
                <textarea
                  placeholder="Description"
                  value={training.description}
                  onChange={(e) => setTraining({ ...training, description: e.target.value })}
                />
                <input
                  type="date"
                  value={training.date}
                  onChange={(e) => setTraining({ ...training, date: e.target.value })}
                />
                <select
                  multiple
                  value={training.employees}
                  onChange={(e) =>
                    setTraining({
                      ...training,
                      employees: Array.from(e.target.selectedOptions, (option) => option.value),
                    })
                  }
                >
                  {employees.map((emp) => (
                    <option key={emp._id} value={emp._id}>
                      {emp.user?.name || 'Unknown'}
                    </option>
                  ))}
                </select>
                <button type="submit">Schedule Training</button>
              </form>
            )}
          </div>

          <div className="action-card">
            <h3>Assign Task</h3>
            {employees.length === 0 ? (
              <p>No employees available to assign tasks.</p>
            ) : (
              <form onSubmit={handleAssignTask}>
                <input
                  type="text"
                  placeholder="Task Title"
                  value={task.title}
                  onChange={(e) => setTask({ ...task, title: e.target.value })}
                />
                <textarea
                  placeholder="Description"
                  value={task.description}
                  onChange={(e) => setTask({ ...task, description: e.target.value })}
                />
                <select
                  value={task.assignedTo}
                  onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
                >
                  <option value="">Select Employee</option>
                  {employees.map((emp) => (
                    <option key={emp._id} value={emp._id}>
                      {emp.user?.name || 'Unknown'}
                    </option>
                  ))}
                </select>
                <input
                  type="date"
                  value={task.dueDate}
                  onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
                />
                <button type="submit">Assign Task</button>
              </form>
            )}
          </div>

          <div className="action-card">
            <h3>Set Employee Salary</h3>
            {employees.length === 0 ? (
              <p>No employees available to set salary.</p>
            ) : (
              <form onSubmit={handleSetSalary}>
                <select
                  value={salaryData.employeeId}
                  onChange={(e) => setSalaryData({ ...salaryData, employeeId: e.target.value })}
                >
                  <option value="">Select Employee</option>
                  {employees.map((emp) => (
                    <option key={emp._id} value={emp._id}>
                      {emp.user?.name || 'Unknown'}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="Salary"
                  value={salaryData.salary}
                  onChange={(e) => setSalaryData({ ...salaryData, salary: e.target.value })}
                />
                <button type="submit">Set Salary</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;