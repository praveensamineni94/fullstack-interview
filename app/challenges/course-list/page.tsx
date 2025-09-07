'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// 📚 CHALLENGE: Course List & Filter
// 
// YOUR TASKS:
// 1. Fetch course data from /data/courses.json (already provided)
// 2. Display the courses in a clean, responsive list
// 3. Add a search input to filter courses by title or category
// 4. Add difficulty filter buttons
// 5. Show loading state while fetching data
// 6. Handle error states appropriately
//
// REQUIREMENTS:
// - Use React hooks (useState, useEffect)
// - Implement client-side filtering
// - Style with Tailwind CSS
// - Make it responsive
//
// BONUS POINTS:
// - Add sorting functionality
// - Implement debounced search
// - Add course count display

interface Course {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
  difficulty: string;
  instructor: string;
}

export default function CourseListChallenge() {
  // TODO: Add state for courses, loading, error, search term, and selected difficulty
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  // TODO: Implement useEffect to fetch courses data
  useEffect(() => {
    // YOUR CODE HERE
    // Fetch data from /data/courses.json
    // Handle loading and error states
    
    // Sample implementation (you can modify this):
    const fetchCourses = async () => {
      try {
        setLoading(true);
        // Replace this with actual fetch to /data/courses.json
        const response = await fetch('/data/courses.json');
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError('Failed to load courses. Please try again.');
        console.error('Error fetching courses:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // TODO: Implement filtering logic
  const filteredCourses = courses.filter(course => {
    // YOUR CODE HERE
    // Filter by search term (title and category)
    // Filter by selected difficulty
    // Return true if course matches filters
    
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = !selectedDifficulty || course.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesDifficulty;
  });

  // Get unique difficulty levels for filter buttons
  const difficultyLevels = Array.from(new Set(courses.map(course => course.difficulty)));

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading courses...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
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
            <h1 className="text-3xl font-bold text-gray-900">Course List & Filter Challenge</h1>
            <p className="text-gray-600">Build a searchable course catalog</p>
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
          <ul className="text-sm text-blue-700 space-y-1">
            <li>✅ Fetch course data (partially implemented)</li>
            <li>🔧 Improve the search functionality</li>
            <li>🔧 Style the course cards</li>
            <li>🔧 Add responsive design</li>
            <li>💡 BONUS: Add sorting and debounced search</li>
          </ul>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search Courses
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search by title or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Difficulty Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Difficulty
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedDifficulty('')}
                className={`px-3 py-2 rounded text-sm ${
                  !selectedDifficulty 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All
              </button>
              {difficultyLevels.map(level => (
                <button
                  key={level}
                  onClick={() => setSelectedDifficulty(level)}
                  className={`px-3 py-2 rounded text-sm ${
                    selectedDifficulty === level
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Results Count */}
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredCourses.length} of {courses.length} courses
        </div>
      </div>

      {/* Course List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            {/* TODO: Improve this course card styling */}
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{course.title}</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {course.category}
                </span>
                <span className={`text-sm px-2 py-1 rounded ${
                  course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                  course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {course.difficulty}
                </span>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-3">{course.description}</p>
            
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>👨‍🏫 {course.instructor}</span>
              <span>⏱️ {course.duration}</span>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No courses found matching your filters.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedDifficulty('');
            }}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}