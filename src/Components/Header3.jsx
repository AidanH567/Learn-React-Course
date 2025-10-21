import chefImg from "../assets/Chef.png"

function Header3() {
    return(
        <>
        <div className="header">
        <img className="header-img" src={chefImg}/>
        <h1 className="header-h1">Chef Claude</h1>
        </div>
        </>
    )
}

export default Header3