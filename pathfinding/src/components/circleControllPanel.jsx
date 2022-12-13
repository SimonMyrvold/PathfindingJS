import React from "react"
import GenerateButton from "./GenerateButton"


export default function circleControllPanel() {
    return (
        <nav className="text-center">
            
            <div className="columns-3 text-center">
                <h2 className="pt-2">Rektangulär</h2>
                <input type="checkbox" classname="rounded-full w-28"/>
                <h2 className="pt-2">Cirkulär</h2>
                <input type="checkbox" classname="rounded-full" />
                <h2 className="pt-2">Gitter</h2>
                <input type="checkbox" classname="rounded-full" />
                
            </div>
            
            <div className="mt-4 bg">
                <h2>Antal Rum</h2>
                <input type="range" className="appearance-none rounded-full w-4/5 mt-4 accent-black" min="0" max="100"/>
            </div>

            <div className="mt-4">
                <h2 className="text-center">Antal Rum</h2>
                <input type="range" className="appearance-none rounded-full w-full mt-4" min="0" max="100"/>
            </div>

            <div className="mt-4">
                <h2 className="text-center">Complexity</h2>
                <input type="range" className="appearance-none rounded-full w-full  mt-4" min="0" max="100"/>
            </div>


            <div className="mt-4 text-center">
                <GenerateButton />
            </div>

        </nav>
        
    )
}