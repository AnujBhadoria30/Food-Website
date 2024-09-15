/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const mockRestaurants = [
  {
    idMeal: "1",
    strMeal: "Pizza",
    strMealThumb: "https://link-to-pizza-image.com",
    cuisine: "Italian",
    stars: 5,
    deliveryTime: 30,
  },
  {
    idMeal: "2",
    strMeal: "Burger",
    strMealThumb: "https://link-to-burger-image.com",
    cuisine: "American",
    stars: 4.5,
    deliveryTime: 20,
  },

];

const RestaurantDetails = () => {
  const { id } = useParams(); 
  const [restaurant, setRestaurant] = useState(null); 

  useEffect(() => {
    const restaurantDetails = mockRestaurants.find(
      (restro) => restro.idMeal === id
    );
    setRestaurant(restaurantDetails); 
  }, [id]);

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{restaurant.strMeal}</h1>
      <img
        src={restaurant.strMealThumb}
        alt={restaurant.strMeal}
        className="w-full h-auto mt-2"
      />
      <p className="mt-2 text-lg">Cuisine: {restaurant.cuisine}</p>
      <p className="mt-2 text-lg">Rating: {restaurant.stars} ⭐</p>
      <p className="mt-2 text-lg">Delivery Time: {restaurant.deliveryTime} mins</p>
    </div>
  );
};

export default RestaurantDetails;
