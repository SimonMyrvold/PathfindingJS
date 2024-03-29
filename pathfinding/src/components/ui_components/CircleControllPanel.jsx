import React from "react"
import GenerateButton from "./GenerateButton"


export default function CircleControllPanel(props) {
    return (
        <nav className="text-center">

            <div className="mt-4">
                <h2 className="text-center">Antal Rum</h2>
                <input type="range" className="appearance-none rounded-full w-full mt-4" min="0" max="100"/>
            </div>

            <div className="mt-4">
                <h2 className="text-center">Complexity</h2>
                <input type="range" className="appearance-none rounded-full w-full  mt-4" min="0" max="100"/>
            </div>


            <div className="mt-4 text-center">
                <GenerateButton
                nameGen={props.nameGen}

                />
            </div>

        </nav>
        
    )
}