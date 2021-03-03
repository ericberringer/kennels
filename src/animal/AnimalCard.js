import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const AnimalCard = ({animal, customer, location})=> (
    <section className="animal">
        <h3 className="animal__name">
        <Link to={`/animals/detail/${animal.id}`}>
          { animal.name }
        </Link>
        </h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <div className="animal__clinic">Clinic: {location.name}</div>
        <div className="animal__customer">Customer: {customer.name}</div>

    </section>
)