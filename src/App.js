import './App.css';
import About from './components/About';
import Featured from './components/featured-projects/Featured';
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
      <Featured />
    </div>
  );
}

export default App;
