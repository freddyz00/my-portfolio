import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <section id="about" className="h-screen">
      <div className="container mx-auto h-full flex flex-col items-center justify-center -mt-16 px-5 md:px-24 lg:px-48">
        <h1 className="text-4xl sm:text-6xl font-bold mb-5 sm:mb-10">
          Hello World!
        </h1>
        <p className="text-lg sm:text-2xl font-light text-center sm:leading-10 mb-5 sm:mb-10">
          My name is Freddy. I enjoy learning about how things work. That's why
          I love to build things with my bare hands and ultimately turn ideation
          into reality.
        </p>
        <div className="flex">
          <a
            href="https://github.com/freddyz00"
            target="_blank"
            className="group mx-3 rounded-full w-12 h-12 bg-white grid place-items-center border border-[#4ADE72] border-solid cursor-pointer hover:bg-[#4ADE72] transition"
          >
            <FaGithub className="text-2xl text-[#4ADE72] group-hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/htet-naing-aung/"
            target="_blank"
            className="group mx-3 rounded-full w-12 h-12 bg-white grid place-items-center border border-[#4ADE72] border-solid cursor-pointer hover:bg-[#4ADE72] transition"
          >
            <FaLinkedinIn className="text-2xl text-[#4ADE72] group-hover:text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
