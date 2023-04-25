import { useStore } from "../Hooks/useStore"
import useAddDatas from "../Hooks/useAddDatas"
import MessageModal from "./MessagesModal";
import Form from "./Form";


function AddModal({car}) {

    const [addDatas, mutation] = useAddDatas();
    const setCarData = useStore((state) => state.setCarData)
    const setModalState = useStore((state) => state.setShowAddModal)


    function close() {
        setModalState(false)
    }


    function record(event) {
        const form = event.target.form;
        const toSend = {model:form[0].value, brand: form[1].value, color: form[2].value, date: form[3].value}

        addDatas(toSend)
        setCarData(null)
    }
    
    let htmlContent = <Form car={car} action={record} close={close}/>

    if(mutation.isError) {
        htmlContent = <MessageModal message={"La voiture n'a pas pu être ajoutée"} action={close}/>
    }

    if(mutation.isSuccess) {
        htmlContent = <MessageModal message={"La voiture a été bien ajoutée"} action={close}/>
    }

    return ( 
        <div className="modal-bg" onClick={() => close()}>
            <div className="modal">
                {htmlContent}
            </div>
        </div>
    )
}

export default AddModal