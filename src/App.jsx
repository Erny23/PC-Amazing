import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from "./Components/Footer";
import Inicio from "./Pages/Inicio"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='*' element={<Inicio/>} />
          <Route path='/PC-Amazing' element={<Inicio/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
