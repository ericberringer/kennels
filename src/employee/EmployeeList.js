import React, { useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"


export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    const history = useHistory()

    return (
        <>
            <h3>Employees</h3>
            <div className="employees">
                {
                employees.map(employee => {
                    return <EmployeeCard key={employee.id} employee={employee} />
                })
                }
            </div>
        <div className="employeeButtonDiv">
          <button className="addEmployeeButton" onClick={() => {history.push("/employees/create")}}>
            New Employee
          </button>
        </div>
  </>
    )
}