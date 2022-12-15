import React from "react"
import GameTypeSelector from "./GameTypeSelector";
import NameGenerator from "./NameGenerator";

export default function Ui() {

    return (
        <>

            <div className="flex flex-row space-x-4">
                
                <div className="box-content h-[70vh] w-[45vh] p-16 border-8 bg-slate-400 rounded-[30px] flex-none">

                    <GameTypeSelector />

                </div>

                <div className="box-content w-[70vh] p-16 border-8 bg-slate-400 rounded-[30px] flex-1">
                    <NameGenerator />
                    </div>

            </div>

            <div className="text-center flex justify-center items-center h-16">
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
    )

}