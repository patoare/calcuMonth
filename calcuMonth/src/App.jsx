import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import PageForm from './pages/PageForm'

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element ={< MainPage />} />
        <Route path='/form' element ={< PageForm />} />
      </Routes>
    
    </>
  )
}

export default App
