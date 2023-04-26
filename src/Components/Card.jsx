import { useStore } from "../Hooks/useStore"


function Card({car}) {

    const setDelModalState = useStore((state) => state.setShowDelModal)
    const setShowUpdateModal = useStore((state) => state.setShowUpdateModal)
    const setCarData = useStore((state) => state.setCarData)

    const handleUpdate = () => {
        setCarData(car)
        setShowUpdateModal(true)
    }
    const handleDelete = () => {
        setCarData(car)
        setDelModalState(true)
    }

    return (
        <div className="flex flex-col bg-white rounded-md shadow-md p-2 h-fit">
            <h3>Model : {car.model}</h3>
            <p>Marque : {car.brand}</p>
            <p>Couleur : {car.color}</p>
            <p>Date de sortie : {car.date}</p>
            <div className="my-1 flex justify-between">
                <button className="bg-slate-200 p-0.5 rounded-lg hover:bg-gray-300" type="button" onClick={() => handleUpdate()}>Modifier</button>
                <button className="bg-slate-200 p-0.5 rounded-lg hover:bg-gray-300" type="button" onClick={() => handleDelete()}>Supprimer</button>
            </div>
        </div>
    )

}

export default Card