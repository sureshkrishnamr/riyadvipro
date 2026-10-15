import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Service from './pages/Service'
import ServiceDetails from './pages/ServiceDetails'
import Portfolio from './pages/Portfolio'
import PortfolioDetails from './pages/PortfolioDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import HealthCheckup from './pages/HealthCheckup'
import ProjectDetails from './pages/ProjectDetails'
import AdminLogin from './pages/AdminLogin'
import ProtectedRoute from './components/ProtectedRoute'
import AdminDashboard from './pages/AdminDashboard'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Service/>}/>
          <Route path='/services/:slug' element={<ServiceDetails/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/portfolio/:slug' element={<ProjectDetails/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/healthcheckup' element={<HealthCheckup/>}/>
          <Route path='/admin/login' element={<AdminLogin/>}/>
          <Route path='/admin/dashboard' element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
