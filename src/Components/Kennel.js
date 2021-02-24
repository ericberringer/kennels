import React from "react"
import "./Kennel.css"

export const Kennel = () => {
    const kennel = {
        name: "Dog Place",
        locations: [
            {
                name: "House for Dogs",
                address: "500 Poopy Place"
            }
        ]
    }
    
    return (
        <>
        <h2>{kennel.name}</h2>
        <small>Loving care when you're a deadbeat pet owner.</small>
        <address>
            <div>{kennel.locations[0].name}</div>
            <div>{kennel.locations[0].address}</div>
        </address>
        </>
    )
}
