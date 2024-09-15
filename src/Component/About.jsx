// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../UserContex";


function About() {
  const {loggedUser} = useContext(UserContext)

  return (
    <div>
      <div className="text-2xl text-center mt-56">Hello From About</div>
      <h4>user:{loggedUser}</h4>

      <div className="text-2xl text-center mt-56">
        <ul className="flex space-x-[150px]   px-4 ">
          <li>
            <Link to="team">Team</Link>
          </li>
          <li>
            <Link to="history">History</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default About;
