const http = require('http');
const app = require('./app');
const { connectDB } = require('./utils/db');
const { sequelize } = require('./utils/db');

const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

// Sync all models
sequelize.sync().then(() => {
  // Create and start the server
  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Unable to sync database:', err);
});
