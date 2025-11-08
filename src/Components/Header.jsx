function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <img 
                    src="react-logo.png" 
                    className="logo" 
                    alt="React logo" 
                />
                <h1 className="site-title">ReactFacts</h1>
            </div>

            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#pricing" className="nav-link">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
