import React, { useEffect, useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"


export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

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
  </>
    )
}