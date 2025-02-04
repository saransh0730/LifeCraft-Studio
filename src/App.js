import './App.css';
import Approaches from './components/Approaches';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Steps from './components/Steps';

function App() {
  return (
    <div className="App">
    <HeroSection />
    <Approaches />
    <Steps />
     <Footer />
    </div>
  );
}

export default App;
