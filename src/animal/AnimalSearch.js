import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const AnimalSearch = () => {
  const { setSearchTerms } = useContext(AnimalContext)

  return (
    <>
      Animal search: <input type="text"
        className="input--wide"
        // onKeyUp is triggered when the user release a key on the keyboard.
        // Grabbing the searched item by it's value and storing it in searchTerms.
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for an animal... " />
    </>
  )
}