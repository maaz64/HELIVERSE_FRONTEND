import './App.css'
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Users from './pages/Users';
import Team from './pages/Team';


function App() {

  return (
    <Routes>
        
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Users />} />
          <Route path="team" element={<Team />} />
          <Route path="*" element={<><h1 className='bg-red-400 text-center'>Error 404: Page Not Found</h1></>} />
        </Route>
      </Routes>
  )
}

export default App
