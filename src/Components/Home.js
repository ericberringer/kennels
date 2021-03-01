import React, { useState } from "react";
import { PropsAndState } from './PropsAndState'

export const Home = () => {
        let [counter, setCounter] = useState(1)
    // let counter = 1
    // useState() is called a hook. It stores data about the component. 
    // "My component has its own state to maintain. Therefore, I will use the State hook to store it."
    // When this counter is updated it will re-render.
    // let [counter, setCounter] = useState(1)
    // This is usually declared at the top of the function (Kennel).


        const [kennel, setKennel] = useState ({
            name: "Nashville Kennels: #1 in Davidson County",
            locations: [
                {
                    name: "House for Dogs",
                    address: "500 Poopy Place"
                }
            ]
        })
        
        const incrementCounter = () => {
            const newCounterValue = ++counter
            setCounter(newCounterValue)
            // the initial value of counter is 1 because 1 is being passed into useState().
            // this hook (useState) returns an array with two objects, counter is a variable, and setCounter is a call back Function.
            // naming convention of call back function is to use 'set'.
            }
                
    return (
    
    <>
        <h2>{kennel.name}</h2>
        <small>Loving care when you're a deadbeat pet owner.</small>
        <address>
            <div>Visit Us at the {kennel.locations[0].name} Location</div>
            <div>{kennel.locations[0].address}</div>
        </address>
        {/* <PropsAndState yourName={"Eric"} /> */}
        {/* PropsAndState is a function that returns html with a representation of my name so I am sending it
        a prop (yourName) with my name as the object. yourName is passed into the function.  */}
        <div>Currently Helping #{counter}</div>
        <button className="button" onClick={incrementCounter}>Take a number</button>
        {/* onClick is calling incrementCounter function */}
    </>
    )
}

