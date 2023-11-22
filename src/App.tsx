import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import WelcomePage from './components/pages/WelcomePage'
import Navbar from './components/Navbar'
import ButtonsPage from './components/pages/ButtonsPage'
import FetchPage from './components/pages/FetchPage'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/home' element={<WelcomePage />} />
        <Route path='/buttons' element={<ButtonsPage />} />
        <Route path='/fetch' element={<FetchPage />} />
      </Routes>
    </Router>
  )
}

export default App
