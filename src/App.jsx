// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import CursorRadar from './components/CursorRadar';
import Why from './pages/Why';
import Plugins from './pages/Plugins';
import Cv from './pages/Cv';
import GaussianSplatting from './pages/GaussianSplatting';
import DAFX from './pages/DAFX';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CursorRadar />
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Why" element={<Why />} />
        <Route path="/Plugins" element={<Plugins />} />
        <Route path="/Cv" element={<Cv />} />
        <Route path="/GaussianSplatting" element={<GaussianSplatting />} />
        <Route path="/DAFX" element={<DAFX />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;

