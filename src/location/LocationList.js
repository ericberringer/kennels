import React, { useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { AnimalContext } from "../animal/AnimalProvider"


export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { animals, getAnimals } = useContext(AnimalContext)

    useEffect(() => {
        getEmployees()
        .then(getAnimals)
        .then(getLocations)
    }, [])

    const history = useHistory()

    return (
        <>
            <h3>Locations</h3>
            <div className="locations">
                {
                locations.map(location => {
                    return <LocationCard key={location.id} location={location} employees={employees} animals={animals}/>
                })
                }
            </div>
        <div className="locationButtonDiv">
          <button className="addLocationButton" onClick={() => {history.push("/locations/create")}}>
            New Location
          </button>
        </div>
  </>
    )
}