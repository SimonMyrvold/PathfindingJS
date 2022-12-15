import { useState } from "react"
// import React from "react";

// export default function NameGenerator(){
    
//     const [names, setNames] = useState();

//     function generate() {
//         let firstpart = ['A big', 'A small', 'A tiny'];
//         let secondpart = ['human', 'elephant', 'donkey'];
//         let lastpart = ['of suger', 'of sun', 'of coffe'];
//         let randomfirstpart = firstpart[Math.floor(Math.random()*firstpart.length)];
//         let randomsecondpart = secondpart[Math.floor(Math.random()*secondpart.length)];
//         let randomlastpart = lastpart[Math.floor(Math.random()*lastpart.length)];
//         let sum = randomfirstpart + ' ' + randomsecondpart + ' ' + randomlastpart ;
//         setNames(sum);
//     }
    
//     generate();

//     return(
//         <div>
//            <h1>{names}</h1>  
//         </div>
       
//     )
// }


export default function NameGenerator(){
    
    const [names, setNames] = useState();
    
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
        <div>
            <div>
                <button onClick={generate}>Hej</button>
            </div>
            {names}
        </div>
    );

}
