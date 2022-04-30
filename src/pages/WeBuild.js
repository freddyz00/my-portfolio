import React from "react";
import { FaRocket, FaGithub, FaChevronLeft } from "react-icons/fa";
import ImageGallery from "../components/ImageGallery";
import ScrollToTop from "../components/ScrollToTop";
import { data } from "../data";
import { useNavigate } from "react-router-dom";

function WeBuild() {
  const navigate = useNavigate();
  return (
    <ScrollToTop>
      <div className="container mx-auto">
        <header className="mx-3 md:mx-10 lg:mx-36 xl:mx-56 mt-5">
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
            <img
              src="we-build/we-build-logo.png"
              alt="we-build-logo"
              className="w-60"
            />
            <div className="flex items-center">
              <a
                href="https://we-build.vercel.app"
                target="_blank"
                className="flex items-center text-xl px-3 md:px-5 py-3 mr-5 bg-white hover:bg-[#4ADE72] text-[#4ADE72] hover:text-white rounded-full border-2 border-solid border-[#4ADE72] cursor-pointer transition"
              >
                <span>
                  <FaRocket className="text-xl md:mr-3" />
                </span>
                <span className="hidden md:block">View Live App</span>
              </a>
              <a
                href="https://github.com/freddyz00/we-build"
                target="_blank"
                className="flex items-center text-xl px-3 md:px-5 py-3 bg-white hover:bg-[#4ADE72] text-[#4ADE72] hover:text-white rounded-full border-2 border-solid border-[#4ADE72] transition"
              >
                <span>
                  <FaGithub className="text-2xl md:mr-3" />
                </span>
                <span className="hidden md:block">View on GitHub</span>
              </a>
            </div>
          </div>
          <ImageGallery data={data.weBuild} />
        </header>
        <main className="mx-5 md:mx-10 lg:mx-36 xl:mx-56">
          <section className="mb-10">
            <h2 className="text-[#4ADE72] text-3xl font-semibold mb-3">
              Project Description
            </h2>
            <p className="font-light text-xl leading-8">
              WeBuild allows anyone to create and set up an online e-commerce
              store in minutes. Users can easily customize their stores
              according to their preferences and get started by adding products
              in just a few clicks.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[#4ADE72] text-3xl font-semibold mb-3">
              Features
            </h2>
            <ul className="font-light text-xl leading-8 list-disc list-inside ">
              <li>Create a customizable e-commerce store</li>
              <li>
                Edit the sections on the store page with a real-time preview
              </li>
              <li>Rearrange sections on the store page</li>
              <li>Upload images to the sections on the store page</li>
              <li>Select featured products to showcase on the store page</li>
              <li>Add and manage products from the admin page</li>
              <li>Visitors can browse the e-commerce store anytime</li>
              <li>
                Protected routes so that only authorized users can access the
                store admin page
              </li>
            </ul>
          </section>
          <section className="mb-10">
            <h2 className="text-[#4ADE72] text-3xl font-semibold mb-5">
              Project Information
            </h2>
            <h3 className="text-2xl font-semibold text-gray-500 mb-3">
              Creating a store
            </h3>
            <p className="text-xl font-light leading-8 mb-5">
              WeBuild allows users to create an e-commerce store. When a user
              log in for the first time, the user will be asked to create a
              store by entering a store name. Each user can only create one
              single store, and store names must be unique.
            </p>
            <h3 className="text-2xl font-semibold text-gray-500 mb-3">
              Authentication and Authorization
            </h3>
            <p className="text-xl font-light leading-8 mb-5">
              Users can sign in using google provider from the NextAuth package,
              and the user data is saved to Sanity CMS. Depending on the
              authentication status and authorization permissions, users will be
              redirected to different pages of the application, and they can
              only access certain pages if they are authorized. For example,
              every user will be able to vist the store page, but only the owner
              of that particular store can access the admin page.
            </p>
            <h3 className="text-2xl font-semibold text-gray-500 mb-3">
              Customize your store
            </h3>
            <p className="text-xl font-light leading-8 mb-5">
              Once they are signed in, users will then be able to customize the
              store. A default boilerplate of the store has been provided. Users
              can then edit different sections of the store page such as adding
              a logo to the header, changing the headings of each section, or
              adding images to the sections that contain images. There is a live
              preview of the store's home page, and these changes are
              immediately reflected in the preview so users can see what their
              pages look like before saving the changes.
            </p>
            <h3 className="text-2xl font-semibold text-gray-500 mb-3">
              Manage Products
            </h3>
            <p className="text-xl font-light leading-8 mb-5">
              On the admin page, users have a couple of options to select. They
              can either view and customize the store or manage the products for
              their store from there. All the products will be listed on the
              admin page, and users can add a new product or remove existing
              products. The products here are what the store visitors see when
              they go to the products page of the store.
            </p>
            <h3 className="text-2xl font-semibold text-gray-500 mb-3">
              View pages
            </h3>
            <p className="text-xl font-light leading-8 mb-5">
              Anyone can browse the page by going to the store page. The store
              page shows the latest version of the store, including any change
              made by the owner of the store. The products page contains all the
              available products that are listed by the owner and each product
              is a link that navigates to the page where the details of the
              products are shown.
            </p>
          </section>
        </main>
      </div>
    </ScrollToTop>
  );
}

export default WeBuild;
