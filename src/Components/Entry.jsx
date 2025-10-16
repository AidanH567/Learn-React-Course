import MountFuji from '../assets/Mount-Fuji.png'
import Marker from '../assets/Marker.png'


function Entry() {
    return (
        <div className="entry-box">
            <div className="image-div">
                <img src={MountFuji} alt="" className='journal-img' />
            </div>
            
            <div className="info-div">
                <div className='info-div-2'>
                    <img 
  src={Marker} 
  alt="Marker" 
  style={{ width: "9px" }} 
/>
                    <h2>Japan</h2>
                    <span>View on Google Maps</span>
                    </div>
            <h1 className="info-h1-country">Mount Fuji</h1>
            <p className='info-date'>12 Jan, 2021 - 24 Jan, 2021</p>
            <p className='info-summary'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div></div>
    )
}

export default Entry
