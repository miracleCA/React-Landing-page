import '../Assets/Appdload.css';
import mobile from '../Images/Mobile.png';
import Google from '../Icons/Google play.png';
import Appstore from '../Icons/App store.png';

function Appdload() {
  return (
    <div className="dbg">
        <div className="col-md-6" id="dd">
            <div id="text">
                <h3 id="dht">Get professional medical help in the palm of your hands</h3>
                <p id="dt">Download our mobile app to enjoy instant access to healthcare services.</p>
            </div>
            <div className="row" id="Appwrapper">
                <img alt='' id="playstore" src={Google}/>
                <img alt='' id="Appstore" src={Appstore}/>
            </div>
        </div>
        <div className="col-md-6" id="mobcol">
            <img alt='' id="mob" src={mobile}/>
        </div>
    </div>
  );
}

export default Appdload;