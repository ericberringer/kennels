import React from "react"
import { AnimalCard } from "../animal/AnimalCard"
import { CustomerCard } from "../customer/CustomerCard"
import "./Kennel.css"

export const Kennel = () => {
    const kennel = {
        name: "Dog Place",
        locations: [
            {
                name: "House for Dogs",
                address: "500 Poopy Place"
            }
        ]
    }
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
    
    const animals = [
        {
            "name": "Doodles",
            "breed": "Poodles",
            "locationId": 1,
            "customerId": 3,
            "id": 1
        },
        {
            "name": "Poop Eater",
            "breed": "Eats Pooper",
            "locationId": 1,
            "customerId": 2,
            "id": 2
        },
        {
            "name": "Poopa",
            "breed": "Turtle",
            "locationId": 1,
            "customerId": 2,
            "id": 3
        },
        {
            "name": "Terrence",
            "breed": "Hawk",
            "locationId": 4,
            "customerId": 4,
            "id": 4
        }
    ]

    return (
        <>
        <h2>{kennel.name}</h2>
        <small>Loving care when you're a deadbeat pet owner.</small>
        <address>
            <div>{kennel.locations[0].name}</div>
            <div>{kennel.locations[0].address}</div>
        </address>
        <h2>Animals</h2>
        <article className="animals">
            {
                animals.map(animal => {
                    return <AnimalCard key={animal.id} animal={animal}/>
                })
            }
        </article>
            <h2>Customers</h2>
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
