import Navbar from './Navbar'; 
import '../Assets/Header.css'
import HeroSection from './HeroSection';

function Header() {
  return (
    <div className="Header">
      <Navbar/>
      <HeroSection/>
    </div>
  );
}

export default Header;
