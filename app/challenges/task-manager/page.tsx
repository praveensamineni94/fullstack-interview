'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// 📋 CHALLENGE: Task Manager
// 
// YOUR TASKS:
// 1. Fetch task data from /data/tasks.json
// 2. Display tasks in a clean interface
// 3. Add filtering by status and priority
// 4. Add task status update functionality
// 5. Implement task search
// 6. Show task statistics
//
// REQUIREMENTS:
// - Use React hooks for state management
// - Implement multiple filters that work together
// - Style with Tailwind CSS
// - Handle loading and error states
//
// BONUS POINTS:
// - Add task creation functionality
// - Implement drag-and-drop status updates
// - Add due date sorting

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  assignee: string;
  createdAt: string;
  dueDate: string;
}

export default function TaskManagerChallenge() {
  // TODO: Add state for tasks, loading, error, filters
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Filter states - YOU NEED TO IMPLEMENT THESE
  const [statusFilter, setStatusFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // TODO: Implement useEffect to fetch tasks
  useEffect(() => {
    // YOUR CODE HERE
    // Fetch data from /data/tasks.json
    
    const fetchTasks = async () => {
      try {
        setLoading(true);
        // TODO: Replace with actual fetch implementation
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading
        
        // Sample data - replace with actual fetch
        const sampleTasks: Task[] = [
          {
            id: 1,
            title: "Implement User Authentication",
            description: "Create login and registration functionality",
            status: "in-progress",
            priority: "high",
            assignee: "Alice Johnson",
            createdAt: "2024-01-15T10:00:00Z",
            dueDate: "2024-02-01T17:00:00Z"
          }
        ];
        
        setTasks(sampleTasks);
      } catch (err) {
        setError('Failed to load tasks');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // TODO: Implement filtering logic
  const filteredTasks = tasks.filter(task => {
    // YOUR CODE HERE
    // Filter by status, priority, and search term
    return true; // Replace with actual filtering logic
  });

  // TODO: Implement task status update
  const updateTaskStatus = (taskId: number, newStatus: Task['status']) => {
    // YOUR CODE HERE
    // Update the task status in the state
  };

  // TODO: Calculate task statistics
  const taskStats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === 'completed').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    pending: tasks.filter(t => t.status === 'pending').length,
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading tasks...</p>
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
            <h1 className="text-3xl font-bold text-gray-900">Task Manager Challenge</h1>
            <p className="text-gray-600">Build a task management interface</p>
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
          <ul className="text-sm text-purple-700 space-y-1">
            <li>🔧 Fetch task data from /data/tasks.json</li>
            <li>🔧 Implement status and priority filtering</li>
            <li>🔧 Add search functionality</li>
            <li>🔧 Create task status update feature</li>
            <li>💡 BONUS: Add task creation and drag-and-drop</li>
          </ul>
        </div>
      </div>

      {/* Task Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-gray-900">{taskStats.total}</div>
          <div className="text-sm text-gray-600">Total Tasks</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-green-600">{taskStats.completed}</div>
          <div className="text-sm text-gray-600">Completed</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">{taskStats.inProgress}</div>
          <div className="text-sm text-gray-600">In Progress</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-orange-600">{taskStats.pending}</div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          
          {/* Priority Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">All Priorities</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500">No tasks found. Start by implementing the fetch functionality!</p>
          </div>
        ) : (
          filteredTasks.map(task => (
            <div key={task.id} className="bg-white rounded-lg shadow p-6">
              {/* TODO: Implement the task card UI */}
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                  <p className="text-gray-600 mt-1">{task.description}</p>
                  
                  <div className="flex items-center gap-4 mt-3">
                    <span className={`px-2 py-1 rounded text-sm ${
                      task.status === 'completed' ? 'bg-green-100 text-green-800' :
                      task.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {task.status.replace('-', ' ')}
                    </span>
                    
                    <span className={`px-2 py-1 rounded text-sm ${
                      task.priority === 'high' ? 'bg-red-100 text-red-800' :
                      task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {task.priority} priority
                    </span>
                    
                    <span className="text-sm text-gray-500">👤 {task.assignee}</span>
                  </div>
                </div>
                
                {/* Status Update Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => updateTaskStatus(task.id, 'pending')}
                    className="px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded hover:bg-orange-200"
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => updateTaskStatus(task.id, 'in-progress')}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                  >
                    In Progress
                  </button>
                  <button
                    onClick={() => updateTaskStatus(task.id, 'completed')}
                    className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200"
                  >
                    Complete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}