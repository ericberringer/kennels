import React, { useState, useEffect } from "react"
import { AnimalCard } from "../animal/AnimalCard"
import { CustomerCard } from "../customer/CustomerCard"
import { PropsAndState } from "./PropsAndState"
import "./Kennel.css"

export const Kennel = () => {
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

    const [animals, setAnimals] = useState([])


    // useEffect(callback function, [])
    // import useEffect, this is defined in react.
    // useEffect takes two arguments, callback function and an array. this is a build in react hook.
    // This will allow you to do something when the data is changed.
    // Anytime the item in the [] (at end of fetch call) is used, useEffect is run.
    // Watch out what you pass in the [], this could start an infinite loop. You probably wont pass anything here yet.
    useEffect(() => {
        console.log("Fetching animals from API")
        fetch("http://localhost:8088/animals")
        .then(response => response.json())
        .then(animalsData => setAnimals(animalsData))
    }, [])
    
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
    let [counter, setCounter] = useState(1)
    // This is usually declared at the top of the function (Kennel).

    
    // the initial value of counter is 1 because 1 is being passed into useState().
    // this hook (useState) returns an array with two objects, counter is a variable, and setCounter is a call back Function.
    // naming convention of call back function is to use 'set'.
    // 
    
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
        <div>Currently Helping #{counter}</div>
        <button className="button" onClick={incrementCounter}>Take a number</button>
        {/* onClick is calling incrementCounter function */}
        <h2 className="animalHeader">Animals</h2>
        <article className="animals">
            {
                animals.map(animal => {
                    return <AnimalCard key={animal.id} animal={animal}/>
                })
            }
        </article>
            <h2 className="customerHeader">Customers</h2>
        <article className="customers">
            {
                customer.map(customer => {
                    return <CustomerCard key={customer.id} customer={customer}/>
                })
            }
        </article>
        </>
    )
}
