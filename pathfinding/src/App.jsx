import React from "react"
import CircleControll from "./components/CircleControllPanel"
import GitterControll from "./components/GitterControllPanel"
import RectangleControll from "./components/RectangleController"

export default function App() {

    return (
            <>
            <>
        <div className="flex flex-row space-x-4">
        <div className="box-content h-96 w-80 p-16 border-8 bg-slate-400 rounded-[30px] flex-none">

            {/* <CircleControll /> */}
            {/* <RectangleControll /> */}
            <GitterControll />


        </div>
        <div className="box-content h-96 w-96 p-16 border-8 bg-slate-400 rounded-[30px] flex-1"></div>
        </div>

        <div className="text-center flex justify-center items-center h-20">
        <div className="h-12 w-1/2 border-4 bg-slate-400 rounded-[20px]">
            <div className="text-left flex flex-row h-10">
            <button className="rounded-md w-20">
                Load
            </button>
            <button className=" w-20">
                Save
            </button>
            </div>
        </div>
        </div>
        </>
            </>
            
    )

}