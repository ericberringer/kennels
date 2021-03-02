import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "../animal/AnimalList"
import { AnimalProvider } from "../animal/AnimalProvider"
import { CustomerList } from "../customer/CustomerList"
import { CustomerProvider } from "../customer/CustomerProvider"
import { EmployeeList } from "../employee/EmployeeList"
import { EmployeeProvider } from "../employee/EmployeeProvider"
import { LocationList } from "../location/LocationList"
import { LocationProvider } from "../location/LocationProvider"
import { AnimalForm } from "../animal/AnimalForm"


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
{/* The Animal List is wrapped in the animal provider has to do with Context. */}
             <AnimalProvider>
                 <LocationProvider>
                    <CustomerProvider>
                        <Route path="/animals">
                            <AnimalList />
                        </Route>

                        <Route path="/animals/create">
                            <AnimalForm />    
                        </Route>           
                    </CustomerProvider>
                 </LocationProvider>
             </AnimalProvider>
            
            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
            
            <LocationProvider>
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            <EmployeeProvider>
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>

        </>
    )
}