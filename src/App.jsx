import About from './components/About/About'
import Certificates from './components/Certificates/Certificates'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
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
    <Certificates />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
