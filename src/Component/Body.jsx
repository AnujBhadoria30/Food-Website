/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { res } from "../utils/mockData";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
export const Body = () => {
  const [list, setList] = useState(res);
  const [Search, setSearch] = useState("");
  
  return (

    <>
      <div>
        <div className="flex px-3">
          <div className="py-4">
            <input
              type="text"
              value={Search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="border-2"
            />
            <button
              onClick={() => {
                const filtteroflist = list.filter((restro) => {
                  return restro.strMeal
                    .toLowerCase()
                    .includes(Search.toLowerCase());
                });
                console.log(Search);
                setList(filtteroflist);
              }}
            >
              Search🔍
            </button>
          </div>

          <div className="py-2 px-6">
            <button
              className="border-2 shadow-2xl p-2 bg-slate-300"
              onClick={() => {
                const filteredList = list.filter(
                  (restaurant) => restaurant.stars > 4
                );
                setList(filteredList);
              }}
            >
              Top rated Restaurants
            </button>
          </div>
        </div>

        <div className="flex flex-wrap  gap-4 ">
          {list.map((restaurant, i) => (
            <Link
              to={`/restaurant/${restaurant.idMeal}`}
              key={restaurant.idMeal}
            >
              {" "}
              <RestaurantCard
                key={i}
                resName={restaurant.strMeal}
                img={restaurant.strMealThumb}
                cuisine={restaurant.cuisine}
                stars={restaurant.stars}
                delivery={restaurant.deliveryTime}
               
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
