// // // // // import React, { useState, useEffect } from 'react';
// // // // // import api from '../utils/api';
// // // // // import '../styles/App.css';

// // // // // const EmployeeDashboard = ({ user }) => {
// // // // //   const [attendance, setAttendance] = useState({ date: '', status: '' });
// // // // //   const [policies, setPolicies] = useState([]);
// // // // //   const [payslips, setPayslips] = useState([]);
// // // // //   const [grievance, setGrievance] = useState({ title: '', description: '' });
// // // // //   const [tasks, setTasks] = useState([]);
// // // // //   const [leaveRequests, setLeaveRequests] = useState([]);
// // // // //   const [error, setError] = useState(null);

// // // // //   useEffect(() => {
// // // // //     const fetchData = async () => {
// // // // //       try {
// // // // //         const [policiesRes, payslipsRes, tasksRes, leaveRes] = await Promise.all([
// // // // //           api.get('/employee/policies'),
// // // // //           api.get('/employee/payslips'),
// // // // //           api.get('/employee/tasks'),
// // // // //           api.get('/employee/leave-requests'),
// // // // //         ]);
// // // // //         setPolicies(policiesRes.data);
// // // // //         setPayslips(payslipsRes.data);
// // // // //         setTasks(tasksRes.data);
// // // // //         setLeaveRequests(leaveRes.data);
// // // // //       } catch (error) {
// // // // //         console.error('Error fetching data:', error);
// // // // //         setError('Failed to fetch data. Please try again later.');
// // // // //       }
// // // // //     };
// // // // //     fetchData();
// // // // //   }, []);

// // // // //   const handleApplyLeave = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       const response = await api.post('/employee/leave', attendance);
// // // // //       alert('Leave applied successfully');
// // // // //       setAttendance({ date: '', status: '' });
// // // // //       setLeaveRequests([...leaveRequests, response.data.attendance]);
// // // // //     } catch (error) {
// // // // //       console.error('Error applying leave:', error);
// // // // //       setError('Failed to apply leave. Please try again.');
// // // // //     }
// // // // //   };

// // // // //   const handleSubmitGrievance = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       await api.post('/employee/grievance', grievance);
// // // // //       alert('Grievance submitted successfully');
// // // // //       setGrievance({ title: '', description: '' });
// // // // //     } catch (error) {
// // // // //       console.error('Error submitting grievance:', error);
// // // // //       setError('Failed to submit grievance. Please try again.');
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="dashboard">
// // // // //       <h2>Employee Dashboard</h2>

// // // // //       {error && <div className="error-message">{error}</div>}

// // // // //       <div>
// // // // //         <h3>Apply for Leave</h3>
// // // // //         <form onSubmit={handleApplyLeave}>
// // // // //           <input
// // // // //             type="date"
// // // // //             value={attendance.date}
// // // // //             onChange={(e) => setAttendance({ ...attendance, date: e.target.value })}
// // // // //           />
// // // // //           <select
// // // // //             value={attendance.status}
// // // // //             onChange={(e) => setAttendance({ ...attendance, status: 'leave' })}
// // // // //           >
// // // // //             <option value="">Select Type</option>
// // // // //             <option value="leave">Leave</option>
// // // // //           </select>
// // // // //           <button type="submit">Apply Leave</button>
// // // // //         </form>
// // // // //       </div>

// // // // //       <div>
// // // // //         <h3>My Leave Requests</h3>
// // // // //         {leaveRequests.length === 0 ? (
// // // // //           <p>No leave requests found.</p>
// // // // //         ) : (
// // // // //           <table>
// // // // //             <thead>
// // // // //               <tr>
// // // // //                 <th>Date</th>
// // // // //                 <th>Status</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {leaveRequests.map((req) => (
// // // // //                 <tr key={req._id}>
// // // // //                   <td>{new Date(req.date).toLocaleDateString()}</td>
// // // // //                   <td>{req.status}</td>
// // // // //                 </tr>
// // // // //               ))}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         )}
// // // // //       </div>

// // // // //       <div>
// // // // //         <h3>Payslips</h3>
// // // // //         {payslips.length === 0 ? (
// // // // //           <p>No payslips found.</p>
// // // // //         ) : (
// // // // //           <table>
// // // // //             <thead>
// // // // //               <tr>
// // // // //                 <th>Month</th>
// // // // //                 <th>Year</th>
// // // // //                 <th>Basic Salary</th>
// // // // //                 <th>Bonuses</th>
// // // // //                 <th>Deductions</th>
// // // // //                 <th>Net Salary</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {payslips.map((slip) => (
// // // // //                 <tr key={slip._id}>
// // // // //                   <td>{slip.month}</td>
// // // // //                   <td>{slip.year}</td>
// // // // //                   <td>{slip.basicSalary}</td>
// // // // //                   <td>{slip.bonuses}</td>
// // // // //                   <td>{slip.deductions}</td>
// // // // //                   <td>{slip.netSalary}</td>
// // // // //                 </tr>
// // // // //               ))}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         )}
// // // // //       </div>

// // // // //       <div>
// // // // //         <h3>Company Policies</h3>
// // // // //         {policies.length === 0 ? (
// // // // //           <p>No policies found.</p>
// // // // //         ) : (
// // // // //           <ul>
// // // // //             {policies.map((policy) => (
// // // // //               <li key={policy._id}>
// // // // //                 <strong>{policy.title}</strong>: {policy.description}
// // // // //               </li>
// // // // //             ))}
// // // // //           </ul>
// // // // //         )}
// // // // //       </div>

// // // // //       <div>
// // // // //         <h3>Submit Grievance</h3>
// // // // //         <form onSubmit={handleSubmitGrievance}>
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Grievance Title"
// // // // //             value={grievance.title}
// // // // //             onChange={(e) => setGrievance({ ...grievance, title: e.target.value })}
// // // // //           />
// // // // //           <textarea
// // // // //             placeholder="Description"
// // // // //             value={grievance.description}
// // // // //             onChange={(e) => setGrievance({ ...grievance, description: e.target.value })}
// // // // //           />
// // // // //           <button type="submit">Submit Grievance</button>
// // // // //         </form>
// // // // //       </div>

// // // // //       <div>
// // // // //         <h3>My Tasks</h3>
// // // // //         {tasks.length === 0 ? (
// // // // //           <p>No tasks found.</p>
// // // // //         ) : (
// // // // //           <table>
// // // // //             <thead>
// // // // //               <tr>
// // // // //                 <th>Title</th>
// // // // //                 <th>Description</th>
// // // // //                 <th>Due Date</th>
// // // // //                 <th>Status</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {tasks.map((task) => (
// // // // //                 <tr key={task._id}>
// // // // //                   <td>{task.title}</td>
// // // // //                   <td>{task.description}</td>
// // // // //                   <td>{new Date(task.dueDate).toLocaleDateString()}</td>
// // // // //                   <td>{task.status}</td>
// // // // //                 </tr>
// // // // //               ))}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default EmployeeDashboard;


// // // // import React, { useState, useEffect } from 'react';
// // // // import api from '../utils/api';
// // // // import '../styles/App.css';

// // // // const EmployeeDashboard = ({ user }) => {
// // // //   const [attendance, setAttendance] = useState({ date: '', status: '' });
// // // //   const [policies, setPolicies] = useState([]);
// // // //   const [payslips, setPayslips] = useState([]);
// // // //   const [grievance, setGrievance] = useState({ title: '', description: '' });
// // // //   const [tasks, setTasks] = useState([]);
// // // //   const [leaveRequests, setLeaveRequests] = useState([]);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     const fetchData = async () => {
// // // //       try {
// // // //         const [policiesRes, payslipsRes, tasksRes, leaveRes] = await Promise.all([
// // // //           api.get('/employee/policies'),
// // // //           api.get('/employee/payslips'),
// // // //           api.get('/employee/tasks'),
// // // //           api.get('/employee/leave-requests'),
// // // //         ]);
// // // //         setPolicies(policiesRes.data);
// // // //         setPayslips(payslipsRes.data);
// // // //         setTasks(tasksRes.data);
// // // //         setLeaveRequests(leaveRes.data);
// // // //       } catch (error) {
// // // //         console.error('Error fetching data:', error);
// // // //         setError('Failed to fetch data. Please try again later.');
// // // //       }
// // // //     };
// // // //     fetchData();
// // // //   }, []);

// // // //   const handleApplyLeave = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const response = await api.post('/employee/leave', attendance);
// // // //       alert('Leave applied successfully');
// // // //       setAttendance({ date: '', status: '' });
// // // //       setLeaveRequests([...leaveRequests, response.data.attendance]);
// // // //     } catch (error) {
// // // //       console.error('Error applying leave:', error);
// // // //       setError('Failed to apply leave. Please try again.');
// // // //     }
// // // //   };

// // // //   const handleSubmitGrievance = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       await api.post('/employee/grievance', grievance);
// // // //       alert('Grievance submitted successfully');
// // // //       setGrievance({ title: '', description: '' });
// // // //     } catch (error) {
// // // //       console.error('Error submitting grievance:', error);
// // // //       setError('Failed to submit grievance. Please try again.');
// // // //     }
// // // //   };

// // // //   const handleUpdateTaskStatus = async (taskId, status) => {
// // // //     try {
// // // //       const response = await api.put('/employee/task/status', { taskId, status });
// // // //       alert('Task status updated successfully');
// // // //       setTasks(tasks.map((task) =>
// // // //         task._id === taskId ? { ...task, status } : task
// // // //       ));
// // // //     } catch (error) {
// // // //       console.error('Error updating task status:', error);
// // // //       setError(error.response?.data?.message || 'Failed to update task status. Please try again.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="dashboard">
// // // //       <h2>Employee Dashboard</h2>

// // // //       {error && <div className="error-message">{error}</div>}

// // // //       <div>
// // // //         <h3>Apply for Leave</h3>
// // // //         <form onSubmit={handleApplyLeave}>
// // // //           <input
// // // //             type="date"
// // // //             value={attendance.date}
// // // //             onChange={(e) => setAttendance({ ...attendance, date: e.target.value })}
// // // //           />
// // // //           <select
// // // //             value={attendance.status}
// // // //             onChange={(e) => setAttendance({ ...attendance, status: 'leave' })}
// // // //           >
// // // //             <option value="">Select Type</option>
// // // //             <option value="leave">Leave</option>
// // // //           </select>
// // // //           <button type="submit">Apply Leave</button>
// // // //         </form>
// // // //       </div>

// // // //       <div>
// // // //         <h3>My Leave Requests</h3>
// // // //         {leaveRequests.length === 0 ? (
// // // //           <p>No leave requests found.</p>
// // // //         ) : (
// // // //           <table>
// // // //             <thead>
// // // //               <tr>
// // // //                 <th>Date</th>
// // // //                 <th>Status</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {leaveRequests.map((req) => (
// // // //                 <tr key={req._id}>
// // // //                   <td>{new Date(req.date).toLocaleDateString()}</td>
// // // //                   <td>{req.status}</td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         )}
// // // //       </div>

// // // //       <div>
// // // //         <h3>Payslips</h3>
// // // //         {payslips.length === 0 ? (
// // // //           <p>No payslips found.</p>
// // // //         ) : (
// // // //           <table>
// // // //             <thead>
// // // //               <tr>
// // // //                 <th>Month</th>
// // // //                 <th>Year</th>
// // // //                 <th>Basic Salary</th>
// // // //                 <th>Bonuses</th>
// // // //                 <th>Deductions</th>
// // // //                 <th>Net Salary</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {payslips.map((slip) => (
// // // //                 <tr key={slip._id}>
// // // //                   <td>{slip.month}</td>
// // // //                   <td>{slip.year}</td>
// // // //                   <td>{slip.basicSalary}</td>
// // // //                   <td>{slip.bonuses}</td>
// // // //                   <td>{slip.deductions}</td>
// // // //                   <td>{slip.netSalary}</td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         )}
// // // //       </div>

// // // //       <div>
// // // //         <h3>Company Policies</h3>
// // // //         {policies.length === 0 ? (
// // // //           <p>No policies found.</p>
// // // //         ) : (
// // // //           <ul>
// // // //             {policies.map((policy) => (
// // // //               <li key={policy._id}>
// // // //                 <strong>{policy.title}</strong>: {policy.description}
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         )}
// // // //       </div>

// // // //       <div>
// // // //         <h3>Submit Grievance</h3>
// // // //         <form onSubmit={handleSubmitGrievance}>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Grievance Title"
// // // //             value={grievance.title}
// // // //             onChange={(e) => setGrievance({ ...grievance, title: e.target.value })}
// // // //           />
// // // //           <textarea
// // // //             placeholder="Description"
// // // //             value={grievance.description}
// // // //             onChange={(e) => setGrievance({ ...grievance, description: e.target.value })}
// // // //           />
// // // //           <button type="submit">Submit Grievance</button>
// // // //         </form>
// // // //       </div>

// // // //       <div>
// // // //         <h3>My Tasks</h3>
// // // //         {tasks.length === 0 ? (
// // // //           <p>No tasks found.</p>
// // // //         ) : (
// // // //           <table>
// // // //             <thead>
// // // //               <tr>
// // // //                 <th>Title</th>
// // // //                 <th>Description</th>
// // // //                 <th>Due Date</th>
// // // //                 <th>Status</th>
// // // //                 <th>Update Status</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {tasks.map((task) => (
// // // //                 <tr key={task._id}>
// // // //                   <td>{task.title}</td>
// // // //                   <td>{task.description}</td>
// // // //                   <td>{new Date(task.dueDate).toLocaleDateString()}</td>
// // // //                   <td>{task.status}</td>
// // // //                   <td>
// // // //                     <select
// // // //                       value={task.status}
// // // //                       onChange={(e) => handleUpdateTaskStatus(task._id, e.target.value)}
// // // //                     >
// // // //                       <option value="pending">Pending</option>
// // // //                       <option value="in-progress">In Progress</option>
// // // //                       <option value="completed">Completed</option>
// // // //                     </select>
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

// // // // export default EmployeeDashboard;


// // // import React, { useState, useEffect } from 'react';
// // // import api from '../utils/api';
// // // import '../styles/App.css';

// // // const EmployeeDashboard = ({ user }) => {
// // //   const [attendance, setAttendance] = useState({ date: '', status: '' });
// // //   const [policies, setPolicies] = useState([]);
// // //   const [payslips, setPayslips] = useState([]);
// // //   const [grievance, setGrievance] = useState({ title: '', description: '' });
// // //   const [tasks, setTasks] = useState([]);
// // //   const [leaveRequests, setLeaveRequests] = useState([]);
// // //   const [error, setError] = useState(null);
// // //   const [taskStatusUpdates, setTaskStatusUpdates] = useState({}); // Temporary state for task status updates

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const [policiesRes, payslipsRes, tasksRes, leaveRes] = await Promise.all([
// // //           api.get('/employee/policies'),
// // //           api.get('/employee/payslips'),
// // //           api.get('/employee/tasks'),
// // //           api.get('/employee/leave-requests'),
// // //         ]);
// // //         setPolicies(policiesRes.data);
// // //         setPayslips(payslipsRes.data);
// // //         setTasks(tasksRes.data);
// // //         setLeaveRequests(leaveRes.data);
// // //       } catch (error) {
// // //         console.error('Error fetching data:', error);
// // //         setError('Failed to fetch data. Please try again later.');
// // //       }
// // //     };
// // //     fetchData();
// // //   }, []);

// // //   const handleApplyLeave = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await api.post('/employee/leave', attendance);
// // //       alert('Leave applied successfully');
// // //       setAttendance({ date: '', status: '' });
// // //       setLeaveRequests([...leaveRequests, response.data.attendance]);
// // //     } catch (error) {
// // //       console.error('Error applying leave:', error);
// // //       setError('Failed to apply leave. Please try again.');
// // //     }
// // //   };

// // //   const handleSubmitGrievance = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await api.post('/employee/grievance', grievance);
// // //       alert('Grievance submitted successfully');
// // //       setGrievance({ title: '', description: '' });
// // //     } catch (error) {
// // //       console.error('Error submitting grievance:', error);
// // //       setError('Failed to submit grievance. Please try again.');
// // //     }
// // //   };

// // //   const handleStatusChange = (taskId, status) => {
// // //     setTaskStatusUpdates((prev) => ({
// // //       ...prev,
// // //       [taskId]: status,
// // //     }));
// // //   };

// // //   const handleUpdateTaskStatus = async (taskId) => {
// // //     const status = taskStatusUpdates[taskId];
// // //     if (!status) {
// // //       setError('Please select a status to update.');
// // //       return;
// // //     }

// // //     try {
// // //       const response = await api.put('/employee/task/status', { taskId, status });
// // //       alert('Task status updated successfully');
// // //       setTasks(tasks.map((task) =>
// // //         task._id === taskId ? { ...task, status } : task
// // //       ));
// // //       // Clear the temporary status update for this task
// // //       setTaskStatusUpdates((prev) => {
// // //         const updated = { ...prev };
// // //         delete updated[taskId];
// // //         return updated;
// // //       });
// // //     } catch (error) {
// // //       console.error('Error updating task status:', error);
// // //       setError(error.response?.data?.message || 'Failed to update task status. Please try again.');
// // //     }
// // //   };

// // //   return (
// // //     <div className="dashboard">
// // //       <h2>Employee Dashboard</h2>

// // //       {error && <div className="error-message">{error}</div>}

// // //       <div>
// // //         <h3>Apply for Leave</h3>
// // //         <form onSubmit={handleApplyLeave}>
// // //           <input
// // //             type="date"
// // //             value={attendance.date}
// // //             onChange={(e) => setAttendance({ ...attendance, date: e.target.value })}
// // //           />
// // //           <select
// // //             value={attendance.status}
// // //             onChange={(e) => setAttendance({ ...attendance, status: 'leave' })}
// // //           >
// // //             <option value="">Select Type</option>
// // //             <option value="leave">Leave</option>
// // //           </select>
// // //           <button type="submit">Apply Leave</button>
// // //         </form>
// // //       </div>

// // //       <div>
// // //         <h3>My Leave Requests</h3>
// // //         {leaveRequests.length === 0 ? (
// // //           <p>No leave requests found.</p>
// // //         ) : (
// // //           <table>
// // //             <thead>
// // //               <tr>
// // //                 <th>Date</th>
// // //                 <th>Status</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {leaveRequests.map((req) => (
// // //                 <tr key={req._id}>
// // //                   <td>{new Date(req.date).toLocaleDateString()}</td>
// // //                   <td>{req.status}</td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         )}
// // //       </div>

// // //       <div>
// // //         <h3>Payslips</h3>
// // //         {payslips.length === 0 ? (
// // //           <p>No payslips found.</p>
// // //         ) : (
// // //           <table>
// // //             <thead>
// // //               <tr>
// // //                 <th>Month</th>
// // //                 <th>Year</th>
// // //                 <th>Basic Salary</th>
// // //                 <th>Bonuses</th>
// // //                 <th>Deductions</th>
// // //                 <th>Net Salary</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {payslips.map((slip) => (
// // //                 <tr key={slip._id}>
// // //                   <td>{slip.month}</td>
// // //                   <td>{slip.year}</td>
// // //                   <td>{slip.basicSalary}</td>
// // //                   <td>{slip.bonuses}</td>
// // //                   <td>{slip.deductions}</td>
// // //                   <td>{slip.netSalary}</td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         )}
// // //       </div>

// // //       <div>
// // //         <h3>Company Policies</h3>
// // //         {policies.length === 0 ? (
// // //           <p>No policies found.</p>
// // //         ) : (
// // //           <ul>
// // //             {policies.map((policy) => (
// // //               <li key={policy._id}>
// // //                 <strong>{policy.title}</strong>: {policy.description}
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         )}
// // //       </div>

// // //       <div>
// // //         <h3>Submit Grievance</h3>
// // //         <form onSubmit={handleSubmitGrievance}>
// // //           <input
// // //             type="text"
// // //             placeholder="Grievance Title"
// // //             value={grievance.title}
// // //             onChange={(e) => setGrievance({ ...grievance, title: e.target.value })}
// // //           />
// // //           <textarea
// // //             placeholder="Description"
// // //             value={grievance.description}
// // //             onChange={(e) => setGrievance({ ...grievance, description: e.target.value })}
// // //           />
// // //           <button type="submit">Submit Grievance</button>
// // //         </form>
// // //       </div>

// // //       <div>
// // //         <h3>My Tasks</h3>
// // //         {tasks.length === 0 ? (
// // //           <p>No tasks found.</p>
// // //         ) : (
// // //           <table>
// // //             <thead>
// // //               <tr>
// // //                 <th>Title</th>
// // //                 <th>Description</th>
// // //                 <th>Due Date</th>
// // //                 <th>Status</th>
// // //                 <th>Update Status</th>
// // //                 <th>Action</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {tasks.map((task) => (
// // //                 <tr key={task._id}>
// // //                   <td>{task.title}</td>
// // //                   <td>{task.description}</td>
// // //                   <td>{new Date(task.dueDate).toLocaleDateString()}</td>
// // //                   <td>{task.status}</td>
// // //                   <td>
// // //                     <select
// // //                       value={taskStatusUpdates[task._id] || task.status}
// // //                       onChange={(e) => handleStatusChange(task._id, e.target.value)}
// // //                     >
// // //                       <option value="pending">Pending</option>
// // //                       <option value="in-progress">In Progress</option>
// // //                       <option value="completed">Completed</option>
// // //                     </select>
// // //                   </td>
// // //                   <td>
// // //                     <button
// // //                       onClick={() => handleUpdateTaskStatus(task._id)}
// // //                       disabled={taskStatusUpdates[task._id] === undefined || taskStatusUpdates[task._id] === task.status}
// // //                     >
// // //                       Submit
// // //                     </button>
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

// // // export default EmployeeDashboard;


// // import React, { useState, useEffect } from 'react';
// // import api from '../utils/api';
// // import '../styles/App.css';

// // const EmployeeDashboard = ({ user }) => {
// //   const [attendance, setAttendance] = useState({ date: '', status: '' });
// //   const [policies, setPolicies] = useState([]);
// //   const [payslips, setPayslips] = useState([]);
// //   const [grievance, setGrievance] = useState({ title: '', description: '' });
// //   const [tasks, setTasks] = useState([]);
// //   const [leaveRequests, setLeaveRequests] = useState([]);
// //   const [error, setError] = useState(null);
// //   const [taskStatusUpdates, setTaskStatusUpdates] = useState({});

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const [policiesRes, payslipsRes, tasksRes, leaveRes] = await Promise.all([
// //           api.get('/employee/policies'),
// //           api.get('/employee/payslips'),
// //           api.get('/employee/tasks'),
// //           api.get('/employee/leave-requests'),
// //         ]);
// //         setPolicies(policiesRes.data);
// //         setPayslips(payslipsRes.data);
// //         setTasks(tasksRes.data);
// //         setLeaveRequests(leaveRes.data);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //         setError(error.response?.data?.message || 'Failed to fetch data. Please try again later.');
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   const handleApplyLeave = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await api.post('/employee/leave', attendance);
// //       alert('Leave applied successfully');
// //       setAttendance({ date: '', status: '' });
// //       setLeaveRequests([...leaveRequests, response.data.attendance]);
// //     } catch (error) {
// //       console.error('Error applying leave:', error);
// //       setError(error.response?.data?.message || 'Failed to apply leave. Please try again.');
// //     }
// //   };

// //   const handleSubmitGrievance = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await api.post('/employee/grievance', grievance);
// //       alert('Grievance submitted successfully');
// //       setGrievance({ title: '', description: '' });
// //     } catch (error) {
// //       console.error('Error submitting grievance:', error);
// //       setError(error.response?.data?.message || 'Failed to submit grievance. Please try again.');
// //     }
// //   };

// //   const handleStatusChange = (taskId, status) => {
// //     setTaskStatusUpdates((prev) => ({
// //       ...prev,
// //       [taskId]: status,
// //     }));
// //   };

// //   const handleUpdateTaskStatus = async (taskId) => {
// //     const status = taskStatusUpdates[taskId];
// //     if (!status) {
// //       setError('Please select a status to update.');
// //       return;
// //     }

// //     try {
// //       const response = await api.put('/employee/task/status', { taskId, status });
// //       alert('Task status updated successfully');
// //       setTasks(tasks.map((task) =>
// //         task._id === taskId ? { ...task, status } : task
// //       ));
// //       setTaskStatusUpdates((prev) => {
// //         const updated = { ...prev };
// //         delete updated[taskId];
// //         return updated;
// //       });
// //     } catch (error) {
// //       console.error('Error updating task status:', error);
// //       if (error.response?.status === 404) {
// //         setError('Task status update endpoint not found. Please check the backend server.');
// //       } else {
// //         setError(error.response?.data?.message || 'Failed to update task status. Please try again.');
// //       }
// //     }
// //   };

// //   return (
// //     <div className="dashboard">
// //       <h2>Employee Dashboard</h2>

// //       {error && <div className="error-message">{error}</div>}

// //       <div>
// //         <h3>Apply for Leave</h3>
// //         <form onSubmit={handleApplyLeave}>
// //           <input
// //             type="date"
// //             value={attendance.date}
// //             onChange={(e) => setAttendance({ ...attendance, date: e.target.value })}
// //           />
// //           <select
// //             value={attendance.status}
// //             onChange={(e) => setAttendance({ ...attendance, status: 'leave' })}
// //           >
// //             <option value="">Select Type</option>
// //             <option value="leave">Leave</option>
// //           </select>
// //           <button type="submit">Apply Leave</button>
// //         </form>
// //       </div>

// //       <div>
// //         <h3>My Leave Requests</h3>
// //         {leaveRequests.length === 0 ? (
// //           <p>No leave requests found.</p>
// //         ) : (
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>Date</th>
// //                 <th>Status</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {leaveRequests.map((req) => (
// //                 <tr key={req._id}>
// //                   <td>{new Date(req.date).toLocaleDateString()}</td>
// //                   <td>{req.status}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         )}
// //       </div>

// //       <div>
// //         <h3>Payslips</h3>
// //         {payslips.length === 0 ? (
// //           <p>No payslips found.</p>
// //         ) : (
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>Month</th>
// //                 <th>Year</th>
// //                 <th>Basic Salary</th>
// //                 <th>Bonuses</th>
// //                 <th>Deductions</th>
// //                 <th>Net Salary</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {payslips.map((slip) => (
// //                 <tr key={slip._id}>
// //                   <td>{slip.month}</td>
// //                   <td>{slip.year}</td>
// //                   <td>{slip.basicSalary}</td>
// //                   <td>{slip.bonuses}</td>
// //                   <td>{slip.deductions}</td>
// //                   <td>{slip.netSalary}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         )}
// //       </div>

// //       <div>
// //         <h3>Company Policies</h3>
// //         {policies.length === 0 ? (
// //           <p>No policies found.</p>
// //         ) : (
// //           <ul>
// //             {policies.map((policy) => (
// //               <li key={policy._id}>
// //                 <strong>{policy.title}</strong>: {policy.description}
// //               </li>
// //             ))}
// //           </ul>
// //         )}
// //       </div>

// //       <div>
// //         <h3>Submit Grievance</h3>
// //         <form onSubmit={handleSubmitGrievance}>
// //           <input
// //             type="text"
// //             placeholder="Grievance Title"
// //             value={grievance.title}
// //             onChange={(e) => setGrievance({ ...grievance, title: e.target.value })}
// //           />
// //           <textarea
// //             placeholder="Description"
// //             value={grievance.description}
// //             onChange={(e) => setGrievance({ ...grievance, description: e.target.value })}
// //           />
// //           <button type="submit">Submit Grievance</button>
// //         </form>
// //       </div>

// //       <div>
// //         <h3>My Tasks</h3>
// //         {tasks.length === 0 ? (
// //           <p>No tasks found.</p>
// //         ) : (
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>Title</th>
// //                 <th>Description</th>
// //                 <th>Due Date</th>
// //                 <th>Status</th>
// //                 <th>Update Status</th>
// //                 <th>Action</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {tasks.map((task) => (
// //                 <tr key={task._id}>
// //                   <td>{task.title}</td>
// //                   <td>{task.description}</td>
// //                   <td>{new Date(task.dueDate).toLocaleDateString()}</td>
// //                   <td>{task.status}</td>
// //                   <td>
// //                     <select
// //                       value={taskStatusUpdates[task._id] || task.status}
// //                       onChange={(e) => handleStatusChange(task._id, e.target.value)}
// //                     >
// //                       <option value="pending">Pending</option>
// //                       <option value="in-progress">In Progress</option>
// //                       <option value="completed">Completed</option>
// //                     </select>
// //                   </td>
// //                   <td>
// //                     <button
// //                       onClick={() => handleUpdateTaskStatus(task._id)}
// //                       disabled={taskStatusUpdates[task._id] === undefined || taskStatusUpdates[task._id] === task.status}
// //                     >
// //                       Submit
// //                     </button>
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

// // export default EmployeeDashboard;



// import React, { useState, useEffect } from 'react';
// import api from '../utils/api';
// import '../styles/App.css';

// const EmployeeDashboard = ({ user }) => {
//   const [attendance, setAttendance] = useState({ date: '', status: '' });
//   const [policies, setPolicies] = useState([]);
//   const [payslips, setPayslips] = useState([]);
//   const [grievance, setGrievance] = useState({ title: '', description: '' });
//   const [tasks, setTasks] = useState([]);
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [error, setError] = useState(null);
//   const [taskStatusUpdates, setTaskStatusUpdates] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [policiesRes, payslipsRes, tasksRes, leaveRes] = await Promise.all([
//           api.get('/employee/policies'),
//           api.get('/employee/payslips'),
//           api.get('/employee/tasks'),
//           api.get('/employee/leave-requests'),
//         ]);
//         setPolicies(policiesRes.data);
//         setPayslips(payslipsRes.data);
//         setTasks(tasksRes.data);
//         setLeaveRequests(leaveRes.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(error.response?.data?.message || 'Failed to fetch data. Please try again later.');
//       }
//     };
//     fetchData();
//   }, []);

//   const handleApplyLeave = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await api.post('/employee/leave', attendance);
//       alert('Leave applied successfully');
//       setAttendance({ date: '', status: '' });
//       setLeaveRequests([...leaveRequests, response.data.attendance]);
//     } catch (error) {
//       console.error('Error applying leave:', error);
//       setError(error.response?.data?.message || 'Failed to apply leave. Please try again.');
//     }
//   };

//   const handleSubmitGrievance = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post('/employee/grievance', grievance);
//       alert('Grievance submitted successfully');
//       setGrievance({ title: '', description: '' });
//     } catch (error) {
//       console.error('Error submitting grievance:', error);
//       setError(error.response?.data?.message || 'Failed to submit grievance. Please try again.');
//     }
//   };

//   const handleStatusChange = (taskId, status) => {
//     setTaskStatusUpdates((prev) => ({
//       ...prev,
//       [taskId]: status,
//     }));
//   };

//   const handleUpdateTaskStatus = async (taskId) => {
//     const status = taskStatusUpdates[taskId];
//     if (!status) {
//       setError('Please select a status to update.');
//       return;
//     }

//     try {
//       const response = await api.put('/employee/task/status', { taskId, status });
//       alert('Task status updated successfully');
//       setTasks(tasks.map((task) =>
//         task._id === taskId ? { ...task, status } : task
//       ));
//       setTaskStatusUpdates((prev) => {
//         const updated = { ...prev };
//         delete updated[taskId];
//         return updated;
//       });
//     } catch (error) {
//       console.error('Error updating task status:', error);
//       if (error.response?.status === 404) {
//         setError('Task status update endpoint not found. Please check the backend server.');
//       } else {
//         setError(error.response?.data?.message || 'Failed to update task status. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="dashboard">
//       <h2>Employee Dashboard</h2>

//       {error && <div className="error-message">{error}</div>}

//       <div>
//         <h3>Apply for Leave</h3>
//         <form onSubmit={handleApplyLeave}>
//           <input
//             type="date"
//             value={attendance.date}
//             onChange={(e) => setAttendance({ ...attendance, date: e.target.value })}
//           />
//           <select
//             value={attendance.status}
//             onChange={(e) => setAttendance({ ...attendance, status: 'leave' })}
//           >
//             <option value="">Select Type</option>
//             <option value="leave">Leave</option>
//           </select>
//           <button type="submit">Apply Leave</button>
//         </form>
//       </div>

//       <div>
//         <h3>My Leave Requests</h3>
//         {leaveRequests.length === 0 ? (
//           <p>No leave requests found.</p>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {leaveRequests.map((req) => (
//                 <tr key={req._id}>
//                   <td>{new Date(req.date).toLocaleDateString()}</td>
//                   <td>{req.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       <div>
//         <h3>Payslips</h3>
//         {payslips.length === 0 ? (
//           <p>No payslips found.</p>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>Month</th>
//                 <th>Year</th>
//                 <th>Basic Salary</th>
//                 <th>Bonuses</th>
//                 <th>Deductions</th>
//                 <th>Net Salary</th>
//               </tr>
//             </thead>
//             <tbody>
//               {payslips.map((slip) => (
//                 <tr key={slip._id}>
//                   <td>{slip.month}</td>
//                   <td>{slip.year}</td>
//                   <td>{slip.basicSalary}</td>
//                   <td>{slip.bonuses}</td>
//                   <td>{slip.deductions}</td>
//                   <td>{slip.netSalary}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       <div>
//         <h3>Company Policies</h3>
//         {policies.length === 0 ? (
//           <p>No policies found.</p>
//         ) : (
//           <ul>
//             {policies.map((policy) => (
//               <li key={policy._id}>
//                 <strong>{policy.title}</strong>: {policy.description}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <div>
//         <h3>Submit Grievance</h3>
//         <form onSubmit={handleSubmitGrievance}>
//           <input
//             type="text"
//             placeholder="Grievance Title"
//             value={grievance.title}
//             onChange={(e) => setGrievance({ ...grievance, title: e.target.value })}
//           />
//           <textarea
//             placeholder="Description"
//             value={grievance.description}
//             onChange={(e) => setGrievance({ ...grievance, description: e.target.value })}
//           />
//           <button type="submit">Submit Grievance</button>
//         </form>
//       </div>

//       <div>
//         <h3>My Tasks</h3>
//         {tasks.length === 0 ? (
//           <p>No tasks found.</p>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th>Due Date</th>
//                 <th>Status</th>
//                 <th>Update Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tasks.map((task) => (
//                 <tr key={task._id}>
//                   <td>{task.title}</td>
//                   <td>{task.description}</td>
//                   <td>{new Date(task.dueDate).toLocaleDateString()}</td>
//                   <td>{task.status}</td>
//                   <td>
//                     <select
//                       value={taskStatusUpdates[task._id] || task.status}
//                       onChange={(e) => handleStatusChange(task._id, e.target.value)}
//                     >
//                       <option value="pending">Pending</option>
//                       <option value="in-progress">In Progress</option>
//                       <option value="completed">Completed</option>
//                     </select>
//                   </td>
//                   <td>
//                     <button
//                       onClick={() => handleUpdateTaskStatus(task._id)}
//                       disabled={taskStatusUpdates[task._id] === undefined || taskStatusUpdates[task._id] === task.status}
//                     >
//                       Submit
//                     </button>
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

// export default EmployeeDashboard;

import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import '../styles/App.css';

const EmployeeDashboard = ({ user }) => {
  const [attendance, setAttendance] = useState({ date: '', status: '' });
  const [policies, setPolicies] = useState([]);
  const [payslips, setPayslips] = useState([]);
  const [grievance, setGrievance] = useState({ title: '', description: '' });
  const [tasks, setTasks] = useState([]);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [error, setError] = useState(null);
  const [taskStatusUpdates, setTaskStatusUpdates] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [policiesRes, payslipsRes, tasksRes, leaveRes] = await Promise.all([
          api.get('/employee/policies'),
          api.get('/employee/payslips'),
          api.get('/employee/tasks'),
          api.get('/employee/leave-requests'),
        ]);
        setPolicies(policiesRes.data);
        setPayslips(payslipsRes.data);
        setTasks(tasksRes.data);
        setLeaveRequests(leaveRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.response?.data?.message || 'Failed to fetch data. Please try again later.');
      }
    };
    fetchData();
  }, []);

  const handleApplyLeave = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/employee/leave', attendance);
      alert('Leave applied successfully');
      setAttendance({ date: '', status: '' });
      setLeaveRequests([...leaveRequests, response.data.attendance]);
    } catch (error) {
      console.error('Error applying leave:', error);
      setError(error.response?.data?.message || 'Failed to apply leave. Please try again.');
    }
  };

  const handleSubmitGrievance = async (e) => {
    e.preventDefault();
    try {
      await api.post('/employee/grievance', grievance);
      alert('Grievance submitted successfully');
      setGrievance({ title: '', description: '' });
    } catch (error) {
      console.error('Error submitting grievance:', error);
      setError(error.response?.data?.message || 'Failed to submit grievance. Please try again.');
    }
  };

  const handleStatusChange = (taskId, status) => {
    setTaskStatusUpdates((prev) => ({
      ...prev,
      [taskId]: status,
    }));
  };

  const handleUpdateTaskStatus = async (taskId) => {
    const status = taskStatusUpdates[taskId];
    if (!status) {
      setError('Please select a status to update.');
      return;
    }

    try {
      const response = await api.put('/employee/task/status', { taskId, status });
      alert('Task status updated successfully');
      setTasks(tasks.map((task) =>
        task._id === taskId ? { ...task, status } : task
      ));
      setTaskStatusUpdates((prev) => {
        const updated = { ...prev };
        delete updated[taskId];
        return updated;
      });
    } catch (error) {
      console.error('Error updating task status:', error);
      if (error.response?.status === 404) {
        setError('Task status update endpoint not found. Please ensure the backend server is running and the route is defined.');
      } else {
        setError(error.response?.data?.message || 'Failed to update task status. Please try again.');
      }
    }
  };

  return (
    <div className="dashboard">
      <h2>Employee Dashboard</h2>

      {error && <div className="error-message">{error}</div>}

      <div>
        <h3>Apply for Leave</h3>
        <form onSubmit={handleApplyLeave}>
          <input
            type="date"
            value={attendance.date}
            onChange={(e) => setAttendance({ ...attendance, date: e.target.value })}
          />
          <select
            value={attendance.status}
            onChange={(e) => setAttendance({ ...attendance, status: 'leave' })}
          >
            <option value="">Select Type</option>
            <option value="leave">Leave</option>
          </select>
          <button type="submit">Apply Leave</button>
        </form>
      </div>

      <div>
        <h3>My Leave Requests</h3>
        {leaveRequests.length === 0 ? (
          <p>No leave requests found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((req) => (
                <tr key={req._id}>
                  <td>{new Date(req.date).toLocaleDateString()}</td>
                  <td>{req.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div>
        <h3>Payslips</h3>
        {payslips.length === 0 ? (
          <p>No payslips found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Year</th>
                <th>Basic Salary</th>
                <th>Bonuses</th>
                <th>Deductions</th>
                <th>Net Salary</th>
              </tr>
            </thead>
            <tbody>
              {payslips.map((slip) => (
                <tr key={slip._id}>
                  <td>{slip.month}</td>
                  <td>{slip.year}</td>
                  <td>{slip.basicSalary}</td>
                  <td>{slip.bonuses}</td>
                  <td>{slip.deductions}</td>
                  <td>{slip.netSalary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div>
        <h3>Company Policies</h3>
        {policies.length === 0 ? (
          <p>No policies found.</p>
        ) : (
          <ul>
            {policies.map((policy) => (
              <li key={policy._id}>
                <strong>{policy.title}</strong>: {policy.description}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h3>Submit Grievance</h3>
        <form onSubmit={handleSubmitGrievance}>
          <input
            type="text"
            placeholder="Grievance Title"
            value={grievance.title}
            onChange={(e) => setGrievance({ ...grievance, title: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={grievance.description}
            onChange={(e) => setGrievance({ ...grievance, description: e.target.value })}
          />
          <button type="submit">Submit Grievance</button>
        </form>
      </div>

      <div>
        <h3>My Tasks</h3>
        {tasks.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Update Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task._id}>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{new Date(task.dueDate).toLocaleDateString()}</td>
                  <td>{task.status}</td>
                  <td>
                    <select
                      value={taskStatusUpdates[task._id] || task.status}
                      onChange={(e) => handleStatusChange(task._id, e.target.value)}
                    >
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                  <td>
                    <button
                      onClick={() => handleUpdateTaskStatus(task._id)}
                      disabled={taskStatusUpdates[task._id] === undefined || taskStatusUpdates[task._id] === task.status}
                    >
                      Submit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default EmployeeDashboard;