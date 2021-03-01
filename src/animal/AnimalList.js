import React, { useEffect, useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
// import { useEffect } from "react"
import "./Animal.css"

export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)

    // useEffect(callback function, [])
    // import useEffect, this is defined in react.
    // useEffect takes two arguments, callback function and an array. this is a built in react hook.
    // This will allow you to do something when the data is changed.
    // Anytime the item in the [] (at end of fetch call) is used, useEffect is run.
    // Watch out what you pass in the [] (dependency array), this could start an infinite loop. You probably wont pass anything here yet.
    useEffect(() => {
        // console.log("AnimalList: useEffect - getAnimals")
        getAnimals()
    }, [])

return (
  <>
    <h3>Animals</h3>
    <div className="animals">
        {/* {console.log("AnimalList: Render", animals)} */}
        {
          animals.map(animal => {
            return <AnimalCard key={animal.id} animal={animal} />
          })
        }
    </div>
  </>
    )
}