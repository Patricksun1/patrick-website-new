import { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import About from './About/About'
import Projects from './Projects/Projects'
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
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
 
    </div>
  )
}

export default App