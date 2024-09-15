/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import UserContext from "../UserContex";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cardSlice";

// eslint-disable-next-line react/prop-types
  const RestaurantCard = ({ resName, cuisine, delivery, stars, img }) => {
  const {loggedUser} = useContext(UserContext)

  const dispatch = useDispatch()

  const handleAddItem = (e) => {
    e.preventDefault(); 
    // Create a restaurant object with all the details
    const restaurantDetails = {
      resName,
      cuisine,
      delivery,
      stars,
      img,
    };
    // Dispatch the restaurant details to the Redux store
    dispatch(addItem(restaurantDetails));
  };
  return (
    <>
      {" "}
      <div className="border-2 shadow-xl p-2 w-[250px]">
        <img src={img} alt="" className="h-40 w-48" />
        <h3 className="text-xl">{resName}</h3>
        <h4 className="font-semibold">{cuisine}🍴</h4>
        <h4 className="font-bold">{stars}⭐⭐⭐⭐</h4>
        <h4 className="font-extrabold">{delivery}🚵‍♀️</h4>
        <div className="flex gap-32">
        </div>
        <div className="flex">
          <h4>user:{loggedUser}</h4>
        <button className=" w-6  flex items-center justify-center bg-gray-200 rounded-full" onClick={handleAddItem}>+</button>
        </div>
      </div>
    </>
  );
};
export default RestaurantCard;
