import Header from "../Components/Header"
import Footer from "../Components/Footer"

function Home() {

    return(
        <div className="flex flex-col h-screen">
            <Header page="home" />
            <div className="flex flex-col flex-1 items-center justify-center bg-slate-200">
                <h2 className="font-bold text-4xl p-3 m-3 text-red-700">Bienvenue au garage</h2>
                <p className=" p-3 text-xl">Vous pouvez accéder au garage pour ajouter, modifier ou supprimer des voitures</p>
            </div>
            <Footer />
        </div>
    )
}

export default Home