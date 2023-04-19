import "./modal.css"
import { useStore } from "../Hooks/useStore"
import useUpdateDatas from "../Hooks/useUpdateDatas";
import MessageModal from "./MessagesModal";
import Form from "./Form";


function UpdateModal({car}) {

    const [updateDatas, mutation] = useUpdateDatas();
    const setCarData = useStore((state) => state.setCarData)
    const setShowUpdateModal = useStore((state) => state.setShowUpdateModal)


    function close() {
        setShowUpdateModal(null)
    }


    function update(event) {
        const form = event.target.form;
        const address = `/car/${car.id}` 
        const cardata = {id: car.id, model:form[0].value, brand: form[1].value, color: form[2].value, date: form[3].value}
        const toSend = {address: address, data: cardata}
        updateDatas(toSend)
        setCarData(null)
    }
    
    let htmlContent = <Form car={car} action={update} close={close}/>

    if(mutation.isError) {
        htmlContent = <MessageModal message={"La voiture n'a pas pu être modifiée"} action={close}/>
    }

    if(mutation.isSuccess) {
        htmlContent = <MessageModal message={"La voiture a été bien modifiée"} action={close}/>
    }

    return ( 
        <div className="modal-bg" onClick={() => close()}>
            <div className="modal">
                {htmlContent}
            </div>
        </div>
    )
}

export default UpdateModal