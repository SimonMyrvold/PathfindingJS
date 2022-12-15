import React from "react"
import GameTypeSelector from "./GameTypeSelector";

export default function Ui() {

    return (
        <>

            <div className="flex flex-row space-x-4">
                
                <div className="h-[90vh] w-[60vh] p-16 border-8 bg-slate-400 rounded-[30px] flex-none">
                    
                    {/* The game type selector */}
                    <GameTypeSelector />

                </div>

                <div className="p-16 w-[200vh] border-8 bg-slate-400 rounded-[30px]">
                    
                    <canvas></canvas>

                </div>

            </div>

            <div className="text-center flex justify-center items-center h-[10vh]">
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