import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import LandingPageLocation from './Components/LandingPageLocations/LandingPageLocation';
import MetabnbNft from './Components/MetabnbNft/MetabnbNft';
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LandingPageLocation />
      <MetabnbNft />
      <Footer/>
    </div>
  );
}

export default App;
