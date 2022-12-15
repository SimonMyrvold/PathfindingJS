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
        let firstpart = ['A Big', 'A Small', 'A Tiny'];
        let secondpart = ["Spacious", "Inviting", "Cozy", "Elegant", "Sleek", "Bright", "Airy", "Welcoming", "Stylish", "Soothing", "Calming", "Comfortable", "Inviting", "Serene", "Tranquil", "Open", "Warm", "Intimate", "Luxurious", "Elegant", "Chic", "Vibrant", "Vintage", "Modern", "Minimalist", "Contemporary", "Rustic", "Eclectic", "Inviting", "Vintage", "Gorgeous", "Beautiful", "Stunning", "Elegant", "Artistic", "Classy", "Sophisticated", "Elegant", "Tasteful", "Charming", "Inviting", "Comfortable", "Welcoming", "Inviting", "Homely", "Comfortable", "Inviting", "Welcoming", "Inviting", "Cosy"];
        let lastpart = ["Living room", "Bedroom", "Bathroom", "Kitchen", "Dining room", "Nursery", "Guest room", "Study", "Library", "Den", "Sunroom", "Office", "Game room", "Theater room", "Music room", "Craft room", "Fitness room", "Home gym", "Sitting room", "Lounge", "Parlour", "Great room", "Media room", "Bar room", "Conservatory", "Ballroom", "Greenhouse", "Solarium", "Atrium", "Library", "Playroom", "Laundry room", "Powder room", "Mudroom", "Closet", "Pantry", "Balcony", "Patio", "Porch", "Deck", "Pool house", "Shed", "Barn", "Garage", "Basement", "Attic", "Crawl space", "Cupboard", "Cellars", "Root cellar"];
        let randomfirstpart = firstpart[Math.floor(Math.random()*firstpart.length)];
        let randomsecondpart = secondpart[Math.floor(Math.random()*secondpart.length)];
        let randomlastpart = lastpart[Math.floor(Math.random()*lastpart.length)];
        let sum = randomfirstpart + ' ' + randomsecondpart + ' ' + randomlastpart ;
        setNames(sum);

    }

    
    

    return (
        <div>
            <div>
                <button onClick={generate}>Name</button>
            </div>
            {names}
        </div>
    );

}
