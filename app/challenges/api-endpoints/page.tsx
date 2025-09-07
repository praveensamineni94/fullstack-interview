'use client';

import { useState } from 'react';
import Link from 'next/link';

// ⚙️ CHALLENGE: API Endpoints
// 
// YOUR TASKS:
// 1. Complete the backend endpoints in /backend/server.js
// 2. Test each endpoint using the interface below
// 3. Handle different HTTP methods (GET, POST, PUT, DELETE)
// 4. Implement proper error handling
// 5. Add data validation
//
// ENDPOINTS TO IMPLEMENT:
// - GET /api/courses - get all courses
// - GET /api/courses/search - search courses with filters
// - POST /api/top-two - find top two numbers from array
// - GET /api/employees - get all employees
// - POST /api/employees - create new employee
// - GET /api/tasks/stats - get task statistics
//
// REQUIREMENTS:
// - Proper HTTP status codes
// - JSON responses
// - Error handling
// - Input validation

interface TestResult {
  endpoint: string;
  method: string;
  status: number;
  response: any;
  error?: string;
}

export default function APIEndpointsChallenge() {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState<string | null>(null);
  const [topTwoInput, setTopTwoInput] = useState('[5, 2, 8, 1, 9, 3]');

  const BASE_URL = 'http://localhost:3001';

  const testEndpoint = async (endpoint: string, method: string = 'GET', body?: any) => {
    setLoading(endpoint);
    try {
      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (body) {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(`${BASE_URL}${endpoint}`, options);
      const data = await response.json();
      
      const result: TestResult = {
        endpoint,
        method,
        status: response.status,
        response: data,
      };

      if (!response.ok) {
        result.error = `HTTP ${response.status}: ${response.statusText}`;
      }

      setTestResults(prev => [result, ...prev.slice(0, 9)]); // Keep last 10 results
    } catch (error) {
      const result: TestResult = {
        endpoint,
        method,
        status: 0,
        response: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
      setTestResults(prev => [result, ...prev.slice(0, 9)]);
    } finally {
      setLoading(null);
    }
  };

  const testTopTwo = () => {
    try {
      const numbers = JSON.parse(topTwoInput);
      if (!Array.isArray(numbers)) {
        alert('Input must be an array');
        return;
      }
      testEndpoint('/api/top-two', 'POST', { numbers });
    } catch (error) {
      alert('Invalid JSON format');
    }
  };

  const clearResults = () => setTestResults([]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">API Endpoints Challenge</h1>
            <p className="text-gray-600">Create and test REST API endpoints</p>
          </div>
          <Link 
            href="/" 
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
          >
            ← Back to Challenges
          </Link>
        </div>
        
        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 mb-2">📝 Your Tasks:</h3>
          <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
            <li>Open <code className="bg-blue-100 px-1 rounded">/backend/server.js</code></li>
            <li>Complete the TODO endpoints (look for "YOUR CODE HERE")</li>
            <li>Start the backend: <code className="bg-blue-100 px-1 rounded">npm run backend</code></li>
            <li>Test your endpoints using the buttons below</li>
            <li>All tests should return HTTP 200 with proper data</li>
          </ol>
        </div>
      </div>

      {/* Server Status */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Server Status</h3>
        <button
          onClick={() => testEndpoint('/health')}
          disabled={loading === '/health'}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
        >
          {loading === '/health' ? 'Testing...' : 'Test Server Health'}
        </button>
        <p className="text-sm text-gray-600 mt-2">
          Make sure your backend is running on http://localhost:3001
        </p>
      </div>

      {/* Endpoint Tests */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Basic Endpoints */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-green-600 mb-4">📚 Course Endpoints</h3>
          <div className="space-y-3">
            <button
              onClick={() => testEndpoint('/api/courses')}
              disabled={loading === '/api/courses'}
              className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
            >
              {loading === '/api/courses' ? 'Testing...' : 'GET /api/courses'}
            </button>
            
            <button
              onClick={() => testEndpoint('/api/courses/search?category=Frontend&difficulty=Beginner')}
              disabled={loading === '/api/courses/search?category=Frontend&difficulty=Beginner'}
              className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
            >
              {loading === '/api/courses/search?category=Frontend&difficulty=Beginner' ? 'Testing...' : 'GET /api/courses/search (with filters)'}
            </button>
          </div>
        </div>

        {/* Data Processing */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-blue-600 mb-4">🔢 Data Processing</h3>
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Number Array (JSON format)
            </label>
            <input
              type="text"
              value={topTwoInput}
              onChange={(e) => setTopTwoInput(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="[5, 2, 8, 1, 9, 3]"
            />
            <button
              onClick={testTopTwo}
              disabled={loading === '/api/top-two'}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {loading === '/api/top-two' ? 'Testing...' : 'POST /api/top-two'}
            </button>
          </div>
        </div>

        {/* Employee Management */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-purple-600 mb-4">👥 Employee Management</h3>
          <div className="space-y-3">
            <button
              onClick={() => testEndpoint('/api/employees')}
              disabled={loading === '/api/employees'}
              className="w-full bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 disabled:opacity-50"
            >
              {loading === '/api/employees' ? 'Testing...' : 'GET /api/employees'}
            </button>
            
            <button
              onClick={() => testEndpoint('/api/employees/1')}
              disabled={loading === '/api/employees/1'}
              className="w-full bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 disabled:opacity-50"
            >
              {loading === '/api/employees/1' ? 'Testing...' : 'GET /api/employees/1'}
            </button>
            
            <button
              onClick={() => testEndpoint('/api/employees', 'POST', {
                name: 'Test Employee',
                email: 'test@example.com',
                department: 'Engineering',
                position: 'Developer'
              })}
              disabled={loading === '/api/employees'}
              className="w-full bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 disabled:opacity-50"
            >
              {loading === '/api/employees' ? 'Testing...' : 'POST /api/employees (create)'}
            </button>
          </div>
        </div>

        {/* Task Statistics */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-orange-600 mb-4">📊 Task Statistics</h3>
          <div className="space-y-3">
            <button
              onClick={() => testEndpoint('/api/tasks')}
              disabled={loading === '/api/tasks'}
              className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 disabled:opacity-50"
            >
              {loading === '/api/tasks' ? 'Testing...' : 'GET /api/tasks'}
            </button>
            
            <button
              onClick={() => testEndpoint('/api/tasks/stats')}
              disabled={loading === '/api/tasks/stats'}
              className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 disabled:opacity-50"
            >
              {loading === '/api/tasks/stats' ? 'Testing...' : 'GET /api/tasks/stats'}
            </button>
          </div>
        </div>
      </div>

      {/* Test Results */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Test Results</h3>
          <button
            onClick={clearResults}
            className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600"
          >
            Clear Results
          </button>
        </div>
        
        {testResults.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No tests run yet. Click the buttons above to test your endpoints!</p>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {testResults.map((result, index) => (
              <div
                key={index}
                className={`border rounded-lg p-4 ${
                  result.error 
                    ? 'border-red-300 bg-red-50' 
                    : result.status >= 200 && result.status < 300
                    ? 'border-green-300 bg-green-50'
                    : 'border-yellow-300 bg-yellow-50'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="font-semibold">{result.method}</span>
                    <span className="ml-2 font-mono text-sm">{result.endpoint}</span>
                  </div>
                  <span className={`px-2 py-1 rounded text-sm ${
                    result.status >= 200 && result.status < 300
                      ? 'bg-green-100 text-green-800'
                      : result.status >= 400
                      ? 'bg-red-100 text-red-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {result.status || 'Error'}
                  </span>
                </div>
                
                {result.error && (
                  <div className="text-red-700 text-sm mb-2">
                    <strong>Error:</strong> {result.error}
                  </div>
                )}
                
                {result.response && (
                  <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
                    {JSON.stringify(result.response, null, 2)}
                  </pre>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}