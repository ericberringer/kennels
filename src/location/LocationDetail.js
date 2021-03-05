import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { AnimalContext } from "../animal/AnimalProvider"

export const LocationDetail = () => {
    // useContext is bringing in the getLocationById from our AnimalProvider. And bringing in the necessary employee and animal info.
  const { getLocationById } = useContext(LocationContext)
  const { employees, getEmployees } = useContext(EmployeeContext)
  const { animals, getAnimals } = useContext(AnimalContext)

	const [location, setLocation] = useState({})
  // This state variable will allow us to set the locationId from the url into our locaiton variable. 
  // So we can access it in order to select the specific location.

	const {locationId} = useParams();
    // useParams is a react function that allows the app
    // useParams is accessing the id in the url.
	const history = useHistory();

  useEffect(() => {
    // This sets the locationId from the url into our state location variable.
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
    getEmployees()
    .then(getAnimals)
    }, [])

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">Address: {location.address}</div>
      {/* Grab the employees who match their locationId with id of location, print those locations names.
      Do the same for animals. */}
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
      <button onClick={() => {history.push(`/locations/edit/${location.id}`)}}>Edit</button>
    </section>
  )
}