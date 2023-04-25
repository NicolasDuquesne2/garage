function Header({page}) {

    let navContent = ""

    if(page === "home") {
        navContent =  <li><a className="link" href="http://localhost:3000/cars">Accéder au garage</a></li>
    }

    if(page === "cars") {
        navContent = <li><a className="link" href="http://localhost:3000/">Accéder à l'accueil</a></li>
    }

    return (
        <header className="flex p-2 bg-slate-400 items-center">
            <a className="font-semibold text-2xl p-2 text-red-700 hover:scale-105 delay-200" href="http://localhost:3000/">Le garage</a>
            <nav className="p-2">
                <ul className="">
                    {navContent}
                </ul>
            </nav>
        </header>
    )
}

export default Header