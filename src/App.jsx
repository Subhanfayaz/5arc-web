import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Websites from './pages/Websites';
import Apps from './pages/Apps';
import Seo from './pages/Seo';
import Contact from './pages/Contact';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ScrollToTop from './components/ScrollToTop';

// Handle GitHub Pages SPA redirect query parameters
(function() {
  var urlParams = new URLSearchParams(window.location.search);
  var p = urlParams.get('p');
  if (p) {
    window.history.replaceState(null, null, p);
  }
})();

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
} 