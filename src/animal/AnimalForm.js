import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Animal.css"
import { useHistory, useParams } from 'react-router-dom';

export const AnimalForm = () => {
    // Bringing in the these useContexts is bringing in the objects and their info from 
    // the animal, customer, and location providers.
    // {addAnimal} is our Post from the provider.
    const { addAnimal, getAnimalById, updateAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
    Define the intial state of the form inputs with useState()
    */
  //for edit, hold on to state of animal in this view
   const [animal, setAnimal] = useState({
    name: "",
    breed: "",
    locationId: 0,
    customerId: 0
  });

  //wait for data before button is active. Look at the button to see how it's setting itself to disabled or not based on this state
  const [isLoading, setIsLoading] = useState(true);

  // Now that the form can be used for editing as well as adding an animal, you need access to the animal id for fetching the animal you want to edit
  const { animalId } = useParams();
//   history will be used in a minute to tell react which route to take.
        const history = useHistory();

  /*
    Reach out to the world and get customers state
    and locations state on initialization, so we can provide their data in the form dropdowns
    useEffect will allow things to be updated when their states are changed.
    useEffect What do we want to do, when do we want to do it.
    */
   useEffect(() => {
    getCustomers()
    .then(getLocations)
  }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
    // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
    //Controlled component
    const handleControlledInputChange = (event) => {
      //When changing a state object or array,
      //always create a copy make changes, and then set state.
      const newAnimal = { ...animal }
      //animal is an object with properties.
      //set the property to the new value
      newAnimal[event.target.id] = event.target.value
      //update state
      setAnimal(newAnimal)
    }

    const handleSaveAnimal = () => {
      if (parseInt(animal.locationId) === 0) {
          window.alert("Please select a location")
      } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        // This is how we check for whether the form is being used for editing or creating. If the URL that got us here has an id number in it, we know we want to update an existing record of an animal
        if (animalId){
          //PUT - update
          updateAnimal({
              id: animal.id,
              name: animal.name,
              breed: animal.breed,
              locationId: parseInt(animal.locationId),
              customerId: parseInt(animal.customerId)
          })
          .then(() => history.push(`/animals/detail/${animal.id}`))
        }else {
          //POST - add
          addAnimal({
              name: animal.name,
              breed: animal.breed,
              locationId: parseInt(animal.locationId),
              customerId: parseInt(animal.customerId)
          })
          .then(() => history.push("/animals"))
        }
      }
    }

    // Get customers and locations. If animalId is in the URL, getAnimalById
    useEffect(() => {
      getCustomers().then(getLocations).then(() => {
        if (animalId) {
          getAnimalById(animalId)
          .then(animal => {
              setAnimal(animal)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

    return (
      <form className="animalForm">
        <h2 className="animalForm__title">{animalId ? "Edit Animal" : "Add Animal"}</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="animalName">Animal name: </label>
            <input type="text" id="name" required autoFocus className="form-control"
            placeholder="Animal name"
            onChange={handleControlledInputChange}
            value={animal.name}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
              <label htmlFor="breed">Animal breed:</label>
              <input type="text" id="breed" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal breed" value={animal.breed}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Assign to location: </label>
            <select value={animal.locationId} id="locationId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a location</option>
              {locations.map(l => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="customer">Customer: </label>
            <select value={animal.customerId} id="customerId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a customer</option>
              {customers.map(c => (
                <option key={c.id} value={c.id}>
                    {c.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveAnimal()
          }}>
        {animalId ? "Save Animal" : "Add Animal"}</button>
      </form>
    )
}