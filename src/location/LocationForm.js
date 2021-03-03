import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import "./Location.css"
import { useHistory } from 'react-router-dom';

export const LocationForm = () => {
    
    
    const { locations, getLocations, addLocations } = useContext(LocationContext)

    const [location, setLocation] = useState(
    {
        name: "",
        address: ""
    });

    const history = useHistory();

    useEffect(() => {
        getLocations()
    }, [])

    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newLocation = { ...location }
        let selectedVal = event.target.value
        // forms always provide values as strings. But we want to save the ids as numbers. This will cover both customer and location ids
        if (event.target.id.includes("Id")) {
          selectedVal = parseInt(selectedVal)
        }
       
        newLocation[event.target.id] = selectedVal
        // update state
        setLocation(newLocation)
      }

      const handleClickSaveLocation = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form

        if (location.name === "" || location.address === "") {
          window.alert("Please enter a location")
        } else {
          addLocations(location)
          .then(() => history.push("/locations"))
        }
      }
  
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
              onClick={handleClickSaveLocation}>
              Add Location
            </button>
        </form>
      )
  }
