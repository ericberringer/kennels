import React, { useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"


export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    const history = useHistory()

    return (
        <>
            <h3>Locations</h3>
            <div className="locations">
                {
                locations.map(location => {
                    return <LocationCard key={location.id} location={location} />
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