
import './App.css'
import AttendenceForm from './pages/AttendenceForm.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Register from './pages/Register.jsx'
function App() {
  

  return (
    <>
      <div className=' h-full m-auto  sm:w-4/5 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100'>
        
          {/* <Login/> */}
          {/* <AttendenceForm/> */}
          <Dashboard/>
          {/* <Register />       */}
        
      </div>
    </>
  )
}

export default App
