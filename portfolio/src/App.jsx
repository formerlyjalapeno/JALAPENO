import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Coding from './pages/Coding';
import NoPage from './pages/NoPage';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/aboutme' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/coding' element={<Coding />} />
            <Route path='/*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  )
};

export default App
