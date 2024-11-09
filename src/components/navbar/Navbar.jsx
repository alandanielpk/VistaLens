import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { CiGlobe } from "react-icons/ci";
import { CiCompass1 } from "react-icons/ci";
import { BsClipboardData } from "react-icons/bs";
import { MdOutlineContactMail } from "react-icons/md";





function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleNav = () => setNavOpen(!isNavOpen);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./img/VistaLensBlaco.png" className="w-40" alt="Flowbite Logo" />
        </Link>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative ron">
          <button
            type="button"
            className="flex text-sm  focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 rounded-xl"
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen}
          >
            <span className="sr-only ">Open user menu</span>
            <img className="w-14 " src="./img/LogoVistaLensBlaco.png"/>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 z-50 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-900 dark:divide-gray-600 w-48 translate-y-40 rounded-xl shadow-lg">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">VistaLens</span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">Fotos | Diseños | Videos </span>
              </div>
              <ul className="py-2 ">
                <li>
                  <Link to="/" className="flex items-center gap-3 block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><CiGlobe />Redes</Link>
                </li>
                <li>
                  <Link to="/" className="flex items-center gap-3 block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><CiCompass1 />Mision - Visio</Link>
                </li>
                <li>
                  <Link to="/" className="flex items-center gap-3 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><BsClipboardData />Datos</Link>
                </li>
                <li>
                  <Link to="/" className="flex items-center gap-3 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><MdOutlineContactMail />Contactos</Link>
                </li>
              </ul>
            </div>
          )}

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleNav}
            aria-controls="navbar-user"
            aria-expanded={isNavOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

        <div className={`items-center justify-between ${isNavOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3 text-white bg-gray-600 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">inicio</Link>
            </li>
            <li>
              <Link to="/" className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Proyectos</Link>
            </li>
            <li>
              <Link to="/" className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Grupo</Link>
            </li>
            <li>
              <Link to="/" className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Comentar</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
