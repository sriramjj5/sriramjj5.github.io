import './NavBarComponent.css'
import { Link } from "react-router-dom"

function NavBarComponent() {

    return (
      <>
        <div className="header-links">
            <div className="socials">
              <a href="https://www.linkedin.com/in/sriram-jeyakumar-8693ab266/" target="_blank" rel="noopener noreferrer">
                <img className="socialsvg" src="src/assets/linkedin.svg" alt="linkedin" height="30" width="30"/>
              </a>
              <a href="https://www.github.com/sriramjj5/" target="_blank" rel="noopener noreferrer">
                <img className="socialsvg" src="src/assets/github.svg" alt="github" height="30" width="30"/>
              </a>
              <a href="mailto: sriramjj5@gmail.com">
                <img className="socialsvg" src="src/assets/email.svg" alt="email" height="30" width="30"/>
              </a>
              <a href="https://www.instagram.com/sriramjey/" target="_blank" rel="noopener noreferrer">
                <img className="socialsvg" src="src/assets/instagram.svg" alt="instagram" height="30" width="30"/>
              </a>
            </div>
            <div className="navigation">
              <Link to="/">Home</Link> 
              <span className="sep"> | </span> 
              <Link to="/experience">Experience</Link> 
              <span className="sep"> | </span> 
              <Link to="/projects">Projects</Link>
              <span className="sep"> | </span> 
              <Link to="/academic">Academic</Link> 
              <span className="sep"> | </span> 
              <Link to="/misc">Misc.</Link>
            </div>
        </div>
      </>
    )
  }
  
export default NavBarComponent
  