import useFetchDatas from "../Hooks/useFetchDatas"
import Card from "../Components/Card"
import AddModal from "../Components/AddModal"
import DelModal from "../Components/DelModal"
import UpdateModal from "../Components/UpdateModal"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { useStore } from "../Hooks/useStore"


function Cars() {

    const showAddModalState = useStore((state) => state.showAddModal)
    const setAddModalState = useStore((state) => state.setShowAddModal)
    const showDelModalState = useStore((state) => state.showDelModal)
    const showUpdateModal = useStore((state) => state.showUpdateModal)
    const carData = useStore((state) => state.carData)
    const setCarData = useStore((state) => state.setCarData)
    
    let modal = ""

    console.log(showDelModalState);

    if(showAddModalState) {
        modal = <AddModal car = {carData}/>
    }

    if (showDelModalState) {
        modal = <DelModal car = {carData} />
    }

    if(showUpdateModal) {
        modal = <UpdateModal car={carData} />
    }

    const {isLoading, error, data} = useFetchDatas('cars', 'http://localhost:8080/cars')
    let content = ""

    if(isLoading) {
        content = <p className="text-sky-600 font-semibold mx-auto w-fit text-2xl" id="is-loading">ça charge</p>
    }

    if(error) {
        content = <p className="text-red-600 font-semibold mx-auto w-fit text-2xl" id="error">oups ! erreur {error.message}</p>
    }

    if (data){

        if (data.length === 0) {
            content = <p className="text-red-600 font-semibold mx-auto w-fit text-2xl">Pas de voiture à afficher</p>
        } else {
            content = <div id="cards-mosaic" className="grid grid-cols-5 gap-1">{data.map((car, index) => {
                return <Card key={`car-${index}`} car={car}/>
            })}</div>
        }
    }

    const onNewCar = () => {
        setCarData(null)
        setAddModalState(true)
    }

    return (
        <div className="flex flex-col h-screen">
            <Header page="cars" />
            <section className=" flex flex-col flex-1 bg-slate-200">
                <h2 className="text-sky-600 font-bold p-2 m-2 text-3xl">La liste des voitures</h2>
                <div className="flex-1 flex justify-center  mx-auto">
                    {content}
                </div>
                <div className="">
                    <button className="p-2 m-3 bg-blue-400 rounded-lg font-semibold text-red-800 shadow-xl hover:scale-105 delay-150" onClick={() => onNewCar()}>Ajouter une voiture</button>
                </div>
            </section>
            <Footer />
            {modal}
        </div>
    )
}

export default Cars