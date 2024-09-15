/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const Header = () => {
  const [btn, setBtn] = useState("Login");
  const cardItem = useSelector((store) => store.card.item);
  //subscribing to the store using  selector(for Render)
  // console.log(cardItem)
  return (
    <>
      <div className=" flex justify-between items-center   px-5  shadow-xl ">
        <div>
          <img
            src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
            alt="No data"
            className="h-20 w-24 "
          />
        </div>

        <div>
          <ul className="flex space-x-[150px] px-4  sm:block">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/card" className="font-bold">Card {(cardItem.length)}-Items</Link>
          </ul>
        </div>
        <button
          className="shadow-2xl border-2 px-4 py-2 bg-slate-300"
          onClick={() => {
            btn === "Login" ? setBtn("Logout") : setBtn("Login");
          }}
        >
          {btn}
        </button>
      </div>
    </>
  );
};
