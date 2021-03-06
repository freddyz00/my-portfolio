import React from "react";

function NavBar() {
  return (
    <nav class="bg-white border-gray-200 border-b px-4 sm:px-4 lg:px-8 py-5 rounded">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" class="flex items-center">
          <span class="text-[#4ADE72] self-center text-2xl font-semibold whitespace-nowrap">
            Freddy Zhao
          </span>
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#about"
                class="block py-2 pr-4 pl-3 text-lg font-light text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4ADE72] md:p-0 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                class="block py-2 pr-4 pl-3 text-lg font-light text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4ADE72] md:p-0 transition"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#my-work"
                class="block py-2 pr-4 pl-3 text-lg font-light text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4ADE72] md:p-0 transition"
              >
                My Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="block py-2 pr-4 pl-3 text-lg font-light text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4ADE72] md:p-0 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
