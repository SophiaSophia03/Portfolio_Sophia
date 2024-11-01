import About from './components/About/About'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Project from './components/Projects/Project'
import Skills from './components/Skills/Skills'

function App() {
  return (
    <div id='home'>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Project />
    </div>
  )
}

export default App
