import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
