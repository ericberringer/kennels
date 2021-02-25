import React from "react"
import "./Customer.css"

export const CustomerCard = ({customer}) => (
    <section className="customer">
        {/* {console.log(props)} */}
        <h3 className="customer__name">{customer.name}</h3>
        <div className="customer__customer">Address: {customer.address}</div>
    </section>
)