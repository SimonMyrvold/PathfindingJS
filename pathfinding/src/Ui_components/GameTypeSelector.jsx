import { useState } from "react"
import Circle from "./CircleControllPanel"
import Rectangle from "./RectangleControllerPanel"
import Gitter from "./GitterControllPanel"


export default function GameTypeSelector(){
    
    const [settings, setSettings] = useState(
    <h2 className="mt-8">Select a game type to see the settings</h2>
    );
    
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
        <div>

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
    )

}