import { useState, useEffect } from 'react'
import NavBarComponent from './NavBarComponent.jsx'
import BioComponent from './BioComponent.jsx'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Home.jsx'
import Experience from './Experience.jsx'
import Projects from './Projects.jsx'
import Academic from './Academic.jsx'
import Misc from './Misc.jsx'


function App() {

  const [darkMode, setDarkMode] = useState(false);

  function darkModeToggle() {
    setDarkMode(!darkMode);
    console.log(darkMode);
  }

  useEffect(() => {
    let intervalId;
    if (darkMode) {
        intervalId = setInterval(createStar, 3500);
    }
    return () => clearInterval(intervalId);
  }, [darkMode]);

  function createStar() {
      const numStars = 40;
      for (let i=0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 99.9}vh`;
        star.style.left = `${Math.random() * 99.9}vw`;
        document.body.appendChild(star);
      }
  }

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Router>
        <NavBarComponent />
        <div className="darkmode-container">
          <img onClick={darkModeToggle} style={{cursor: "pointer"}} className="darkmode" src="src/assets/moon.svg" alt="darkmode" height="30" width="30" />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/misc" element={<Misc />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
