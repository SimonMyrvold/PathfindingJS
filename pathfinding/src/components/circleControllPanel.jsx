import React from "react"

export default function circleControllPanel() {
    return (
        <nav className="text-center">

            <div className="w-1/4">
                <input type="checkbox" classname="rounded-full"/>
                <h2>Rektangulär</h2>
                <input type="checkbox" classname="rounded-full" />
                <h2>Cirkulär</h2>
                <input type="checkbox" classname="rounded-full" />
                <h2>Gitter</h2>
            </div>

            <div className="mt-4">
                <h2>Antal Rum</h2>
                <input type="range" className="appearance-none rounded-full w-4/5 mt-4" min="0" max="100"/>
            </div>

            <div className="mt-4">
                <h2>Complexity</h2>
                <input type="range" className="appearance-none rounded-full w-4/5 mt-4" min="0" max="100"/>
            </div>

        </nav>
    )
}