import { BrowserRouter , Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './comonents/Home'
import About from './comonents/About'
import Contact from './comonents/Contact'
import Services from './comonents/Services'
import NavBar from './comonents/NavBar'
function App() {


  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
