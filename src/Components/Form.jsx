

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
        <div className="w-fit p-4 bg-white rounded-lg shadow-lg" onClick={onClick}>
            <form className="p-2">
                <label htmlFor="model">Model : </label><br></br>
                <input className="bg-gray-50 border border-gray-300 rounded-lg focus:outline-none" type="text" name="model" defaultValue={modelDefaultVal} required/><br></br>
                
                <label className="mt-1" htmlFor="brand">Marque : </label><br></br>
                <input className="bg-gray-50 border border-gray-300 rounded-lg focus:outline-none" type="text" name="brand" defaultValue={brandDefaultVal} required/><br></br>
                
                <label htmlFor="color"> Couleur : </label><br></br>
                <input className="bg-gray-50 border border-gray-300 rounded-lg focus:outline-none" type="text" name="color" defaultValue={colorDefaultVal} required/><br></br>
                
                <label htmlFor="date">Année de sortie : </label><br></br>
                <input className="bg-gray-50 border border-gray-300 rounded-lg focus:outline-none" type="number" name="date" defaultValue={dateDefaultVal} required/><br></br>
                <div className="mt-2 flex justify-between">
                    <button  className="p-2 bg-slate-200 rounded-lg font-semibold text-red-800" type="button" value onClick={(event) => action(event)}>Enregistrer</button>
                    <button className="p-2 bg-slate-200 rounded-lg font-semibold text-red-800 "  type="button" onClick={() => close()}>Annuler</button>
                </div>
            </form>
        </div>
    )
}

export default Form