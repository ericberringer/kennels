import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
// A context stores data to be used in our application. A context needs to be
// created anytime there is a data provider component.
export const AnimalContext = createContext()
// Animal Context is a container waiting to be filled with info.

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([])
    // setAnimals is a function that allows us to set a value to the animals variable and update it.
    // animals will hold all of the animals from our api via .then(setAnimals) in our fetch call.
    // useState will hold and set the array of animals.


    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=location")
        .then(res => res.json())
        .then(setAnimals)
    }

    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(getAnimals)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.

        AnimalContext.Provider is basically packaging an animal object,
        getAnimals fetch object, and the addAnimal Post method object.
        Other components will access animals array, getAnimal function, and
        addAnimal function in the value of AnimalContext.Provider.
    */
    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}