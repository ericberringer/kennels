import React, { useEffect, useContext } from "react"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCard } from "./CustomerCard"
import "./Customer.css"


export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <>
            <h3>Customers</h3>
            <div className="customers">
                {
                customers.map(customer => {
                    return <CustomerCard key={customer.id} customer={customer} />
                })
                }
            </div>
  </>
    )
}