import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Websites from './pages/Websites';
import Apps from './pages/Apps';
import Seo from './pages/Seo';
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
} 