import React from "react"

import CircleControll from "./components/CircleControllPanel"
import GitterControll from "./components/GitterControllPanel"
import Sketch from "./Sketch"
import Map from "./Map"

export default function App() {

    let world = new Map("tjo", 5, 5);

    return (
        //     <>
        //     {/* <CircleControll /> */}
        //     <>
        // <div className="flex flex-row space-x-4">
        // <div className="box-content h-96 w-80 p-16 border-8 bg-slate-400 rounded-[30px] flex-none">
        //     <CircleControll />


        // </div>
        // <div className="box-content h-96 w-96 p-16 border-8 bg-slate-400 rounded-[30px] flex-1"></div>
        // </div>

        // <div className="text-center flex justify-center items-center h-20">
        // <div className="h-12 w-1/2 border-4 bg-slate-400 rounded-[20px]">
        //     <div className="text-left flex flex-row h-10">
        //     <button className="rounded-md w-20">
        //         Load
        //     </button>
        //     <button className=" w-20">
        //         Save
        //     </button>
        //     </div>
        // </div>
        // </div>
        // </>
        //     <GitterControll />
        //     </>
        <div>
        <Map />
        {world}
        </div>
    )

}