import Header from '../Components/Header';
import Section1 from '../Components/Section1';
import Section2 from '../Components/Section2';
import About from '../Components/About';
import Partners from '../Components/Partners';
import Whyus from '../Components/Whyus';
import Appdload from '../Components/Appdload';
import Contactus from '../Components/Contactus';
import Footer from '../Components/Footer';


function Home() {
  return (
    <div className="Home">
      <Header/>
      <Section1/>
      <Section2/>
      <About/>
      <Whyus/>
      <Partners/>
      <Appdload/>
      <Contactus/>
      <Footer/>
    </div>
  );
}

export default Home;