import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { TabTitle } from '../utils/Functions';

function Support() {
  TabTitle('Support Us - Hospyta');
  return (
    <div className="Support">
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default Support;