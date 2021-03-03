import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useParams, useHistory } from "react-router-dom"

export const EmployeeDetail = () => {
    // useContext is bringing in the getAnimalById from our AnimalProvider.
  const { getEmployeeById } = useContext(EmployeeContext)

	const [employee, setEmployee] = useState({})

	const {employeeId} = useParams();
    // useParams is a react function that allows the app
    // to read a paramater from the URL {animalId} is linked to the {id} param in our URL in the data provider.
	const history = useHistory();

  useEffect(() => {
    getEmployeeById(employeeId)
    .then((response) => {
      setEmployee(response)
    })
    }, [])

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      {/* The question mark is an Optional chaining operator to prevent nested values
      from breaking the code.*/}
      <div className="employee__location">Location: {employee.location?.name}</div> 
      <button>Release Employee</button>
      <button>Edit</button>
    </section>
  )
}