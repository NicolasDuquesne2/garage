import { useStore } from "../Hooks/useStore"
import useDeleteData from "../Hooks/useDeleteData"
import MessageModal from "./MessagesModal"

function DelModal({car}) {
    const setDelModalState = useStore((state) => state.setShowDelModal)
    const [deleteCar, mutation] = useDeleteData()


    
    function onClick(event) {
        event.stopPropagation()
    }

    const close = () => {
        setDelModalState(false)
    }

    const onVal = (event) => {
        const address = `/car/${car?.id}`
       deleteCar(address)
    }

    let htmlContent = <div className="w-fit p-4 bg-white rounded-lg shadow-lg" onClick={onClick}>
        <h4 className="text-red-700 font-semibold mb-2 p-2 bg-red-100 rounded-lg">Voulez vous vraiment supprimer cette voiture ?</h4>
        <div className="p-2 bg-red-200  rounded-lg">
            <h5>Model : {car?.model}</h5>
            <p>Marque : {car?.brand}</p>
            <p>Couleur : {car?.color}</p>
            <p>Date de sortie : {car?.date}</p>
        </div>
        <div className="mt-2 flex justify-between">
            <button className="p-2 bg-slate-200 rounded-lg font-semibold text-red-800" type="button" onClick={(event) => onVal(event)}>Valider</button>
            <button className="p-2 bg-slate-200 rounded-lg font-semibold text-red-800" type="button" onClick={() => close()}>Annuler</button>
        </div>
        </div>

    if(mutation.isError) {
        console.log("mutation error");
        htmlContent = <MessageModal message={"La voiture n'a pas pu être supprimée"} action={close} state="fail"/>
    }

    if(mutation.isSuccess) {
        console.log("mutation success");
        htmlContent = <MessageModal message={"La voiture a été bien supprimée"} action={close} state="success" />
    }

    return(
        <div className="absolute w-full h-full flex flex-col justify-center items-center bg-slate-100/50" onClick={() => close()}>
            <div id="modal">
                {htmlContent}
            </div>
        </div>
    )
}

export default DelModal