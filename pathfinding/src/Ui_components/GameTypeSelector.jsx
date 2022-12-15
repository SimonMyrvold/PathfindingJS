import { useState } from "react"
import Circle from "./CircleControllPanel"
import Rectangle from "./RectangleControllerPanel"
import Gitter from "./GitterControllPanel"


export default function GameTypeSelector(){
    
    //Set the default settings to a h2 tag with text
    const [settings, setSettings] = useState(
    <h2 className="mt-8">Select a game type to see the settings</h2>
    );
    
    function TypeSelect(type){
        //Set all checkboxes to false
        //Set the selected checkbox to true
        document.getElementById("Rectangle").checked = false;
        document.getElementById("Circle").checked = false;
        document.getElementById("Gitter").checked = false;
        document.getElementById(type).checked = true;
        //call the function that checks the type
        CheckType(type);
    }

    function CheckType (type){
        //Check the type and set the settings accordingly
        if (type == "Circle") {
            //Set the settings to the respective component
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
            {/* The checkboxes for selecting the game type */}
            <div className="columns-3 text-center">
                <h2>Rektangulär</h2>
                <input type="checkbox" className="rounded-full" id="Rectangle" onChange={() => TypeSelect('Rectangle')}/> {/*Gives the type varible the value of the checkbox*/}
                <h2>Cirkulär</h2>
                <input type="checkbox" className="rounded-full" id="Circle" onChange={() => TypeSelect('Circle')}/> {/*Gives the type varible the value of the checkbox*/}
                <h2>Gitter</h2>
                <input type="checkbox" className="rounded-full" id="Gitter" onChange={() => TypeSelect('Gitter')}/> {/*Gives the type varible the value of the checkbox*/}
            </div>

            {/* The settings for the selected game type */}
            <div>{settings}</div>
            
        </>
    )

}