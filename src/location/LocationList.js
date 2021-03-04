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

    // Within useEffect it is a good idea to set the data you are mapping through at the end of the .thens.
    // In this case we are mapping locations so it will be at the end of useEffect.
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
                    // Location, Employee, and Animal context are all available so we can pass them all into Location Card
                    // which is what is happening with location={location} etc.
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