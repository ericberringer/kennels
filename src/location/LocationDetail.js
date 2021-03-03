import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { AnimalContext } from "../animal/AnimalProvider"

export const LocationDetail = () => {
    // useContext is bringing in the getAnimalById from our AnimalProvider.
  const { getLocationById } = useContext(LocationContext)
  const { employees, getEmployees } = useContext(EmployeeContext)
  const { animals, getAnimals } = useContext(AnimalContext)

	const [location, setLocation] = useState({})

	const {locationId} = useParams();
    // useParams is a react function that allows the app
    // useParams is accessing the id in the url.
	const history = useHistory();

  useEffect(() => {
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
    getEmployees()
    .then(getAnimals)
    }, [])

  return (
    <section className="location">
        {console.log(employees, animals)}
      <h3 className="location__name">{location.name}</h3>
      {/* The question mark is an Optional chaining operator to prevent nested values
      from breaking the code.*/}
      <div className="location__address">Address: {location.address}</div>
      <div className="location__employees">Employees: {
      employees.filter(employee => employee.locationId === location.id)
      .map(employee => employee.name).join(", ")
      }
      </div>
      <div className="location__address">Animals: {
          animals.filter(animal => animal.locationId === location.id)
          .map(animal => animal.name).join(", ")
      }
      </div>
    </section>
  )
}