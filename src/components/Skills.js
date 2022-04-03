import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { BsTools } from "react-icons/bs";
import { BsCardList } from "react-icons/bs";

function Skills() {
  return (
    <section id="skills" className="mb-40 bg-[#4ADE72] -skew-y-6">
      <div className="container mx-auto py-28 flex flex-col items-center justify-center skew-y-6">
        <h2 className="text-4xl text-white font-semibold ">Skills</h2>
        <div className="flex flex-wrap md:flex-nowrap my-10 container justify-center">
          <ul className="text-xl font-light leading-8 bg-white mx-5 mb-5 md:mb-0 w-80 rounded-md p-10 text-center">
            <BsCodeSlash className="w-full text-2xl" />
            <h3 className="text-[#4ADE72] font-bold my-3">Languages</h3>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
          <ul className="text-lg font-light leading-8 bg-white mx-5 mb-5 md:mb-0 w-80 rounded-md p-10 text-center">
            <BsTools className="w-full text-2xl" />
            <h3 className="text-[#4ADE72] font-bold my-3">
              Tools & Technologies
            </h3>
            <li>React</li>
            <li>Redux</li>
            <li>Next.js</li>
            <li>Firebase</li>
            <li>MongoDB</li>
            <li>TailwindCSS</li>
          </ul>
          <ul className="text-lg font-light leading-8 bg-white mx-5 w-80 rounded-md p-10 text-center">
            <BsCardList className="w-full text-2xl" />
            <h3 className="text-[#4ADE72] font-bold my-3">Others</h3>
            <li>Machine Learning</li>
            <li>Neural Networks</li>
            <li>TensorFlow</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
