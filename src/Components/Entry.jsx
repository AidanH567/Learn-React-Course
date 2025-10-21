import MountFuji from '../assets/Mount-Fuji.png'
import Marker from '../assets/Marker.png'


function Entry(props) {
    return (
        <div className="entry-box">
            <div className="image-div">
                <img src={props.img.src} alt={props.img.alt} className='journal-img' />
            </div>
            
            <div className="info-div">
                <div className='info-div-2'>
                    <img 
  src={Marker} 
  alt="Marker" 
  style={{ width: "9px" }} 
/>
                    <h2>{props.country}</h2>
                    <span>View on Google Maps</span>
                    </div>
            <h1 className="info-h1-country">{props.title}</h1>
            <p className='info-date'>{props.dates}</p>
            <p className='info-summary'>{props.text}</p>
        </div></div>
    )
}

export default Entry
