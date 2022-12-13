import React from "react"
// import GenerateButtonControll from "./components/GenerateButton"


export default function circleControllPanel() {
    return (
        <nav>


            <div className="columns-3 text-center">
                <input type="checkbox" className="rounded-full w-28"/>
                <h2 className="pt-2">Rektangulär</h2>
                <input type="checkbox" className="rounded-full" />
                <h2 className="pt-2">Cirkulär</h2>
                <input type="checkbox" className="rounded-full" />
                <h2 className="pt-2">Gitter</h2>
            </div>

            <div className="mt-4">
                <h2 className="text-center">Antal Rum</h2>
                <input type="range" className="appearance-none rounded-full w-full mt-4" min="0" max="100"/>
            </div>

            <div className="mt-4">
                <h2 className="text-center">Complexity</h2>
                <input type="range" className="appearance-none rounded-full w-full  mt-4" min="0" max="100"/>
            </div>
        </nav>
    )
}