'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// 🔗 CHALLENGE: Employee Dashboard (Full-Stack)
// 
// YOUR TASKS:
// 1. Connect frontend to backend APIs
// 2. Display employee data from the API
// 3. Implement CRUD operations
// 4. Add real-time data updates
// 5. Create a responsive dashboard layout
//
// REQUIREMENTS:
// - Use both frontend and backend skills
// - Implement proper error handling
// - Add loading states
// - Show data statistics
// - Handle form validation

interface Employee {
  id: number;
  name: string;
  email: string;
  age: number;
  department: string;
  position: string;
  salary: number;
}

export default function EmployeeDashboardChallenge() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    department: '',
    position: '',
    salary: ''
  });

  const BASE_URL = 'http://localhost:3001';

  // TODO: Implement data fetching
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      setError('');
      
      // TODO: Replace with actual API call to /api/employees
      const response = await fetch(`${BASE_URL}/api/employees`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }
      
      const data = await response.json();
      setEmployees(data);
    } catch (err) {
      setError('Failed to load employees. Make sure the backend is running.');
      console.error('Error fetching employees:', err);
      
      // Fallback sample data for development
      setEmployees([
        {
          id: 1,
          name: "Alice Johnson",
          email: "alice@example.com",
          age: 28,
          department: "Engineering",
          position: "Senior Developer",
          salary: 95000
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // TODO: Implement employee creation
  const createEmployee = async (employeeData: Omit<Employee, 'id'>) => {
    try {
      // YOUR CODE HERE
      // Send POST request to /api/employees
      const response = await fetch(`${BASE_URL}/api/employees`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
      });

      if (!response.ok) {
        throw new Error('Failed to create employee');
      }

      const newEmployee = await response.json();
      setEmployees(prev => [...prev, newEmployee]);
      resetForm();
    } catch (err) {
      setError('Failed to create employee');
      console.error('Error creating employee:', err);
    }
  };

  // TODO: Implement employee update
  const updateEmployee = async (id: number, employeeData: Partial<Employee>) => {
    try {
      // YOUR CODE HERE
      // Send PUT request to /api/employees/:id
      const response = await fetch(`${BASE_URL}/api/employees/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
      });

      if (!response.ok) {
        throw new Error('Failed to update employee');
      }

      const updatedEmployee = await response.json();
      setEmployees(prev => prev.map(emp => emp.id === id ? updatedEmployee : emp));
      resetForm();
    } catch (err) {
      setError('Failed to update employee');
      console.error('Error updating employee:', err);
    }
  };

  // TODO: Implement employee deletion
  const deleteEmployee = async (id: number) => {
    if (!confirm('Are you sure you want to delete this employee?')) {
      return;
    }

    try {
      // YOUR CODE HERE
      // Send DELETE request to /api/employees/:id
      const response = await fetch(`${BASE_URL}/api/employees/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete employee');
      }

      setEmployees(prev => prev.filter(emp => emp.id !== id));
    } catch (err) {
      setError('Failed to delete employee');
      console.error('Error deleting employee:', err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Add form validation
    const employeeData = {
      name: formData.name,
      email: formData.email,
      age: parseInt(formData.age),
      department: formData.department,
      position: formData.position,
      salary: parseInt(formData.salary)
    };

    if (editingEmployee) {
      updateEmployee(editingEmployee.id, employeeData);
    } else {
      createEmployee(employeeData);
    }
  };

  const startEdit = (employee: Employee) => {
    setEditingEmployee(employee);
    setFormData({
      name: employee.name,
      email: employee.email,
      age: employee.age.toString(),
      department: employee.department,
      position: employee.position,
      salary: employee.salary.toString()
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      age: '',
      department: '',
      position: '',
      salary: ''
    });
    setEditingEmployee(null);
    setShowForm(false);
  };

  // Calculate statistics
  const stats = {
    total: employees.length,
    departments: Array.from(new Set(employees.map(emp => emp.department))).length,
    avgSalary: employees.length > 0 ? Math.round(employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length) : 0,
    avgAge: employees.length > 0 ? Math.round(employees.reduce((sum, emp) => sum + emp.age, 0) / employees.length) : 0,
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Employee Dashboard</h1>
            <p className="text-gray-600">Full-stack CRUD operations</p>
          </div>
          <Link 
            href="/" 
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
          >
            ← Back to Challenges
          </Link>
        </div>
        
        {/* Instructions */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h3 className="font-semibold text-purple-800 mb-2">📝 Your Tasks:</h3>
          <ol className="text-sm text-purple-700 space-y-1 list-decimal list-inside">
            <li>Complete the backend employee endpoints in <code className="bg-purple-100 px-1 rounded">/backend/server.js</code></li>
            <li>Implement the CRUD operations in this component</li>
            <li>Add proper form validation</li>
            <li>Test all functionality (Create, Read, Update, Delete)</li>
            <li>Make sure the statistics update in real-time</li>
          </ol>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
          <button 
            onClick={() => setError('')}
            className="ml-2 text-red-800 hover:text-red-900"
          >
            ×
          </button>
        </div>
      )}

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-blue-600">{stats.total}</div>
          <div className="text-gray-600">Total Employees</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-green-600">{stats.departments}</div>
          <div className="text-gray-600">Departments</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-purple-600">${stats.avgSalary.toLocaleString()}</div>
          <div className="text-gray-600">Avg Salary</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-orange-600">{stats.avgAge}</div>
          <div className="text-gray-600">Avg Age</div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Employee List</h2>
        <div className="space-x-2">
          <button
            onClick={fetchEmployees}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Refresh
          </button>
          <button
            onClick={() => setShowForm(true)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
          >
            Add Employee
          </button>
        </div>
      </div>

      {/* Employee Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">
              {editingEmployee ? 'Edit Employee' : 'Add New Employee'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                  <input
                    type="number"
                    required
                    min="18"
                    max="100"
                    value={formData.age}
                    onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={formData.salary}
                    onChange={(e) => setFormData(prev => ({ ...prev, salary: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <select
                  required
                  value={formData.department}
                  onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select Department</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Design">Design</option>
                  <option value="Product">Product</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                <input
                  type="text"
                  required
                  value={formData.position}
                  onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="flex justify-end space-x-2 pt-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors"
                >
                  {editingEmployee ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Employee Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employees.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                    <div className="text-sm text-gray-500">Age: {employee.age}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.department}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.position}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${employee.salary.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                  <button
                    onClick={() => startEdit(employee)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteEmployee(employee.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {employees.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No employees found. Add some employees to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}