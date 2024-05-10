import './BioComponent.css'
import TechnologiesComponent from './TechnologiesComponent.jsx'

function BioComponent() {

    return (
      <>
        <div className="main-body">
          <div className="intro">Hi, I'm</div>
          <div className="name">Sriram Jeyakumar &nbsp;&nbsp;</div>
          <div className="bio">I'm a student at <span className="green-text">UBC Vancouver</span>, working towards a <span className="purple-text">BA in Computer Science and Philosophy.</span></div>
          <div className="bio">I love to build things! When I'm not, I'm probably travelling, volunteering, hiking or just trying something new.</div>
          <div className="bio">Feel free to reach out using the links on the top-left :&#41;</div>
          <div className="gap"></div>
          <TechnologiesComponent />
        </div>
      </>
    )
  }
  
  export default BioComponent
  