import { useState } from 'react';
import './app.css';
import Icon from './components/icons/icon';
import Window from './components/window/window';
import Note from './components/notes/note';
import Ad from './components/ad/ad';
import Proyect from './components/proyect/proyect';

function App() {

  const [showSkills, setShowSkills] = useState(false)
  const [showAbilities, setShowAbilities] = useState(false)
  const [showMe, setShowMe] = useState(false)
  const [showPro, setShowPro] = useState(false)
  const [showPapelera, setShowPapelera] = useState(false)

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

  const clickMe = () => {
    setShowMe(true)
  }

  const closeMe = () => {
    setShowMe(false)
  }

  const clickPro = () => {
    setShowPro(true)
  }

  const closePro = () => {
    setShowPro(false)
  }

  const clickPapelera = () => {
    setShowPapelera(true)
  }

  const closePapelera = () => {
    setShowPapelera(false)
  }

  return (
    <div id="container">
      <div>
        <Icon img='notes.png' text="Sobre-mi.txt" click={clickMe}/>
        <Icon img='pdf.png' text="cv.pdf" click={() => {window.open('CV_Kevin_Agudo.pdf', '_blank');}}/>
      </div>
      <div>
        <Icon img='folder.png' text="Stack Tecnológico" click={clickSkills}/>
        <Icon img='folder.png' text="Aptitudes" click={clickAbilities}/>
      </div>
      <div>
        <Icon img='folder.png' text="Proyectos Recientes" click={clickPro}/>
      </div>
      <div className='right'>
        <Ad img='linkedin.png' text='Linkedin' click={() => {window.open('https://www.linkedin.com/in/kevin-agudo-montil/', '_blank');}}/>
      </div>
      <div className='right'> 
        <Ad img='github.png' text='Github' click={() => {window.open('https://github.com/Kevinky107', '_blank');}}/>
      </div>
      <div className='right'> 
        <Icon img='papelera.png' text='Papelera' click={clickPapelera}/>
      </div>
      { showMe &&
        <Note name="Sobre mi" close={closeMe}>
          <p>Hola, soy Kevin Agudo Montil, vivo en Valencia, España. Soy ingeniero multimedia y desarrollador fullstack con trayectoria en la creación de aplicaciones para diversas plataformas, así como en el desarrollo de videojuegos. 
            <br></br><br></br> Soy una persona exigente con mi trabajo, siempre buscando estar orgulloso del resultado final. Mi formación en Ingeniería Multimedia y mi experiencia en tecnologías como Angular, React y Unity, junto con mi habilidad para programar en múltiples lenguajes, me han permitido desarrollarme como un profesional versátil y comprometido con la calidad. Mi creatividad y capacidad para aprender rápidamente me han llevado a destacarme en el desarrollo de soluciones innovadoras y en la resolución de problemas complejos.
            <br></br><br></br> Además, mi certificación en Scrum y mi enfoque en metodologías ágiles han fortalecido mis habilidades en la gestión de proyectos y en la colaboración en equipo. Disfruto especialmente de la programación y del desafío constante de adaptarme a nuevas tecnologías. Tengo una gran capacidad para trabajar en equipo, junto con mi iniciativa y habilidades de comunicación y liderazgo.
          </p>
        </Note>
      }
      { showPapelera &&
        <Window name="Papelera" close={closePapelera}>
          <Ad img='yt.png' text='Proyectos Antiguos' click={() => {window.open('https://www.youtube.com/@kevinky1075/videos', '_blank');}}/>
          <Icon img='pdf.png' text="tfg.pdf" click={() => {window.open('TFG.pdf', '_blank');}}/>
        </Window>
      }
      { showPro &&
        <Window name="Proyectos Recientes" close={closePro}>
          <Proyect img='/pro/oxygenshop.png' text="OXYGENshop" 
          info='Single Page Aplication creada con html, css y js, responsive por lo que se verá de manera adecuada tanto en desktop como en móvil'
          web='https://kevinky107.github.io/OXYGENShop/'
          repo='https://github.com/Kevinky107/OXYGENShop'/>
          <Proyect img='/pro/images.png' text="Image Gallery" 
          info='Aplicación Web hecha con React que muestra una galeria de fotos aleatoria, permite la busqueda de fotos y su guardado'
          web='http://kevinky-image-gallery.s3-website.eu-west-3.amazonaws.com/'
          repo='https://github.com/Kevinky107/kevin-image-gallery'/>
          <Proyect img='/pro/miranda.svg' text="Hotel Miranda" 
          info='Web de un hotel creada con html, css y js, es responsive'
          web='https://kevinky107.github.io/Hotel-Miranda/'
          repo='https://github.com/Kevinky107/Hotel-Miranda'/>
          <Proyect img='/pro/Dashboard.png' text="Dashboard Miranda" 
          info='Web creada con React que permite la gestión del Hotel Miranda, para entrar usar el email kevinagudomontil@gmail.com y la contraseña 1234'
          web='http://kevin-hotel-miranda-dashboard.s3-website.eu-west-3.amazonaws.com/'
          repo='https://github.com/Kevinky107/Hotel-Miranda-Dashboard'/>
        </Window>
      }
      { showAbilities &&
        <Window name="Aptitudes" close={closeAbilities}>
          <Icon img='/abi/rprob.png' text="Resolución de Problemas"/>
          <Icon img='/abi/panacri.png' text="Pensamiento analítico y crítico"/>
          <Icon img='/abi/adet.png' text="Atención al detalle"/>
          <Icon img='/abi/gtiem.png' text="Gestión del tiempo"/>
          <Icon img='/abi/cefec.png' text="Comunicación efectiva"/>
          <Icon img='/abi/resi.png' text="Resiliencia"/>
          <Icon img='/abi/capre.png' text="Capacidad aprendizaje continuo"/>
          <Icon img='/abi/crea.png' text="Creatividad"/>
          <Icon img='/abi/adap.png' text="Adaptabilidad"/>
          <Icon img='/abi/cvisual.png' text="Comunicación visual"/>
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
