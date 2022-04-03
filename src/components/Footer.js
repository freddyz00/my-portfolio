import React from "react";
import {
  FaDiscord,
  FaLinkedinIn,
  FaGithub,
  FaRegEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#4ADE72] py-8 relative">
      <div className="container mx-auto flex items-center justify-center ">
        <a
          href="https://discordapp.com/users/407199787004330004/"
          target="_blank"
          className="group mx-3 rounded-full w-12 h-12 bg-[#4ADE72] grid place-items-center border border-white border-solid cursor-pointer hover:bg-white transition"
        >
          <FaDiscord className="text-2xl text-white group-hover:text-[#4ADE72]" />
        </a>
        <a
          href="https://www.linkedin.com/in/htet-naing-aung/"
          target="_blank"
          className="group mx-3 rounded-full w-12 h-12 bg-[#4ADE72] grid place-items-center border border-white border-solid cursor-pointer hover:bg-white transition"
        >
          <FaLinkedinIn className="text-2xl text-white group-hover:text-[#4ADE72]" />
        </a>
        <a
          href="https://github.com/freddyz00"
          target="_blank"
          className="group mx-3 rounded-full w-12 h-12 bg-[#4ADE72] grid place-items-center border border-white border-solid cursor-pointer hover:bg-white transition"
        >
          <FaGithub className="text-2xl text-white group-hover:text-[#4ADE72]" />
        </a>
        <a
          href="mailto:freddyzhao.2000@gmail.com"
          className="group mx-3 rounded-full w-12 h-12 bg-[#4ADE72] grid place-items-center border border-white border-solid cursor-pointer hover:bg-white transition"
        >
          <FaRegEnvelope className="text-2xl text-white group-hover:text-[#4ADE72]" />
        </a>
      </div>
      <p className="text-white text-right absolute bottom-1.5 right-3">
        © FreddyZhao 2022
      </p>
    </footer>
  );
}

export default Footer;
