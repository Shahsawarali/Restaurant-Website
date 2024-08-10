import React from 'react'
import pizza from "../assets/Pizza.jpeg"
import burger from "../assets/burger.jpeg"
import momo from "../assets/momo.jpg"
import pasta from "../assets/pasta.jpg"
import sandwhich from "../assets/sandwhich.jpeg"
import risotto from '../assets/risotto.jpeg'
import FoodMenu from './FoodMenu'

function FoodMenuList() {
    const foodNames = [
        {name: 'pizzza', image : pizza , price:"20" , ingredients:"Made with souce, chicken and vegatables"},
        {name: 'Burger', image : burger , price:"12" , ingredients:"Made with souce, chicken and vegatables"},
        {name: 'Momo', image : momo , price:"22" , ingredients:"Made with souce, chicken and vegatables"},
        {name: 'Pasta', image : pasta , price:"18" , ingredients:"Made with souce, chicken and vegatables"},
        {name: 'Sandwhich', image : sandwhich , price:"20" , ingredients:"Made with souce, chicken and vegatables"},
        {name: 'Risotto', image : risotto , price:"20" , ingredients:"Made with souce, chicken and vegatables"},
    ]
  return (
    <FoodMenu foodNames={foodNames}/>
  )
}

export default FoodMenuList