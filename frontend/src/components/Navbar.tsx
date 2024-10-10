// src/components/Navbar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-red-900 p-4 text-white">
      <ul className="flex space-x-6">
        <li>
        <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "font-bold bg-white text-red-900 px-3 py-2 rounded"
                : "font-bold hover:text-gray-200"
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/requests"
            className="font-bold hover:text-gray-200"
          >
            Requests
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/feedbacks"
            className="font-bold hover:text-gray-200"
          >
            Feedbacks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reports"
            className="font-bold hover:text-gray-200"
          >
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/patients"
            className="font-bold hover:text-gray-200"
          >
            Patients
          </NavLink>
        </li>
        <li className="relative group">
          <button  className="font-bold hover:text-gray-200">Settings</button>
          <ul className="absolute hidden group-hover:block bg-white text-black mt-2 py-2 rounded-md shadow-lg">
            <li>
              <NavLink
                to="/settings/profile"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings/account"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Account
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
