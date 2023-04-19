import { useStore } from "../Hooks/useStore"


function Card({car}) {

    const setModalState = useStore((state) => state.setShowAddModal)
    const setDelModalState = useStore((state) => state.setShowDelModal)
    const setShowUpdateModal = useStore((state) => state.setShowUpdateModal)
    const setCarData = useStore((state) => state.setCarData)

    const handleUpdate = () => {
        setDelModalState(null)
        setCarData(car)
        setShowUpdateModal({type: "update"})
    }
    const handleDelete = () => {
        setModalState(null)
        setCarData(car)
        setDelModalState({type: "delete"})
    }

    return (
        <div className="card">
            <h3>Model : {car.model}</h3>
            <p>Marque : {car.brand}</p>
            <p>Couleur : {car.color}</p>
            <p>Date de sortie : {car.date}</p>
            <div className="buton-wrapper-form">
                <button type="button" onClick={() => handleUpdate()}>Modifier</button>
                <button type="button" onClick={() => handleDelete()}>Supprimer</button>
            </div>
        </div>
    )

}

export default Card