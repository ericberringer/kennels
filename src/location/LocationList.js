import React, { useEffect, useContext } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"


export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

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
  </>
    )
}