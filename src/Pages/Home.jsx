import Header from "../Components/Header"
import Footer from "../Components/Footer"

function Home() {

    return(
        <div className="home">
            <Header page="home" />
            <div className="home-body">
                <h2>Bienvenue au garage</h2>
                <p>Vous pouvez accéder au garage pour ajouter, modifier ou supprimer des voitures</p>
            </div>
            <Footer />
        </div>
    )
}

export default Home