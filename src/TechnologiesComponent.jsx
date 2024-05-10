import './TechnologiesComponent.css'

function TechnologiesComponent() {

    return (
      <>
        <div className="technology-svgs">
            {/* loose order is front-end -> back-end -> git-esque -> cloud -> misc*/}
          <div className="tooltip">
            <img className="techsvg" src="src/assets/react.svg" alt="React" height="32" width="32" />
            <span className="tooltiptext">React</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="src/assets/redux.svg" alt="Redux" height="32" width="32" />
            <span className="tooltiptext">Redux</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="src/assets/typescript.svg" alt="TypeScript" height="32" width="32" />
            <span className="tooltiptext">TypeScript</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="src/assets/node.svg" alt="Node.js" height="32" width="32" />
            <span className="tooltiptext">Node.js</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="src/assets/python.svg" alt="Python" height="32" width="32" />
            <span className="tooltiptext">Python</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="src/assets/java.svg" alt="Java" height="32" width="32" />
            <span className="tooltiptext">Java</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="src/assets/cplusplus.svg" alt="C++" height="32" width="32" />
            <span className="tooltiptext">C++</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="src/assets/linux.svg" alt="Linux" height="32" width="32" />
            <span className="tooltiptext">Linux</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="src/assets/git.svg" alt="Git" height="32" width="32" />
            <span className="tooltiptext">Git</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="src/assets/aws.svg" alt="AWS" height="32" width="32" />
            <span className="tooltiptext">AWS</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="src/assets/google-cloud.svg" alt="Google Cloud" height="32" width="32" />
            <span className="tooltiptext">Google Cloud</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="src/assets/figma.svg" alt="Figma" height="32" width="32" />
            <span className="tooltiptext">Figma</span>
          </div>
        </div>
      </>
    )
  }
  
export default TechnologiesComponent
  