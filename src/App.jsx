import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './pages/auth/Login'
import PageLayout from './pages/layout/PageLayout'
import Project from './pages/layout/project/Project'
import Task from './pages/layout/task/Task'
import User from './pages/layout/user/User'
import AttendanceReport from './pages/layout/attendance report/AttendanceReport'
import TaskStatus from './pages/layout/Task status/TaskStatus'
import Roles from './pages/layout/roles/Roles'
import CompanySetting from './pages/layout/company setting/CompanySetting'
import ProtectedRoute from './ProtectedRoute'



function App() {
  
  return (
    <Router>
      <Routes>
        <Route  path='/' element={<Navigate to="/login" replace />} />
        <Route path='/login' element={<Login />} />
         <Route element={<ProtectedRoute />}>
        <Route path='/'  element={<PageLayout />}>
          <Route  path='/project' element={<Project />} />
          <Route path='/task' element={<Task />} />
          <Route path='/user' element={<User />} />
          <Route path='/attendance-report' element={<AttendanceReport />} />
          <Route path='/task-status' element={<TaskStatus />} />
          <Route path='/role' element={<Roles />} />
          <Route path='/task-status' element={<TaskStatus />} />
          <Route path='/company-setting' element={<CompanySetting />} />
        </Route>
      </Route>
      </Routes>
    </Router>
  )
}

export default App
