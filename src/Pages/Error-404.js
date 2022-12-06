import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Assets/Error-404.css';

function Error_404() {
  return (
    <div className='Error-404'>
        <Navbar/>
        <div className='erorrmain'>
            <h1>404 <span id="errspan">Error</span></h1>
            <span>
                <p>The page you are looking for does not exist, maybe you can check the <a id="homelink" href='../'>Home page</a>.</p>
            </span>
        </div>
        <Footer/>
    </div>
  )
}

export default Error_404;