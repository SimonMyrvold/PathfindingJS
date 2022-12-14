import { useState } from "react"
import Circle from "./CircleControllPanel"
import Rectangle from "./RectangleControllerPanel"
import Gitter from "./GitterControllPanel"

export default function Ui() {

    const [settings, setSettings] = useState();
    
    function TypeSelect(type){
        document.getElementById("Rectangle").checked = false;
        document.getElementById("Circle").checked = false;
        document.getElementById("Gitter").checked = false;
        document.getElementById(type).checked = true;
        CheckType(type);
    }

    function CheckType (type){
        if (type == "Circle") {
            setSettings(<Circle />);
        }
        
        if (type == "Rectangle") {
            setSettings(<Rectangle />);
        }
        
        if (type == "Gitter") {
            setSettings(<Gitter />);
        }
    }

    return (
        <>
            <>
            <div className="flex flex-row space-x-4">
                <div className="box-content h-[70vh] w-80 p-16 border-8 bg-slate-400 rounded-[30px] flex-none">

                    <div className="columns-3 text-center">
                        <h2>Rektangulär</h2>
                        <input type="checkbox" classname="rounded-full" id="Rectangle" onChange={() => TypeSelect('Rectangle')}/>
                        <h2>Cirkulär</h2>
                        <input type="checkbox" classname="rounded-full" id="Circle" onChange={() => TypeSelect('Circle')}/>
                        <h2>Gitter</h2>
                        <input type="checkbox" classname="rounded-full" id="Gitter" onChange={() => TypeSelect('Gitter')}/>
                    </div>

                    <div>{settings}</div>

                </div>

                <div className="box-content w-96 p-16 border-8 bg-slate-400 rounded-[30px] flex-1"></div>

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
        </>
            
    )

}