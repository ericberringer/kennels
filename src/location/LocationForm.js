import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import "./Location.css"
import { useHistory, useParams } from 'react-router-dom';

export const LocationForm = () => {
    
    
    const { addLocation, getLocationById, updateLocation } = useContext(LocationContext)

    const [isLoading, setIsLoading] = useState(true)
    const [location, setLocation] = useState(
    {
        name: "",
        address: ""
    });

    const { locationId } = useParams()
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newLocation = { ...location }
        let selectedVal = event.target.value
        // forms always provide values as strings. But we want to save the ids as numbers. This will cover both customer and location ids       
        newLocation[event.target.id] = selectedVal
        // update state
        setLocation(newLocation)
      }

      const handleSaveLocation = () => {
        if (location.name === "" || location.address === "") {
          window.alert("Please enter a location")
        } else {
          setIsLoading(true)

          if (locationId) {
            updateLocation({
              id: location.id,
              name: location.name,
              address: location.address
            })
            .then(() => history.push(`/locations/detail/${location.id}`))
          }else{
            addLocation({
              name: location.name,
              address: location.address
            })
            .then(() => history.push(`/locations`))
          }
        }
      }

      useEffect(() => {
        if (locationId) {
          getLocationById(locationId)
          .then(location => {
            setLocation(location)
            setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      }, [])
  
      return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name}/>
                </div>
            </fieldset>
            <fieldset> 
                    <label htmlFor="address">Address: </label>
                    <input type="text" id="address" onChange={handleControlledInputChange} required className="form-control" placeholder="Location address" value={location.address}/> 
            </fieldset>
            <button className="btn btn-primary"
              disabled={isLoading}
              onClick={event => {
                event.preventDefault()
              handleSaveLocation()
            }}>
              {locationId ? "Save Location" : "Add Location"}
            </button>
        </form>
      )
  }
