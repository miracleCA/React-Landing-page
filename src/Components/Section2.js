import '../Assets/Section2.css';
import Docs from '../Images/Doctors.png';
import Cert from '../Images/CertDoc.png';
import feed from '../Images/Feedback.png'
import cons from '../Images/review.png'
import check from '../Images/Check.png';
import rate from '../Images/Rating.png';

function Section2() {
    return(
        <div className="listing">
            <div className="col-md-6 col-xs-6">
                <div className="row" id="bimg">
                    <div className="row">
                        <div id="doc">
                            <img alt='' id="docimg" src={Docs}/>
                        </div>
                    </div>
                    <div className="row">
                        <div id="feed">
                            <img alt='' id="feedimg" src={feed}/>
                        </div>
                    </div>
                    <div className="row">
                        <div id="rev">
                            <img alt='' id="revimg" src={check}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-xs-6">
                <div className="row">
                    <div id="cert">
                        <img alt='' id="certimg" src={Cert}/>
                    </div>
                </div>
                <div id="bimg2">
                    <div className="row">
                        <div id="rate">
                            <img alt='' id="rateimg" src={rate}/>
                        </div>
                    </div>
                    <div className="row">
                        <div id="cons">
                            <img alt='' id="consimg" src={cons}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section2;
