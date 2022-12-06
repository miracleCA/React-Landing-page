import '../Assets/Partners.css'
import PFIZER from '../Icons/PFIZER.png';
import MSD from '../Icons/MSD.png';
import ONE from '../Icons/ONE.png';
import SANOFI from '../Icons/SANOFI.png';

function Partners() {
  return (
    <div className='Partners'>
        <h2>OUR TRUSTED PARTNERS</h2>
        <div className='partners'>
            <div className='col-2'>
                <img src={MSD}/>
            </div>
            <div className='col-2'>
                <img src={ONE}/>
            </div>
            <div className='col-2'>
                <img src={SANOFI}/>
            </div>
            <div className='col-2'>
                <img src={PFIZER}/>
            </div>
            <div className='col-2'>
                <img src={ONE}/>
            </div>
        </div>
    </div>
  )
}

export default Partners