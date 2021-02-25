import React, { useState, useEffect } from "react"
import { AnimalCard } from "../animal/AnimalCard"
import { CustomerCard } from "../customer/CustomerCard"
import { PropsAndState } from "./PropsAndState"
import "./Kennel.css"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

export const Kennel = () => {
    
    // <>
    // <NavBar />
    // <ApplicationViews />
    // </>

    const [kennel, setKennel] = useState ({
        name: "Dog Place",
        locations: [
            {
                name: "House for Dogs",
                address: "500 Poopy Place"
            }
        ]
    })
    const customer = [
        {
            "name": "Dirk Diggler",
            "address": "420 Fecal Street, Apt. 69",
            "id": 1
        },
        {
            "name": "Dirk Diggler",
            "address": "420 Fecal Street, Apt. 69",
            "id": 2
        }
    ]
    
    // const [animals, setAnimals] = useState([
    //     {
    //         "name": "Doodles",
    //         "breed": "Poodles",
    //         "locationId": 1,
    //         "customerId": 3,
    //         "id": 1
    //     },
    //     {
    //         "name": "Poop Eater",
    //         "breed": "Eats Pooper",
    //         "locationId": 1,
    //         "customerId": 2,
    //         "id": 2
    //     },
    //     {
    //         "name": "Poopa",
    //         "breed": "Turtle",
    //         "locationId": 1,
    //         "customerId": 2,
    //         "id": 3
    //     },
    //     {
    //         "name": "Terrence",
    //         "breed": "Hawk",
    //         "locationId": 4,
    //         "customerId": 4,
    //         "id": 4
    //     }
    // ])

    // let counter = 1
    // useState() is called a hook. It stores data about the component. 
    // "My component has its own state to maintain. Therefore, I will use the State hook to store it."
    // When this counter is updated it will re-render.
    let [counter, setCounter] = useState(1)
    // This is usually declared at the top of the function (Kennel).


    
    // the initial value of counter is 1 because 1 is being passed into useState().
    // this hook (useState) returns an array with two objects, counter is a variable, and setCounter is a call back Function.
    // naming convention of call back function is to use 'set'.
    const incrementCounter = () => {
        const newCounterValue = ++counter
        setCounter(newCounterValue)
        // console.log("counter", counter)
    }
    return (
        <>
        <h2>{kennel.name}</h2>
        <small>Loving care when you're a deadbeat pet owner.</small>
        <address>
            <div>{kennel.locations[0].name}</div>
            <div>{kennel.locations[0].address}</div>
        </address>
        <PropsAndState yourName={"Eric"} />
        {/* PropsAndState is a function that returns html with a representation of my name so I am sending it
        a prop (yourName) with my name as the object. yourName is passed into the function.  */}
        <div>Currently Helping #{counter}</div>
        <button className="button" onClick={incrementCounter}>Take a number</button>
        {/* onClick is calling incrementCounter function */}
        <h2 className="animalHeader">Animals</h2>
            <h2 className="customerHeader">Customers</h2>
        <article className="customers">
            {
                customer.map(customer => {
                    return <CustomerCard key={customer.id} customer={customer}/>
                })
            }
            {/* import <AnimalProvider> 
                        <AnimalList />
                         <AnimalProvider />        
            */}
        </article>
        </>
    )
}
