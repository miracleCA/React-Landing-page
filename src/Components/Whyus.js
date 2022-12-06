import '../Assets/Whyus.css';
import user from '../Icons/Top rated.png';
import sec from '../Icons/Security.png';
import supp from '../Icons/Support.png';
import time from '../Icons/Time.png';
import net from '../Icons/Network.png';
import fold from '../Icons/Folder.png';


function Whyus() {
    return(
        <div className="whybg">
            <h2>WHY CHOOSE US</h2>
            <div className="row" id="whyrow">
                <div className="col-md-4">
                    <div className="card text-center" id="cardmain">
                        <div className="card-body">
                            <img alt='' src={user} id=""/>
                            <h5 className="card-title">Top rated Service</h5>
                            <p className="card-text">We aim to take everything “healthcare” online, making healthcare-related services and products conveniently accessible to everyone, including healthcare and non-healthcare participants.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center" id="cardmain">
                        <div className="card-body">
                            <img alt='' src={sec} id=""/>
                            <h5 className="card-title">Advanced security</h5>
                            <p className="card-text">Hospyta secures your data with the help of state of the art security integrations, you can also easily access them any time you want.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center" id="cardmain">
                        <div className="card-body">
                            <img alt='' src={supp} id=""/>
                            <h5 className="card-title">Excellent customer Support</h5>
                            <p className="card-text">Our user friendly, convenient services and platform are easy to use. With all year round support and assistance.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" id="whyrow">
                <div className="col-md-4">
                    <div className="card text-center" id="cardmain">
                        <div className="card-body">
                            <img alt='' src={time} id=""/>
                            <h5 className="card-title">Robust access to Professionals</h5>
                            <p className="card-text">Our users can book appointments with large network of registered professionals, ranging from Physicians and consultants. We enable easy referral and medical second opinions securely transferring your files where you need it to go.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center" id="cardmain">
                        <div className="card-body">
                            <img alt='' src={net} id=""/>
                            <h5 className="card-title">Interoperability and convenience</h5>
                            <p className="card-text">Our Hospyta Mobile App provides you with everything you need to get started with your health. We connect you with with Insurance, labs, Ambulance services and your community health networks so your healthcare data remain accessible to who you want to share it with.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center" id="cardmain">
                        <div className="card-body">
                            <img alt='' src={fold} id=""/>
                            <h5 className="card-title">Unique experience</h5>
                            <p className="card-text">At Hospyta, we are on a mission to serve as a first-hand knowledge-based system for healthcare and leader in healthcare innovative technology. You can trust us to provide you with highly personalized and futuristic experience that you need.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Whyus;