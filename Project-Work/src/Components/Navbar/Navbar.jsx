import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white-600 absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <p className="flex text-white font-courier font-bold">
          Techno Mechanus
        </p>
        <div className="flex justify-center items-center m-auto">
          <ul className="flex space-x-4 p-4 justify-center gap-x-10">
            <li>
              <Link
                to="/"
                className="text-white text-xl font-bold font-courier "
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white text-xl font-courier">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/team" className="text-white text-xl font-courier">
                Know the Team
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
