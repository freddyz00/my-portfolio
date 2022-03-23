import React from "react";

function MyWork() {
  return (
    <section id="my-work" className="mb-40 pt-5">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-4xl font-semibold text-[#4ADE72] mb-3">My Work</h2>
        <p className="text-xl font-light mb-16">
          Here are some of the personal projects that I have worked on
        </p>
        <article className="group flex w-2/3 mb-16 rounded-md border border-solid border-slate-200 shadow cursor-pointer">
          <div className="w-1/2 rounded-l-md border-r border-slate-200 border-solid overflow-hidden">
            {/* image */}
            <img
              src="work-now.png"
              alt="work-now"
              className="group-hover:scale-105 transition"
            />
          </div>
          <div className="w-1/2 px-5 py-3 flex flex-col justify-between">
            {/* project description */}
            <div>
              <h3 className="font-bold text-2xl text-[#4ADE72] mb-2">
                WorkNow
              </h3>
              <p className="font-light text-lg">
                WorkNow is a project management app that helps to manage all
                tasks in one place, thus making collaboration simpler and the
                entire workflow much more efficient.
              </p>
            </div>
            <div className="flex flex-wrap">
              <span className="mx-1 mb-2 px-3 py-0.5 text-sm text-white bg-[#4ADE72] rounded-full">
                Next.js
              </span>
              <span className="mx-1 mb-2 px-3 py-0.5 text-sm text-white bg-[#4ADE72] rounded-full">
                React
              </span>
              <span className="mx-1 mb-2 px-3 py-0.5 text-sm text-white bg-[#4ADE72] rounded-full">
                TailwindCSS
              </span>
              <span className="mx-1 mb-2 px-3 py-0.5 text-sm text-white bg-[#4ADE72] rounded-full">
                MongoDB
              </span>
              <span className="mx-1 mb-2 px-3 py-0.5 text-sm text-white bg-[#4ADE72] rounded-full">
                Pusherjs
              </span>
              <span className="mx-1 mb-2 px-3 py-0.5 text-sm text-white bg-[#4ADE72] rounded-full">
                Redux
              </span>
            </div>
          </div>
        </article>
        <article className="group flex w-2/3 mb-10 rounded-md border border-solid border-slate-200 shadow cursor-pointer">
          <div className="w-1/2 rounded-l-md border-r border-slate-200 border-solid overflow-hidden">
            {/* image */}
            <img
              src="hungry-now.png"
              alt="work-now"
              className="group-hover:scale-105 transition"
            />
          </div>
          <div className="w-1/2 px-5 py-3 flex flex-col justify-between">
            {/* project description */}
            <div>
              <h3 className="font-bold text-2xl text-[#4ADE72] mb-2">
                HungryNow
              </h3>
              <p className="font-light text-lg">
                HungryNow is a food ordering app that contains features to
                simulate the food ordering process achieved through real-time
                communication between the client and the driver.
              </p>
            </div>
            <div className="flex flex-wrap">
              <span className="mx-1 mb-2 px-3 py-0.5 text-sm text-white bg-[#4ADE72] rounded-full">
                React Native
              </span>
              <span className="mx-1 mb-2 px-3 py-0.5 text-sm text-white bg-[#4ADE72] rounded-full">
                Expo
              </span>
              <span className="mx-1 mb-2 px-3 py-0.5 text-sm text-white bg-[#4ADE72] rounded-full">
                React Navigation
              </span>
              <span className="mx-1 mb-2 px-3 py-0.5 text-sm text-white bg-[#4ADE72] rounded-full">
                Firebase
              </span>
              <span className="mx-1 mb-2 px-3 py-0.5 text-sm text-white bg-[#4ADE72] rounded-full">
                Pusherjs
              </span>
              <span className="mx-1 mb-2 px-3 py-0.5 text-sm text-white bg-[#4ADE72] rounded-full">
                Context API
              </span>
              <span className="mx-1 mb-2 px-3 py-0.5 text-sm text-white bg-[#4ADE72] rounded-full">
                Maps API
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default MyWork;