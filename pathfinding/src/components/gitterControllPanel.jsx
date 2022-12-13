import React from "react"
import CircleControll from "./CircleControllPanel"
import RectangleControll from "./RectangleController"

export default function gitterControllPanel(){
    return (
        <>
        <div className="flex flex-row space-x-4">
        <div className="box-content w-80 p-16 border-8 bg-slate-400 rounded-[30px] flex-none">

        <CircleControll />
        {/* <RectangleControll /> */}


        </div>
        <div className="box-content h-96 w-96 p-16 border-8 bg-slate-400 rounded-[30px] flex-1"></div>
        </div>

        <div className="text-center flex justify-center items-center">
        <div className="h-12 w-1/2 border-4 bg-slate-400 rounded-[20px]">
            <div className="text-left flex flex-row space-x-10 h-10">
            <button className="rounded-md">
                Load
            </button>
            <button>
                Save
            </button>
            </div>
        </div>
        </div>
        </>
    )
}