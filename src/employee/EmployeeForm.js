import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css"
import { useHistory } from 'react-router-dom';

export const EmployeeForm = () => {
    
    const { addEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const [employee, setEmployee] = useState({
        name: "",
        locationId: 0
    });

    const history = useHistory();

    useEffect(() => {
        getLocations()
    }, [])

    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.
        The ... spread operator is making a copy of the employee object, setting new keys in it, and then we pass that object into addEmployees*/
        const newEmployee = { ...employee }
        let selectedVal = event.target.value
        // forms always provide values as strings. But we want to save the ids as numbers. This will cover both customer and location ids
        if (event.target.id.includes("Id")) {
          selectedVal = parseInt(selectedVal)
        }
        /* Animal is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newEmployee[event.target.id] = selectedVal
        // update state
        setEmployee(newEmployee)
      }

      const handleClickSaveEmployee = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form
  
        const locationId = employee.locationId
  
        if (locationId === 0 ) {
          window.alert("Please select a location")
        } else {
          //invoke addAnimal passing animal as an argument.
          //once complete, change the url and display the animal list
          addEmployees(employee)
          .then(() => history.push("/employees"))
        }
      }
  
      return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button className="btn btn-primary"
              onClick={handleClickSaveEmployee}>
              Add Employee
            </button>
        </form>
      )
  }
