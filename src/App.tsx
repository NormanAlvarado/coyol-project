import './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TastingNotes from './components/TastingNotes';
import Heritage from './components/Heritage';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Hero />
      <About />
      <TastingNotes />
      <Heritage />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

