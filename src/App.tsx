import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Skill from './Pages/Skill';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';


const App = () => {
  return (
    <div className="App bg-gray-300">
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Skill" element={<Skill/>}></Route>
        <Route path="/Projects" element={<Projects/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
      
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
