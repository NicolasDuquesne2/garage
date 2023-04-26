import { useStore } from "../Hooks/useStore"
import useUpdateDatas from "../Hooks/useUpdateDatas";
import MessageModal from "./MessagesModal";
import Form from "./Form";


function UpdateModal({car}) {

    const [updateDatas, mutation] = useUpdateDatas();
    const setShowUpdateModal = useStore((state) => state.setShowUpdateModal)


    function close() {
        setShowUpdateModal(false)
    }


    function update(event) {
        const form = event.target.form;
        const address = `/car/${car.id}` 
        const cardata = {id: car.id, model:form[0].value, brand: form[1].value, color: form[2].value, date: form[3].value}
        const toSend = {address: address, data: cardata}
        updateDatas(toSend)
    }
    
    let htmlContent = <Form car={car} action={update} close={close}/>

    if(mutation.isError) {
        htmlContent = <MessageModal message={"La voiture n'a pas pu être modifiée"} action={close} state="fail"/>
    }

    if(mutation.isSuccess) {
        htmlContent = <MessageModal message={"La voiture a été bien modifiée"} action={close} state="success"/>
    }

    return ( 
        <div className="absolute w-full h-full flex flex-col justify-center items-center bg-slate-100/50" onClick={() => close()}>
            <div id="modal">
                {htmlContent}
            </div>
        </div>
    )
}

export default UpdateModal