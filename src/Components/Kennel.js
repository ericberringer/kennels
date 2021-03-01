import React, { useState, useEffect } from "react"
import { AnimalCard } from "../animal/AnimalCard"
import { CustomerCard } from "../customer/CustomerCard"
import { PropsAndState } from "./PropsAndState"
import "./Kennel.css"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

export const Kennel = () => (
    
    <> 
    <NavBar />
    <ApplicationViews />
    </> 
   
)

