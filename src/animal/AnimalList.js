import React, { useEffect, useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { AnimalContext } from "./AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { AnimalSearch } from "./AnimalSearch"

export const AnimalList = () => {
    const { animals, getAnimals, searchTerms } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)


    // Since you are no longer ALWAYS displaying all of the animals
  const [ filteredAnimals, setFiltered ] = useState([])
    // useHistory tells React which route we want to visit.
    // We will use it to tell React to render the animal form component.
    const history = useHistory()

    // useEffect(callback function, [])
    // import useEffect, this is defined in react.
    // useEffect takes two arguments, callback function and an array. this is a built in react hook.
    // This will allow you to do something when the data is changed.
    // Anytime the item in the [] (at end of fetch call) is used, useEffect is run.
    // Watch out what you pass in the [] (dependency array), this could start an infinite loop.
    useEffect(() => {
        // console.log("AnimalList: useEffect - getAnimals")
        getLocations()
        .then(getCustomers)
        .then(getAnimals)
    }, [])

  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals)
    }
    // useEffect is being run everytime the items in this dependency array are being used.
  }, [searchTerms, animals])

return (
  <>
    <h3>Animals</h3>
    <div className="animals">
        {/* {console.log("AnimalList: Render", animals)} */}
        {
          animals.map(animal => {
            const owner = customers.find(customer => customer.id === animal.customerId)
            const clinic = locations.find(location => location.id === animal.locationId) 
            
            return <AnimalCard key={animal.id}
                        location={clinic}
                        customer={owner}
                        animal={animal} />
          })
        }
    </div>
        <div className="animalButtonDiv">
          <button className="addAnimalButton" onClick={() => {history.push("/animals/create")}}>
            Add Animal
          </button>
        </div>
  </>
    )
}