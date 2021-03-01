import React from "react"
import "./Animal.css"

export const AnimalCard = ({animal, customer, location})=> (
    <section className="animal">
        {/* {console.log(animal)} */}
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <div className="animal__clinic">Clinic: {location.name}</div>
        <div className="animal__customer">Customer: {customer.name}</div>

    </section>
)