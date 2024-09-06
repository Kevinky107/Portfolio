import { useState } from 'react';
import './app.css';
import Icon from './components/icons/icon';
import Window from './components/window/window';

function App() {

  const [showSkills, setShowSkills] = useState(false)
  const [showAbilities, setShowAbilities] = useState(false)

  const clickSkills = () => {
    setShowSkills(true)
  }

  const closeSkills = () => {
    setShowSkills(false)
  }

  const clickAbilities = () => {
    setShowAbilities(true)
  }

  const closeAbilities = () => {
    setShowAbilities(false)
  }

  return (
    <div id="container">
      <div>
        <Icon img='notes.png' text="Sobre-mi.txt"/>
        <Icon img='pdf.png' text="cv.pdf"/>
      </div>
      <div>
        <Icon img='folder.png' text="Stack Tecnológico" click={clickSkills}/>
        <Icon img='folder.png' text="Aptitudes" click={clickAbilities}/>
      </div>
      <div>
        <Icon img='folder.png' text="Proyectos"/>
      </div>
      {
        showAbilities &&
        <Window name="Aptitudes" close={closeAbilities}>
          
        </Window>
      }
      { showSkills &&
        <Window name="Stack Tecnológico" close={closeSkills}>
          <Icon img='/stack/html.svg' text="HTML"/>
          <Icon img='/stack/css.svg' text="CSS"/>
          <Icon img='/stack/sass.svg' text="SASS"/>
          <Icon img='/stack/js.svg' text="Java Script"/>
          <Icon img='/stack/ts.svg' text="Type Script"/>
          <Icon img='/stack/react.svg' text="React"/>
          <Icon img='/stack/redux.svg' text="Redux"/>
          <Icon img='/stack/angular.svg' text="Angular"/>
          <Icon img='/stack/jest.svg' text="Jest"/>
          <Icon img='/stack/cypress.svg' text="Cypress"/>
          <Icon img='/stack/node.svg' text="Node"/>
          <Icon img='/stack/express.svg' text="Express"/>
          <Icon img='/stack/mongodb.svg' text="MongoDB"/>
          <Icon img='/stack/mysql.svg' text="mySQL"/>
          <Icon img='/stack/php.svg' text="PHP"/>
          <Icon img='/stack/laravel.svg' text="Laravel"/>
          <Icon img='/stack/aws.svg' text="AWS"/>
          <Icon img='/stack/ionic.svg' text="Ionic"/>
          <Icon img='/stack/firebase.svg' text="Firebase"/>
          <Icon img='/stack/c.svg' text="C"/>
          <Icon img='/stack/c++.svg' text="C++"/>
          <Icon img='/stack/csh.svg' text="C#"/>
          <Icon img='/stack/java.svg' text="Java"/>
          <Icon img='/stack/unity.svg' text="Unity"/>
          <Icon img='/stack/arduino.svg' text="Arduino"/>
          <Icon img='/stack/blender.svg' text="Blender"/>
          <Icon img='/stack/matlab.png' text="Matlab"/>
        </Window>
      }
    </div>
  )
}

export default App
