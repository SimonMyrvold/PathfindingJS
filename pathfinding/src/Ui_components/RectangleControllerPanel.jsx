import React from "react"
import DropdownComponent from "./DropDownComponent"
import GenerateButton from "./GenerateButton"

export default function RectangleControllerPanel(props) {
    return (
        <nav>

            <div className="mt-4">
                <h2 className="text-center">x-axel</h2>
                <input type="range" className="appearance-none rounded-full w-full mt-4" min="0" max="100"/>
            </div>

            <div className="mt-4">
                <h2 className="text-center">y-axel</h2>
                <input type="range" className="appearance-none rounded-full w-full  mt-4" min="0" max="100"/>
            </div>


            <div className="mt-6">
                <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer"/>
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Order / Unorder</span>
                </label>
            </div>

            <div className="columns-2 mt-4 text-center">
                <input type="checkbox" className="rounded-full"/>
                <h2 className="pt-2">Block</h2>
                <input type="checkbox" className="rounded-full" />
                <h2 className="pt-2">Unblock</h2>
            </div>
            
            <div className="mt-4">
                <DropdownComponent />
            </div>

            <div className="mt-4 text-center">
                <GenerateButton
                nameGen={props.nameGen}

                />
            </div>

        </nav>
    )
}