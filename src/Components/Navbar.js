import logo from '../Images/Hospita Logo.png';
import '../Assets/Navbar.css';

function Navbar() {
  return (
    <div className="Nav">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">
                    <img alt='' id="navlogo" src={logo}/>
                </a>
                <button id="buttn" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    </ul>
                    <div className="navbar-nav my-2 my-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" id="active" href="/">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item" id="contact">
                            <a className="nav-link" href="#controw">Contact us</a>
                        </li>
                        <button id="dbtn" className="btn " type="submit">Download Hospyta</button>
                    </div>
                </div>
            </nav>
    </div>
  );
}

export default Navbar;
