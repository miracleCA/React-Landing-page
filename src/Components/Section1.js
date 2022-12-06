import '../Assets/Section1.css';
import hospyta from '../Videos/Hospyta.mp4';


function Section1() {
    const videoSrc = hospyta;

    return (
       <div id="demobg">
            <h2 id="demotext">Get to know us</h2>

                <video controls>
                    <source src={videoSrc} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
       </div>
    );
}

export default Section1;