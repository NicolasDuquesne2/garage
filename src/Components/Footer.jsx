function Footer() {

    return (
        <div className="flex p-2 bg-slate-400 items-center justify-center">
            <div className="p-2">
                <p className="text-xl font-semibold">Nicolas Duquesne @{new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer