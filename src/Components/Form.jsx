

function Form({car, action, close}) {

    let modelDefaultVal = ""
    let brandDefaultVal = ""
    let colorDefaultVal = ""
    let dateDefaultVal = null


    if(car) {
        modelDefaultVal = car.model
        brandDefaultVal = car.brand
        colorDefaultVal = car.color
        dateDefaultVal = car.date
    }


    function onClick(event) {
        event.stopPropagation()
    }


    return(
        <div className="form" onClick={onClick}>
            <form >
                <label htmlFor="model">Model :</label>
                <input type="text" name="model" defaultValue={modelDefaultVal} />
                
                <label htmlFor="brand">Marque : </label>
                <input type="text" name="brand" defaultValue={brandDefaultVal} />
                
                <label htmlFor="color"> Couleur : </label>
                <input type="text" name="color" defaultValue={colorDefaultVal} />
                
                <label htmlFor="date">Année de sortie : </label>
                <input type="number" name="date" defaultValue={dateDefaultVal} />
                <div className="buton-wrapper-form">
                    <button type="button" value onClick={(event) => action(event)}>Enregistrer</button>
                    <button type="button" onClick={() => close()}>Annuler</button>
                </div>
            </form>
        </div>
    )
}

export default Form