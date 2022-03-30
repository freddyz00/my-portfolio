import React from "react";
import { FaRocket, FaGithub, FaChevronLeft } from "react-icons/fa";
import ImageGallery from "../components/ImageGallery";
import ScrollToTop from "../components/ScrollToTop";
import { data } from "../data";
import { useNavigate } from "react-router-dom";

function HungryNow() {
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
          <div className="flex mb-10 justify-between items-center">
            <h1 class="text-5xl font-bold">HungryNow</h1>
            <div className="flex items-center">
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
          <ImageGallery data={data.hungryNow} />
        </header>
        <main className="mx-56">
          <section className="mb-10">
            <h2 className="text-[#4ADE72] text-3xl font-semibold mb-3">
              Project Description
            </h2>
            <p className="font-light text-xl leading-8">
              HungryNow is a food ordering app that contains features to
              simulate the food ordering process. It works by establishing a
              connection between the client and the driver that emits and
              listens to real-time events. These events are triggered back and
              forth between the client and the driver.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[#4ADE72] text-3xl font-semibold mb-3">
              Features
            </h2>
            <ul className="font-light text-xl leading-8 list-disc list-inside ">
              <li>View the list of restaurants to order food from</li>
              <li>
                Automatically retrieve the user's location using geolocation or
                manually select one
              </li>
              <li>Add items to cart and place an order</li>
              <li>
                Receive real-time updates about the status of the order and the
                location of the driver
              </li>
              <li>Communicate with your driver in real-time</li>
              <li>View all recent orders</li>
            </ul>
          </section>
          <section className="mb-10">
            <h2 className="text-[#4ADE72] text-3xl font-semibold mb-5">
              Project Information
            </h2>
            <h3 className="text-2xl font-semibold text-gray-500 mb-3">
              React Native & Expo
            </h3>
            <p className="text-xl font-light leading-8 mb-5">
              HungryNow is a React Native app built using the Expo managed
              workflow. It uses several handy expo packages to power the app
              itself. The authentication process is handled by
              expo-auth-session, where the google provider of the package is
              responsible for redirecting to a Google sign-in page, from which a
              user can sign in and is saved to firebase's firestore. Other
              notable packages include expo-location for dealing with the user's
              location, react-navigation for navigation between screens and
              using react-native-maps with Google API to display a map view to
              the user.
            </p>
            <h3 className="text-2xl font-semibold text-gray-500 mb-3">
              How It Works
            </h3>
            <p className="text-xl font-light leading-8 mb-3">
              Once the user is signed in, the app will use geolocation to
              retrieve the user's current location. This location can also be
              manually entered by the user. From there, the user can choose
              their favorite restaurant and the food they would like to order.
            </p>
            <p className="text-xl font-light mb-5">
              Once an order has been placed, an event will be sent to drivers
              through pusher.js and drivers can then choose to accept or decline
              the order. When an order has been accepted, the user will be
              notified of the status of the order and the location of the
              driver. After the order has been fulfilled, the details about the
              order will be saved to firebase and the user can view their past
              orders anytime.
            </p>
          </section>
        </main>
      </div>
    </ScrollToTop>
  );
}

export default HungryNow;
