import './App.css';
import About from './components/About';
import CallToAction from './components/CallToAction';
import Featured from './components/featured-projects/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/other-projects/Projects';
import Work from './components/Work';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Featured />
      <Projects />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
