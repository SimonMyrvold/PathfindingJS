import React from "react"
import GenerateButton from "./GenerateButton"


export default function gitterControllPanel(){
    return (
        <nav className="text-center">
            
            <div className="columns-3 text-center">
                <h2>Rektangulär</h2>
                <input type="checkbox" classname="rounded-full w-28"/>
                <h2>Cirkulär</h2>
                <input type="checkbox" classname="rounded-full" />
                <h2>Gitter</h2>
                <input type="checkbox" classname="rounded-full" />
                
            </div>

            <div className="mt-4">
                <h2 className="text-center">Antal Rum</h2>
                <input type="range" className="appearance-none rounded-full w-full mt-4" min="0" max="100"/>
            </div>

            <div className="mt-4 text-center">
                <GenerateButton />
            </div>

        </nav>
    )
}