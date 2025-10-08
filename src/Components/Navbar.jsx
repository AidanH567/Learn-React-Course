import "../App.css"

function Navbar() {
 
    return (
        <header className="header">
        <nav className="nav-header">
        <img src="../react-logo.png" alt="" className="header-img" />
        <h1>React Facts</h1>
        </nav>
        <main className="header-main">
            <h1 style={{ margin: 0 }}>Fun Facts About React</h1>
        <ul className="header-ol">
            <li>hi</li>
            <li>there</li>
            <li>dude</li>
            <li>whats</li>
            <li>up</li>
        </ul>
        </main>
        </header>
    )
     
}

export default Navbar;