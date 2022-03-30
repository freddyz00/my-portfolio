import React from "react";
import { FaRocket, FaGithub, FaChevronLeft } from "react-icons/fa";
import ImageGallery from "../components/ImageGallery";
import ScrollToTop from "../components/ScrollToTop";
import { data } from "../data";
import { useNavigate } from "react-router-dom";

function WorkNow() {
  const navigate = useNavigate();
  return (
    <ScrollToTop>
      <div className="container mx-auto">
        <header className="mx-56 mt-5">
          <div
            className="group flex items-center mb-3 w-fit cursor-pointer"
            onClick={() => {
              navigate(-1);
            }}
          >
            <FaChevronLeft className="relative top-[1px] group-hover:text-[#4ADE72]" />

            <p className="text-xl font-light group-hover:text-[#4ADE72] ml-1">
              Back
            </p>
          </div>
          <div className="flex justify-between items-center">
            <h1 class="font-righteous text-5xl font-bold">
              <span class="text-yellow-500">Work</span>
              <span class="text-pink-500">Now</span>
            </h1>
            <div className="flex items-center">
              <a
                href="https://work-now.vercel.app"
                target="_blank"
                className="flex items-center text-xl px-5 py-3 mr-5 bg-white hover:bg-[#4ADE72] text-[#4ADE72] hover:text-white rounded-full border-2 border-solid border-[#4ADE72] cursor-pointer transition"
              >
                <span>
                  <FaRocket className="text-xl mr-3" />
                </span>
                <span>View Live App</span>
              </a>
              <a
                href="https://github.com/freddyz00/WorkNow"
                target="_blank"
                className="flex items-center text-xl px-5 py-3 bg-white hover:bg-[#4ADE72] text-[#4ADE72] hover:text-white rounded-full border-2 border-solid border-[#4ADE72] transition"
              >
                <span>
                  <FaGithub className="text-2xl mr-3" />
                </span>
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
          <ImageGallery data={data.workNow} />
        </header>
        <main className="mx-56">
          <section className="mb-10">
            <h2 className="text-[#4ADE72] text-3xl font-semibold mb-3">
              Project Description
            </h2>
            <p className="font-light text-xl leading-8">
              WorkNow is a project management app that helps manage all tasks in
              one place, thus making collaboration simpler and the entire
              workflow much more efficient. It allows for real-time
              communication between all the members working on the same project,
              i.e. real-time updates on the tasks board and receiving chat
              messages.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[#4ADE72] text-3xl font-semibold mb-3">
              Features
            </h2>
            <ul className="font-light text-xl leading-8 list-disc list-inside ">
              <li>Create and manage lists of to-do tasks</li>
              <li>Move and reorder tasks and lists by dragging and dropping</li>
              <li>Receive real-time updates of what your team is working</li>
              <li>
                Organize your projects by maintaining a separate workspace for
                each project
              </li>
              <li>Keep track of every workspace and the respective tasks</li>
              <li>
                Chat with other members who are working on the same project
              </li>
              <li>
                Sign in using your google account for hassle-free authentication
              </li>
              <li>Fully responsive design that works on mobile screens</li>
            </ul>
          </section>
          <section className="mb-10">
            <h2 className="text-[#4ADE72] text-3xl font-semibold mb-5">
              Project Information
            </h2>
            <h3 className="text-2xl font-semibold text-gray-500 mb-3">
              Server-side rendering
            </h3>
            <p className="text-xl font-light leading-8 mb-5">
              WorkNow is a project management app built using Nextjs to utilize
              its powerful feature of server-side rendering (SSR). SSR is being
              used wherever possible to provide a seamless experience for users.
              One such area would be rendering a page with information about the
              user without having the user wait for client-side javascript to
              load before rendering the page. Sometimes, database calls are also
              made on the server to determine the type of information to display
              to the user.
            </p>
            <h3 className="text-2xl font-semibold text-gray-500 mb-3">
              Authentication
            </h3>
            <p className="text-xl font-light leading-8 mb-5">
              WorkNow uses NextAuth as the library for authentication. It
              supports signing in with google provider which makes it convenient
              for users. These users are also saved to the MongoDB database,
              which is connected to NextAuth itself through an adapter. Based on
              the authentication status, the app redirects the user to the
              appropriate pages. For example, if a user is not logged in, he/she
              cannot access the dashboard and will be redirected to the login
              page.
            </p>
            <h3 className="text-2xl font-semibold text-gray-500 mb-3">
              Workspaces
            </h3>
            <p className="text-xl font-light leading-8 mb-5">
              Each project can be treated as a separate workspace and users can
              create a workspace after signing in. Each workspace will have
              utilities and data that are specific only to that particular
              workspace.
            </p>
            <h3 className="text-2xl font-semibold text-gray-500 mb-3">Board</h3>
            <p className="text-xl font-light leading-8 mb-5">
              WorkNow comes with three main apps: Board, Team, and Chat. The
              Board is where one can create and keep track of all tasks and
              lists. Users can easily create and rename lists, create, edit and
              delete a to-do for each list. The lists and the list items can
              also be moved around and reordered by dragging and dropping. When
              a member has made a change to a list, the change will be reflected
              on every member's board, whether the action is adding, editing,
              deleting, or moving list items.
            </p>
            <h3 className="text-2xl font-semibold text-gray-500 mb-3">Team</h3>
            <p className="text-xl font-light leading-8 mb-5">
              Team shows the members of a particular workspace. It is the place
              where users can manage the members associated with a particular
              workspace and add new members to the workspace.
            </p>
            <h3 className="text-2xl font-semibold text-gray-500 mb-3">Chat</h3>
            <p className="text-xl font-light leading-8 mb-5">
              Chat allows members of the same workspace to communicate with one
              another in real-time. Every message is broadcasted to every
              member, making communication between members easier.
            </p>
          </section>
        </main>
      </div>
    </ScrollToTop>
  );
}

export default WorkNow;
