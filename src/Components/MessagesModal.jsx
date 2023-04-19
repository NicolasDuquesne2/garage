import "./modal.css"

function MessageModal({message, action}) {

    return (
        <div className="msg-modal">
            {message}
            <div className="buton-wrapper-form">
                <button type="button" onClick={() => action()}>Fermer</button>
            </div>
        </div>
    )
}

export default MessageModal