// // require('dotenv').config();
// // const express = require('express');
// // const cors = require('cors');
// // const connectDB = require('./config/db');
// // const authRoutes = require('./routes/auth');
// // const adminRoutes = require('./routes/admin');
// // const hrRoutes = require('./routes/hr');
// // const employeeRoutes = require('./routes/employee');
// // const path = require('path');

// // const app = express();

// // app.use(cors({
// //   origin: 'http://localhost:5173',
// //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
// //   allowedHeaders: ['Content-Type', 'Authorization'],
// //   credentials: true,
// // }));

// // app.use(express.json());

// // // Serve uploaded images statically
// // app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // connectDB();

// // app.use('/api/auth', authRoutes);
// // app.use('/api/admin', adminRoutes);
// // app.use('/api/hr', hrRoutes);
// // app.use('/api/employee', employeeRoutes);

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });



// // require('dotenv').config();
// // const express = require('express');
// // const cors = require('cors');
// // const connectDB = require('./config/db');
// // const authRoutes = require('./routes/auth');
// // const adminRoutes = require('./routes/admin');
// // const hrRoutes = require('./routes/hr');
// // const employeeRoutes = require('./routes/employee');
// // const path = require('path');

// // const app = express();

// // app.use(cors({
// //   origin: 'http://localhost:5173',
// //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
// //   allowedHeaders: ['Content-Type', 'Authorization'],
// //   credentials: true,
// // }));

// // app.use(express.json());

// // // Serve uploaded images statically
// // app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // connectDB();

// // // Register routes
// // app.use('/api/auth', authRoutes);
// // app.use('/api/admin', adminRoutes);
// // app.use('/api/hr', hrRoutes);
// // app.use('/api/employee', employeeRoutes); // Ensure this line exists

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });



// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/auth');
// const adminRoutes = require('./routes/admin');
// const hrRoutes = require('./routes/hr');
// const employeeRoutes = require('./routes/employee');
// const path = require('path');

// const app = express();

// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true,
// }));

// app.use(express.json());

// // Serve uploaded images statically
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// connectDB();

// // Register routes
// app.use('/api/auth', authRoutes);
// app.use('/api/admin', adminRoutes);
// app.use('/api/hr', hrRoutes);
// app.use('/api/employee', employeeRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const hrRoutes = require('./routes/hr');
const employeeRoutes = require('./routes/employee');
const path = require('path');

const app = express();


app.use(cors())

// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true,
// }));

app.use(express.json());

// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

connectDB();

// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/hr', hrRoutes);
app.use('/api/employee', employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});