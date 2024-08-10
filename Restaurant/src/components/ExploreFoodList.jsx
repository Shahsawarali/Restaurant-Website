import React from 'react'
import pizzaImage from "../assets/pizza.jpeg"
import burgerImage from "../assets/burger.jpeg"
import momoImage from "../assets/momo.jpg"
import ExploreFood from './ExploreFood'

function ExploreFoodList() {
    const foods = [
        {name: 'pizza' , image:pizzaImage},
        {name: 'Burger' , image:burgerImage},
        {name: 'Momo' , image:momoImage}
    ]
  return (
    <ExploreFood foods={foods}/>
  )
}

export default ExploreFoodList