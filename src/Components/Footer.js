import { Link } from 'react-router-dom';
import logo from '../Images/Hospita Logo 2.png';
import '../Assets/Footer.css';


function Footer() {
    return(
        <div id="ftbg">
            <div id="ftcont" >
                <div className="col-md-4">
                    <a href="/">
                        <img alt='' id="Hlogo" src={logo}/>
                    </a>
                    <p id="copy">Copyright 2022 | Hospyta</p>
                </div>
                <div className="col-md-4" id="footlinks">
                    <div className='col-5' id="divA">
                        <h4>Help</h4>
                        <div id="TC">
                            <span>
                                <a id="footurls" href="#controw">Contact Us</a>
                            </span>
                        </div>
                    </div>
                    <div className='col-2' id="divC"></div>
                    <div className='col-5' id="divB">
                        <h4>About us</h4>
                        <div id="TC">
                            <span>
                                <Link id="footurls" to="../privacy">Privacy policy</Link>
                            </span>
                            <span>
                                <Link id="footurls" to="../Terms">Terms of use</Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" id="footsoc">
                    <p>Stay updated on our services by following our socials:</p>
                    <a target="_blank" rel="noreferrer" href="https://web.facebook.com/hospyta" className="fa fa-facebook"></a>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/Hospytahealth" className="fa fa-twitter"></a>
                    <a target="_blank" rel="noreferrer" href="/" className="fa fa-instagram"></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/hospyta" className="fa fa-linkedin"></a>
                </div>
            </div>
            <div id="lastfoot">
                <p>See attached privacy policy and terms of use</p>
            </div>
        </div>
    );
}
export default Footer;