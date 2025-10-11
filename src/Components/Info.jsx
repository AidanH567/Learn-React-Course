import "../App.css"

function Info() {
    return (
   <>
   <main className="info-main">
   <img style={{width :317  }}src="../CardPhoto.png" alt="" className="info-img"/>
   <div className="info-text">
    <h1>Aidan Herstik</h1>
    <p>Front End Developer</p>
    <small>herstikaidan@gmail.com</small>
    <div className="buttons-box">
        <button className="email-button">Email</button>
        <button className="linkedin-button">LinkedIn</button>
    </div>
   </div>

   </main>
   </> 
    )
}


export default Info;