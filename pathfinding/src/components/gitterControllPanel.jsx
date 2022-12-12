import React from "react"

export default function gitterControllPanel(){
    return (
        <>
        <div className="flex flex-row space-x-4">
        <div className="box-content h-96 w-80 p-16 border-8 bg-slate-400 rounded-[30px] flex-none">
        <nav className="text-center mt-4">

<div className="w-1/3">
    <input type="checkbox" classname="rounded-full"/>
    <h2>Rektangulär</h2>
    <input type="checkbox" classname="rounded-full" />
    <h2>Cirkulär</h2>
    <input type="checkbox" classname="rounded-full" />
    <h2>Gitter</h2>
</div>

<div className="mt-10">
    <h2>Antal Rum</h2>
    <input type="range" className="appearance-none bg-white rounded-full w-3/4 mt-4" min="0" max="100"/>
</div>

<div className="mt-10">
    <h2>Complexity</h2>
    <input type="range" className="appearance-none bg-white rounded-full w-3/4 mt-4" min="0" max="100"/>
</div>

</nav>

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