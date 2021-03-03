import React from "react"
import { Link } from "react-router-dom"
import "./Location.css"

export const LocationCard = ({location, employees, animals}) => (



    <section className="location">
        <h3 className="location__name">
            <Link to={`/locations/detail/${location.id}`}>{location.name}</Link>
        </h3>
        <h4 className="location__employees">{employees.filter(employee => employee.locationId === location.id).length} Employees</h4>
        <h4 className="location__animals">{animals.filter(animal => animal.locationId === location.id).length} Animals</h4>
    </section>
)