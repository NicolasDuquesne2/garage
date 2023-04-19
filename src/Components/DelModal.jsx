import { useStore } from "../Hooks/useStore"
import useDeleteData from "../Hooks/useDeleteData"
import MessageModal from "./MessagesModal"
import "./modal.css"

function DelModal({car}) {
    const setDelModalState = useStore((state) => state.setShowDelModal)
    const [deleteCar, mutation] = useDeleteData()
    const setCarData = useStore((state) => state.setCarData)

    const close = () => {
        setDelModalState(false)
    }

    const onDelete = () => {
        const address = `/car/${car?.id}`
        deleteCar(address)
        setCarData(null)
    }

    let htmlContent = <div className="form">
        <h4>Voulez vous vraiment supprimer cette voiture ?</h4>
        <div className="error-message-card">
            <h5>Model : {car?.model}</h5>
            <p>Marque : {car?.brand}</p>
            <p>Couleur : {car?.color}</p>
            <p>Date de sortie : {car?.date}</p>
        </div>
        <div className="buton-wrapper-form">
            <button type="button" onClick={() => onDelete()}>Oui</button>
            <button type="button" onClick={() => close()}>Annuler</button>
        </div>
        </div>

    if(mutation.isError) {
        htmlContent = <MessageModal message={"La voiture n'a pas pu être supprimée"} action={close}/>
    }

    if(mutation.isSuccess) {
        htmlContent = <MessageModal message={"La voiture a été bien supprimée"} action={close}/>
    }

    return(
        <div className="modal-bg" onClick={() => close()}>
            <div className="modal">
                {htmlContent}
            </div>
        </div>
    )
}

export default DelModal