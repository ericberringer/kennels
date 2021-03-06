import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css"
import { useHistory, useParams } from 'react-router-dom';

export const EmployeeForm = () => {
    
    const { addEmployees, getEmployeeById, updateEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const [employee, setEmployee] = useState({
        name: "",
        address: "",
        locationId: 0
    });
    
    const [isLoading, setIsLoading] = useState(true)

    const { employeeId } = useParams()

    const history = useHistory();

    useEffect(() => {
        getLocations()
    }, [])


    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.
        The ... spread operator is making a copy of the employee object, setting new keys in it, and then we pass that object into setEmployees*/
        const newEmployee = { ...employee }
        newEmployee[event.target.id] = event.target.value
        // update state
        setEmployee(newEmployee)
      }

      const handleSaveEmployee = () => {
        if (parseInt(employee.locationId) === 0) {
            window.alert("Please select a location")
        } else {
          //disable the button - no extra clicks
          setIsLoading(true);
          // This is how we check for whether the form is being used for editing or creating. If the URL that got us here has an id number in it, we know we want to update an existing record of an employee
          if (employeeId){
            //PUT - update
            updateEmployee({
                id: employee.id,
                name: employee.name,
                address: employee.address,
                locationId: parseInt(employee.locationId)
            })
            .then(() => history.push(`/employees/detail/${employee.id}`))
          }else {
            //POST - add
            addEmployees({
                name: employee.name,
                address: employee.address,
                locationId: parseInt(employee.locationId)                
            })
            .then(() => history.push("/employees"))
          }
        }
      }

      // Get customers and locations. If animalId is in the URL, getAnimalById
    useEffect(() => {
      getLocations().then(() => {
        if (employeeId) {
          getEmployeeById(employeeId)
          .then(employee => {
              setEmployee(employee)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])
  
      return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">{employeeId ? "Edit Employee" : "Add Employee"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Employee address:</label>
                    <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee address" value={employee.address}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
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
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveEmployee()
          }}>
        {employeeId ? "Save Employee" : "Add Employee"}</button>
        </form>
      )
  }
