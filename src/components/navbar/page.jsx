
'use client'
import { useState } from 'react';
import Link from 'next/link';
import VybLogo from '../../../public/images/vybLogo.png';
import Search from '../../../public/images/Frame.png';
import person from '../../../public/images/Group2.png';
import clickableIcon from '../../../public/images/Group2.png'; // Replace this with the correct clickable icon
import Image from 'next/image';



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="bg-black border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        {/* Logo and Search Box Container */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
  <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <Image
      src={VybLogo}
      className="h-100 w-40 ml-[1px]"
      alt="Flowbite Logo"
    />
  </Link>
</div>

        {/* Dropdown and Menu */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            onClick={toggleDropdown}
            aria-expanded={dropdownOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open user menu</span>
            <Image
              className="w-10 h-8 rounded-full"
              src={person}
              alt="user photo"
            />
          </button>
          {dropdownOpen && (
            <div
              className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2">
                <li>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Earnings
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMenu}
            aria-expanded={menuOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items and Search Box (on mobile) */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          {/* Search Box under Hamburger on mobile */}
          <div className="flex overflow-hidden gap-2.5 self-stretch px-4 py-4 my-auto rounded-3xl border border-white border-solid bg-slate-50 min-w-[240px] w-[290px] mr-80">
            <Image src={Search} alt="Search icon" className="object-contain shrink-0 w-5 aspect-square" />
            <label htmlFor="searchInput" className="sr-only">Search Creator/Product</label>
            <input
              id="searchInput"
              type="text"
              placeholder="Search Creator/Product"
              className="grow shrink w-56 bg-transparent border-none outline-none font-bold"
              aria-label="Search Creator/Product"
            />
          </div>

          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white bg-black rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500"
                aria-current="page"
              >
                For creators
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Brand
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Digital
              </Link>
            </li>
            
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Merchandise
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
