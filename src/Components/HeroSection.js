import '../Images/Hospita Logo.png';
import HeroImg from '../Images/black-woman-with-stethoscope 1.png';
import '../Assets/HeroSection.css';


function HeroSection() {
  return (
    <div className="Herosec">
        <div className="col-md-6" id="textcol">
            <h1 className="Herotext">
            Accelerating healthcare <br id="space"/>Accessibility with state <br id="space"/>of the art technologies
            </h1>
            <div id="sub">
                <p id="subtext">HOSPYTA brings everything Healthcare right to your doorstep. <br id="space"/>(Doctors. Medicines. Devices. Equipment. Services)</p>
            </div>
            <button id="Herobtn" type="button">Download  Hospyta</button>
        </div>
        <div className="col-md-6" id="HeroImg">
            <img id="headimg" alt='' src={HeroImg}/>
        </div>
        
    </div>
  );
}

export default HeroSection;
