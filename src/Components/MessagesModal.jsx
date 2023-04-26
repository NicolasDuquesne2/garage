
function MessageModal({message, action, state}) {

    let msgclassNames = ""

    if(state === "success") {
        msgclassNames = "bg-green-200 rounded-lg p-2 font-semibold"
    } else if(state === "fail") {
        msgclassNames = "bg-red-200 rounded-lg p-2 font-semibold"
    }

    return (
        <div className="p-3 bg-white rounded-lg">
            <p className={msgclassNames}>{message}</p>
            <div className="mt-2 flex justify-between">
                <button className="p-2 bg-slate-200 rounded-lg font-semibold text-red-800" type="button" onClick={() => action()}>Fermer</button>
            </div>
        </div>
    )
}

export default MessageModal