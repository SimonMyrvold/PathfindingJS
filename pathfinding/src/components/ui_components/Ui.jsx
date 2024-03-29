import React from "react"
import GameTypeSelector from "./GameTypeSelector";


export default function Ui() {

    const [names, setNames] = React.useState();
    
    function generate(){
        
        let firstpart = ['A big', 'A small', 'A tiny'];
        let secondpart = ['human', 'elephant', 'donkey'];
        let lastpart = ['of suger', 'of sun', 'of coffe'];
        let randomfirstpart = firstpart[Math.floor(Math.random()*firstpart.length)];
        let randomsecondpart = secondpart[Math.floor(Math.random()*secondpart.length)];
        let randomlastpart = lastpart[Math.floor(Math.random()*lastpart.length)];
        let sum = randomfirstpart + ' ' + randomsecondpart + ' ' + randomlastpart ;
        setNames(sum);

    }

    return (
        <>

            <div className="flex flex-row space-x-4">
                
                <div className="h-[90vh] w-[60vh] p-16 border-8 bg-slate-400 rounded-[30px] flex-none">
                    
                    {/* The game type selector */}
                    <GameTypeSelector 
                    nameGen = {generate}
                    />

                </div>
                
                <div className="box-content p-16 border-8 bg-slate-400 rounded-[30px] flex-1 text-center font-sm">
                    {names}
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
