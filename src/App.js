import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Work from './components/Work';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Work />
    </div>
  );
}

export default App;
