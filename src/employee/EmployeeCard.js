import React from "react"
import "./Employee.css"

export const EmployeeCard = ({employee}) => (
    <section className="employee">
        {/* {console.log(employee)} */}
        <h3 className="employee__name">{employee.name}</h3>
        {/* <div className="employee__location">Location: {employee.}</div> */}
    </section>
)