// App.jsx
import { BrowserRouter as Router, Routes, Route, Link, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import CursorRadar from './components/CursorRadar';
import SignalsSoundsWaves from './pages/SignalsSoundsWaves';
import Plugins from './pages/Plugins';
import Cv from './pages/Cv';
import GaussianSplatting from './pages/GaussianSplatting';
import DAFX from './pages/DAFX';
import DSP from './pages/DSP';
import FFT from './pages/FFT';
import Ztransform from './pages/Ztransform';
import Projects from './pages/Projects';
import Research from './pages/Research';
import Personal from './pages/Personal';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CursorRadar />
      <MyNavbar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SignalsSoundsWaves" element={<SignalsSoundsWaves />} />
          <Route path="/Plugins" element={<Plugins />} />
          <Route path="/Cv" element={<Cv />} />
          <Route path="/GaussianSplatting" element={<GaussianSplatting />} />
          <Route path="/DAFX" element={<DAFX />} />
          <Route path="/DSP" element={<DSP />} />
          <Route path="/FFT" element={<FFT />} />
          <Route path="/Ztransform" element={<Ztransform />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/personal" element={<Personal />} />
        </Routes>
      </HashRouter>
      <Footer />
    </Router>
  )
}

export default App;

