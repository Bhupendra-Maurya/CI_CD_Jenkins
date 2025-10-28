const express = require('express');
const app = express();
app.use(express.json());

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Export app for testing
module.exports = app;

// Start server only if run directly
if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
