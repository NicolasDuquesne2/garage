import { useStore } from "../Hooks/useStore"
import useAddDatas from "../Hooks/useAddDatas"
import MessageModal from "./MessagesModal";
import Form from "./Form";


function AddModal({car}) {

    const [addDatas, mutation] = useAddDatas();
    const setAddModalState = useStore((state) => state.setShowAddModal)

    function close() {
        setAddModalState(false)
    }


    function record(event) {
        const form = event.target.form;
        const toSend = {model:form[0].value, brand: form[1].value, color: form[2].value, date: form[3].value}

        addDatas(toSend)
    }
    
    let htmlContent = <Form car={car} action={record} close={close}/>

    if(mutation.isError) {
        htmlContent = <MessageModal message={"La voiture n'a pas pu être ajoutée"} action={close} state="fail"/>
    }

    if(mutation.isSuccess) {
        htmlContent = <MessageModal message={"La voiture a été bien ajoutée"} action={close} state="success" />
    }

    return ( 
        <div className="absolute w-full h-full flex flex-col justify-center items-center bg-slate-100/50" onClick={() => close()}>
            <div className="w-fit">
                {htmlContent}
            </div>
        </div>
    )
}

export default AddModal