import { BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import './App.css'
<<<<<<< HEAD
import Login from './pages/auth/Login'
=======
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
import PageLayout from './pages/layout/PageLayout'
import Project from './pages/layout/project/Project'
import Task from './pages/layout/task/Task'
import User from './pages/layout/user/User'
import AttendanceReport from './pages/layout/attendance report/AttendanceReport'
import TaskStatus from './pages/layout/Task status/TaskStatus'
import Roles from './pages/layout/roles/Roles'
import CompanySetting from './pages/layout/company setting/CompanySetting'
import ProtectedRoute from './ProtectedRoute'
<<<<<<< HEAD

=======
import { ConfigProvider } from 'antd'
import { themeConfig } from './config/theme'
import Message from './pages/layout/message/Message'
import NoPage from './pages/NoPage'
import Login from './pages/auth/Login'
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b


function App() {

  return (
    <ConfigProvider theme={themeConfig}>
    <Router>
      <Routes>
        <Route  path='/' element={<Navigate to="/login" replace />} />
        <Route path='/login' element={<Login />} />
         <Route element={<ProtectedRoute />}>
<<<<<<< HEAD
        <Route path='/'  element={<PageLayout />}>
          <Route  path='/project' element={<Project />} />
=======
        <Route  element={<PageLayout />}>
          <Route path='/'  element={<Navigate to="/project" />} />
          <Route path='/project' element={<Project />} />
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
          <Route path='/task' element={<Task />} />
          <Route path='/user' element={<User />} />
          <Route path='/attendance-report' element={<AttendanceReport />} />
          <Route path='/task-status' element={<TaskStatus />} />
          <Route path='/message' element={<Message />} />
          <Route path='/role' element={<Roles />} />
          <Route path='/task-status' element={<TaskStatus />} />
          <Route path='/company-setting' element={<CompanySetting />} />
        </Route>
<<<<<<< HEAD
      </Route>
=======
          <Route path='*' element={<NoPage />} />
       </Route> 
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
      </Routes>
    </Router>
    </ConfigProvider>
  )
}

export default App
