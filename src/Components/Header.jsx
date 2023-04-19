import "./header.css"

function Header({page}) {

    let navContent = ""

    if(page === "home") {
        navContent = <ul className="links-list">
            <li><a className="link" href="http://localhost:3000/cars">Accéder au garage</a></li>
        </ul>
    }

    if(page === "cars") {
        navContent = <ul className="links-list">
        <li><a className="link" href="http://localhost:3000/">Accéder à l'accueil</a></li>
    </ul>
    }

    return (
        <header className="main-header">
            <div className="main-header-title-wrapper">
                <a className="main-header-title" href="http://localhost:3000/">Le garage</a>
            </div>
            <nav className="main-nav">
                {navContent}
            </nav>
        </header>
    )
}

export default Header