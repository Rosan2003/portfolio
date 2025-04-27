import './App.css'
import Navbar from './components/navbar';
import Project from './components/project';
import Background from './pages/background';
import projects from '../public/data/data';
import Home from './pages/home';
import BG from './pages/bg';
import SocialIcons from './components/contacticons';
import Test from './components/text';

function App() {
  return (
    <>

    <div>
    <Navbar/>

    <div className="relative z-10 flex items-center justify-center h-full">
      <Background/>
      <Home/>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center items-center gap-8 p-8 overflow-hidden">
      <BG />
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}

      {/*<SocialIcons/>*/}

    </div>

    <div className="relative z-10 flex justify-center items-center  gap-8 p-8 overflow-hidden">

      <Background/>
      {projects.map((project, index) => (
        <Test
          key={index} project={project}
        />
      ))}

      <SocialIcons/>
    </div>

    </div>

  </>
  )
}

export default App
