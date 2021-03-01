import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "../animal/AnimalCard"
import { CustomerCard } from "../customer/CustomerCard"

// This is where we define how the application will respond when the URL matches each
// of those patterns. When a user clicks a link in the nav bar the code dictates what should be rendered.

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
             
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
        The Animal List is wrapped in the animal provider has to do with Context.
             <AnimalProvider>
                <AnimalList />
             </AnimalProvider>
            </Route>           
            
            <Route path="/customers">
                <CustomerList />
            </Route>
            
            <Route path="/locations">
                <LocationList />
            </Route>
            
            <Route path="/employees">
                <EmployeeList />
            </Route>

        </>
    )
}