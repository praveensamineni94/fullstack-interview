import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to the Full-Stack Interview Challenge!</h2>
          <p className="text-gray-600 mb-6">
            This environment contains multiple coding challenges to test your full-stack development skills. 
            Choose a challenge below and follow the instructions carefully.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">🚀 Getting Started</h3>
            <ol className="list-decimal list-inside text-blue-700 space-y-1">
              <li>Open a terminal in this Codespace</li>
              <li>Run <code className="bg-blue-100 px-2 py-1 rounded">npm install</code> to install dependencies</li>
              <li>Run <code className="bg-blue-100 px-2 py-1 rounded">npm run dev:all</code> to start both frontend and backend</li>
              <li>Choose a challenge and start coding!</li>
            </ol>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Frontend Challenges */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-green-600 mb-4">🎨 Frontend Challenges</h3>
            <div className="space-y-3">
              <Link 
                href="/challenges/course-list" 
                className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h4 className="font-semibold text-gray-900">Course List & Filter</h4>
                <p className="text-sm text-gray-600">Build a searchable course catalog with React hooks</p>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Beginner</span>
              </Link>
              
              <Link 
                href="/challenges/task-manager" 
                className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h4 className="font-semibold text-gray-900">Task Manager</h4>
                <p className="text-sm text-gray-600">Create a task management interface with filtering</p>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Intermediate</span>
              </Link>
            </div>
          </div>

          {/* Backend Challenges */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-4">⚙️ Backend Challenges</h3>
            <div className="space-y-3">
              <Link 
                href="/challenges/api-endpoints" 
                className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h4 className="font-semibold text-gray-900">API Endpoints</h4>
                <p className="text-sm text-gray-600">Create REST API endpoints with Express.js</p>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Intermediate</span>
              </Link>
              
              <Link 
                href="/challenges/data-processing" 
                className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h4 className="font-semibold text-gray-900">Data Processing</h4>
                <p className="text-sm text-gray-600">Process and transform data arrays</p>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Beginner</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h3 className="text-xl font-bold text-purple-600 mb-4">🔗 Full-Stack Challenge</h3>
          <Link 
            href="/challenges/employee-dashboard" 
            className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h4 className="font-semibold text-gray-900">Employee Dashboard</h4>
            <p className="text-sm text-gray-600 mb-2">
              Build a complete dashboard that connects frontend and backend
            </p>
            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Advanced</span>
          </Link>
        </div>
      </div>
    </div>
  )
}