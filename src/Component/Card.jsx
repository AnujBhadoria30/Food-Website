/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import RestaurantCard from './RestaurantCard'

function Card() {
  // Retrieve the card items from the Redux store
  const cardItem = useSelector((store) => store.card.item);

  // console.log("carditems", cardItem); 

  return (
    <>
      <div>
        {/* Render each RestaurantCard component with the correct props */}
        <div className="flex gap-5">

        {cardItem.map((item, index) => (
          <RestaurantCard
          key={index}
          resName={item.resName}   
          cuisine={item.cuisine}   
          delivery={item.delivery} 
          stars={item.stars}       
          img={item.img}           
          />
          
        ))}
        </div>
      
      </div>
      
    </>
  )
}

export default Card
