import './App.css'
import Navbar from './components/navbar';
import Project from './components/project';
import Background from './pages/background';
import projects from '../public/data/data';
import Home from './pages/home';

function App() {
  return (
    <>
    {/*<Navbar/>

    <div className="relative z-10 flex items-center justify-center h-full">
      <Background/>
      <Home/>
      </div>

      <div className="relative z-10 min-h-screen bg-gray-100 flex flex-wrap justify-center items-center gap-8 p-8 overflow-hidden">
      <Background />
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>*/}

<div className="relative min-h-screen overflow-hidden">
  <Background />
  
  <div>
    <Navbar/>
    <Home/>


    <div className="relative z-10 flex  justify-center items-center gap-8 p-8 overflow-hidden">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  </div>

</div>

  </>
  )
}

export default App
