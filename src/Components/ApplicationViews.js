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
import { EmployeeForm } from "../employee/EmployeeForm"
import { LocationForm } from "../location/LocationForm"
import { AnimalDetail } from "../animal/AnimalDetail"
import { EmployeeDetail } from "../employee/EmployeeDetail"
import { LocationDetail } from "../location/LocationDetail"
import { AnimalSearch } from "../animal/AnimalSearch"

// This is where we define how the application will respond when the URL matches each
// of those patterns. When a user clicks a link in the nav bar the code dictates what should be rendered.

export const ApplicationViews = () => {
    return (
        <>
             
            <Route exact path="/">
                <Home />
            </Route>
           
            {/* ##### Animals ##### */}
             
             <AnimalProvider>
                 <LocationProvider>
                    <CustomerProvider>
                        <EmployeeProvider>

                        <Route exact path="/animals">
                            {/* User types in search term and is filtered in animal search, 
                            and animals are rendered via animal list so they need to be nested together.
                            These are sybling components */}
                            <AnimalSearch />
                            <AnimalList />
                        </Route>
                        
                        <Route path="/animals/create">
                            <AnimalForm />    
                        </Route>
                        
                        <Route exact path="/animals/detail/:animalId(\d+)">
                            {/*  
                            The (\d+) is saying the item needs to be a number. */}
                            <AnimalDetail />
                        </Route>
                        
                        <Route path="/animals/edit/:animalId(\d+)">
                            <AnimalForm />
                        </Route>

                        </EmployeeProvider>
                    </CustomerProvider>
                 </LocationProvider>
             </AnimalProvider>

           {/* ##### Locations ##### */}

             <AnimalProvider>
                 <LocationProvider>
                    <CustomerProvider>
                        <EmployeeProvider>

                        <Route exact path="/locations">
                            <LocationList />
                        </Route>

                        <Route exact path="/locations/create">
                            <LocationForm />
                        </Route>

                        <Route exact path="/locations/detail/:locationId(\d+)">
                            <LocationDetail />
                        </Route>

                        </EmployeeProvider>
                    </CustomerProvider>
                 </LocationProvider>
             </AnimalProvider>
             
            {/* ##### Customers ##### */}

             <AnimalProvider>
                 <LocationProvider>
                    <CustomerProvider>
                        <EmployeeProvider>

                        <Route path="/customers">
                            <CustomerList />
                        </Route>    

                        </EmployeeProvider>
                    </CustomerProvider>
                 </LocationProvider>
             </AnimalProvider>
            
            {/* ##### Employees ##### */}

             <AnimalProvider>
                 <LocationProvider>
                    <CustomerProvider>
                        <EmployeeProvider>

                        <Route path="/employees">
                            <EmployeeList />
                        </Route>  

                        <Route exact path="/employees/detail/:employeeId(\d+)">
                            <EmployeeDetail />
                        </Route>

                        <Route exact path="/employees/edit/:employeeId(\d+)">
                            <EmployeeForm />
                        </Route>  

                        </EmployeeProvider>
                    </CustomerProvider>
                 </LocationProvider>
             </AnimalProvider>

        </>
    )
}