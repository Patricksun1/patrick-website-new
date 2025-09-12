import { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import About from './About/About'
import Contact from './Contact/Contact'
import Experience from './Experience/Experience'
import Visions from './Visions/Visions'
import { Routes, Route } from "react-router-dom";


const App = () => {
  const current_theme = localStorage.getItem('current_theme')
  const [theme, setTheme] = useState(current_theme? current_theme : 'light')
  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme])
  return (
    <div className = {`container ${theme}`}>
      <Navbar theme = {theme} setTheme = {setTheme}/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/visions" element={<Visions />} />
      </Routes>
 
    </div>
  )
}

export default App