import React from "react";
import { PropsAndState } from './PropsAndState'

export const Home = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're a deadbeat pet owner.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Poopy Way</div>
        </address>
        <PropsAndState yourName={"Eric"} />
        {/* PropsAndState is a function that returns html with a representation of my name so I am sending it
        a prop (yourName) with my name as the object. yourName is passed into the function.  */}
        <div>Currently Helping #{counter}</div>
        <button className="button" onClick={incrementCounter}>Take a number</button>
        {/* onClick is calling incrementCounter function */}
    </>
)

let [counter, setCounter] = useState(1)

const incrementCounter = () => {
    const newCounterValue = ++counter
    setCounter(newCounterValue)
}