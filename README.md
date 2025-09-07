# 🚀 Full-Stack Developer Interview Environment

Welcome to the comprehensive full-stack developer interview testing environment! This repository contains multiple coding challenges designed to evaluate your skills across frontend, backend, and full-stack development.

## 🎯 Overview

This environment provides a complete testing setup with:
- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **Express.js** backend server
- **Multiple interview challenges** of varying difficulty
- **Real-time testing capabilities** in GitHub Codespaces

## 🚀 Quick Start

### Prerequisites
- GitHub Codespaces (recommended) or local development environment
- Node.js 18+ and npm

### Getting Started
1. **Open in Codespaces** (recommended):
   - Click the "Code" button and select "Open with Codespaces"
   - Or visit: `https://github.com/codespaces/new?repo=YOUR_REPO_NAME`

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development environment**:
   ```bash
   npm run dev:all
   ```
   This starts both the frontend (port 3000) and backend (port 3001) servers.

4. **Open the application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## 📋 Available Challenges

### 🎨 Frontend Challenges

#### 1. Course List & Filter (Beginner)
**Location**: `/challenges/course-list`
**Skills**: React hooks, state management, filtering, Tailwind CSS
**Tasks**:
- Fetch and display course data from JSON
- Implement search and filter functionality
- Create responsive UI with Tailwind CSS
- Handle loading and error states

#### 2. Task Manager (Intermediate)
**Location**: `/challenges/task-manager`
**Skills**: Complex state management, multiple filters, UI interactions
**Tasks**:
- Build a task management interface
- Implement status and priority filtering
- Add task statistics dashboard
- Create task status update functionality

### ⚙️ Backend Challenges

#### 3. API Endpoints (Intermediate)
**Location**: `/challenges/api-endpoints`
**Skills**: Express.js, REST APIs, data processing, error handling
**Tasks**:
- Complete TODO endpoints in `/backend/server.js`
- Implement GET, POST, PUT, DELETE operations
- Add proper error handling and validation
- Test endpoints using the built-in testing interface

#### 4. Data Processing (Beginner)
**Location**: `/challenges/data-processing`
**Skills**: Algorithms, data manipulation, edge case handling
**Tasks**:
- Implement "top two numbers" algorithm
- Add array sum and average calculations
- Handle edge cases (empty arrays, duplicates)
- Create efficient processing functions

### 🔗 Full-Stack Challenge

#### 5. Employee Dashboard (Advanced)
**Location**: `/challenges/employee-dashboard`
**Skills**: Full CRUD operations, frontend-backend integration, real-time updates
**Tasks**:
- Connect React frontend to Express backend
- Implement complete CRUD functionality
- Add form validation and error handling
- Create real-time statistics dashboard

## 🏗️ Project Structure

```
fullstack-interview/
├── app/                          # Next.js App Router
│   ├── challenges/              # Interview challenge pages
│   │   ├── course-list/        # Frontend challenge 1
│   │   ├── task-manager/       # Frontend challenge 2
│   │   ├── api-endpoints/      # Backend testing interface
│   │   ├── data-processing/    # Algorithm challenge
│   │   └── employee-dashboard/ # Full-stack challenge
│   ├── globals.css             # Tailwind CSS styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page with challenge list
├── backend/
│   └── server.js               # Express.js server with TODO endpoints
├── data/                       # Sample JSON data files
│   ├── courses.json           # Course data
│   ├── employees.json         # Employee data
│   └── tasks.json             # Task data
├── components/                 # Reusable React components (if needed)
└── package.json               # Dependencies and scripts
```

## 🛠️ Available Scripts

- `npm run dev` - Start Next.js frontend only
- `npm run backend` - Start Express.js backend only
- `npm run dev:backend` - Start backend with nodemon (auto-restart)
- `npm run dev:all` - Start both frontend and backend concurrently
- `npm run build` - Build Next.js for production
- `npm run lint` - Run ESLint

## 📝 Interview Instructions

### For Interviewees:

1. **Choose your challenge(s)** based on the role you're applying for:
   - Frontend roles: Focus on challenges 1-2
   - Backend roles: Focus on challenges 3-4
   - Full-stack roles: Complete challenge 5 (requires 3-4 first)

2. **Read the instructions carefully** - each challenge page contains detailed requirements and hints

3. **Start with the basics** - get the basic functionality working before adding bonus features

4. **Ask questions** - clarify requirements when needed

5. **Explain your thought process** - walk through your approach and decision-making

6. **Test your work** - use the provided testing interfaces to validate your solutions

### For Interviewers:

1. **Setup is automated** - just open the Codespace and run `npm install && npm run dev:all`

2. **Multiple difficulty levels** - choose appropriate challenges based on the candidate's experience

3. **Built-in testing** - each challenge has testing capabilities to validate solutions

4. **Observable progress** - watch candidates work in real-time through screen sharing

5. **Discussion points** - use the code as a basis for technical discussions

## 🎯 Evaluation Criteria

### Technical Skills
- **Code Quality**: Clean, readable, well-structured code
- **Problem Solving**: Logical approach to breaking down problems
- **Error Handling**: Proper validation and error management
- **Best Practices**: Following React/Node.js conventions

### Frontend Specific
- **React Hooks**: Proper use of useState, useEffect
- **State Management**: Clean state handling and updates
- **UI/UX**: Responsive design and user experience
- **CSS Skills**: Effective use of Tailwind CSS

### Backend Specific
- **API Design**: RESTful principles and HTTP methods
- **Data Processing**: Efficient algorithms and data handling
- **Validation**: Input validation and sanitization
- **Architecture**: Clean separation of concerns

### Full-Stack Integration
- **Communication**: Frontend-backend data flow
- **Error Propagation**: Handling errors across layers
- **Real-time Updates**: State synchronization
- **Performance**: Efficient data loading and updates

## 🧪 Testing Your Solutions

Each challenge includes testing capabilities:

1. **Course List**: Test search, filtering, and data loading
2. **Task Manager**: Verify filtering, statistics, and interactions
3. **API Endpoints**: Built-in API testing interface with result display
4. **Data Processing**: Algorithm testing with multiple test cases
5. **Employee Dashboard**: Full CRUD testing with real backend integration

## 🔧 Troubleshooting

### Common Issues:

**Backend not starting:**
```bash
# Check if port 3001 is available
npm run backend
```

**Frontend build errors:**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

**API connection issues:**
- Ensure backend is running on port 3001
- Check browser console for CORS errors
- Verify API endpoint URLs in challenge code

### Getting Help:
- Check the browser console for error messages
- Review the terminal output for server errors
- Examine the Network tab for API request/response details

## 🚀 Deployment Notes

This environment is optimized for:
- **GitHub Codespaces** (recommended)
- **Local development** with Node.js 18+
- **VS Code** with suggested extensions

## 🤝 Contributing

To add new challenges or improve existing ones:
1. Follow the established pattern in `/app/challenges/`
2. Add clear instructions and TODO comments
3. Include testing capabilities where possible
4. Update this README with new challenge information

---

**Good luck with your interview! 🎉**

Remember: Focus on demonstrating your problem-solving process, ask clarifying questions, and don't hesitate to explain your thought process as you work through the challenges.