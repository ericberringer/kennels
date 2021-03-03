import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useParams, useHistory } from "react-router-dom"

export const AnimalDetail = () => {
    // useContext is bringing in the getAnimalById from our AnimalProvider.
  const { getAnimalById } = useContext(AnimalContext)

	const [animal, setAnimal] = useState({})

	const {animalId} = useParams();
    // useParams is a react function that allows the app
    // to read a paramater from the URL {animalId} is linked to the {id} param in our URL in the data provider.
	const history = useHistory();

  useEffect(() => {
    console.log("useEffect", animalId)
    getAnimalById(animalId)
    .then((response) => {
      setAnimal(response)
    })
    }, [])

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      {/* The question mark is an Optional chaining operator to prevent nested values
      from breaking the code.*/}
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
      <button>Release Animal</button>
      <button>Edit</button>
    </section>
  )
}