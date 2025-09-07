const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to read JSON files
const readJSONFile = (filename) => {
  try {
    const filePath = path.join(__dirname, '..', 'data', filename);
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return [];
  }
};

// ============================================================================
// INTERVIEW CHALLENGE ENDPOINTS
// ============================================================================

// 📚 CHALLENGE 1: Basic API endpoint
// TODO: Create a GET endpoint at /api/courses that returns all courses
// Hint: Use readJSONFile('courses.json') to get the data
app.get('/api/courses', (req, res) => {
  // YOUR CODE HERE
  // Expected: Return all courses from data/courses.json
  res.status(501).json({ error: 'Not implemented yet' });
});

// 📊 CHALLENGE 2: Filtering and search
// TODO: Create a GET endpoint at /api/courses/search that accepts query parameters:
// - category: filter by course category
// - difficulty: filter by difficulty level
// - search: search in title and description
app.get('/api/courses/search', (req, res) => {
  // YOUR CODE HERE
  // Expected: Filter courses based on query parameters
  // Example: /api/courses/search?category=Frontend&difficulty=Beginner
  res.status(501).json({ error: 'Not implemented yet' });
});

// 🔢 CHALLENGE 3: Data processing
// TODO: Create a POST endpoint at /api/top-two that:
// - Accepts an array of numbers in the request body
// - Returns the two highest numbers
// - Handles edge cases (empty array, less than 2 numbers, etc.)
app.post('/api/top-two', (req, res) => {
  // YOUR CODE HERE
  // Expected input: { "numbers": [5, 2, 8, 1, 9, 3] }
  // Expected output: { "topTwo": [9, 8] }
  res.status(501).json({ error: 'Not implemented yet' });
});

// 👥 CHALLENGE 4: Employee management
// TODO: Create CRUD endpoints for employees:
// GET /api/employees - get all employees
// GET /api/employees/:id - get employee by ID
// POST /api/employees - create new employee
// PUT /api/employees/:id - update employee
// DELETE /api/employees/:id - delete employee

app.get('/api/employees', (req, res) => {
  // YOUR CODE HERE
  res.status(501).json({ error: 'Not implemented yet' });
});

app.get('/api/employees/:id', (req, res) => {
  // YOUR CODE HERE
  res.status(501).json({ error: 'Not implemented yet' });
});

app.post('/api/employees', (req, res) => {
  // YOUR CODE HERE
  res.status(501).json({ error: 'Not implemented yet' });
});

app.put('/api/employees/:id', (req, res) => {
  // YOUR CODE HERE
  res.status(501).json({ error: 'Not implemented yet' });
});

app.delete('/api/employees/:id', (req, res) => {
  // YOUR CODE HERE
  res.status(501).json({ error: 'Not implemented yet' });
});

// 📋 CHALLENGE 5: Task management with statistics
// TODO: Create endpoints for task management:
// GET /api/tasks - get all tasks
// GET /api/tasks/stats - get task statistics (count by status, priority, etc.)
app.get('/api/tasks', (req, res) => {
  // YOUR CODE HERE
  res.status(501).json({ error: 'Not implemented yet' });
});

app.get('/api/tasks/stats', (req, res) => {
  // YOUR CODE HERE
  // Expected output example:
  // {
  //   "totalTasks": 4,
  //   "byStatus": { "completed": 1, "in-progress": 2, "pending": 1 },
  //   "byPriority": { "high": 2, "medium": 1, "low": 1 }
  // }
  res.status(501).json({ error: 'Not implemented yet' });
});

// ============================================================================
// SAMPLE SOLUTION ENDPOINTS (for reference/testing)
// ============================================================================

// Sample working endpoint for reference
app.get('/api/sample/courses', (req, res) => {
  const courses = readJSONFile('courses.json');
  res.json(courses);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Backend server is running',
    timestamp: new Date().toISOString(),
    endpoints: [
      'GET /api/courses',
      'GET /api/courses/search',
      'POST /api/top-two', 
      'GET /api/employees',
      'GET /api/tasks',
      'GET /api/tasks/stats'
    ]
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📋 Health check: http://localhost:${PORT}/health`);
  console.log('💡 Complete the TODO endpoints to pass the interview challenges!');
});

module.exports = app;