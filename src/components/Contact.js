import React from "react";

function Contact() {
  return (
    <section id="contact" className="mb-40 pt-5">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-4xl font-semibold text-[#4ADE72] mb-3">
          Get In Touch
        </h2>
        <p className="text-xl font-light mb-16 px-10 text-center">
          Feel free to reach out to me via email at{" "}
          <a
            href="mailto:freddyzhao.2000@gmail.com"
            className="text-[#4ADE72] cursor-pointer"
          >
            freddyzhao.2000@gmail.com
          </a>{" "}
          or by completing the form below.
        </p>
        <form
          id="my-form-id"
          method="post"
          action="https://api.formcake.com/api/form/f1d18d35-1e54-4571-9045-6645f94f59ce/submission"
          className="flex flex-col w-5/6 sm:w-2/3 "
        >
          <div className="flex flex-col sm:flex-row mb-5 sm:mb-10">
            <label htmlFor="name" className="hidden">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              autoComplete="off"
              required
              className="flex-1 sm:mr-5 mb-5 sm:mb-0 p-3 rounded-md outline-0 focus:border-[#4ADE72] border-solid border"
            />
            <label htmlFor="email" className="hidden">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="off"
              required
              className="flex-1 p-3 rounded-md outline-0 focus:border-[#4ADE72] border-solid border"
            />
          </div>
          <label htmlFor="message" className="hidden">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={10}
            placeholder="Message"
            required
            className="p-3 mb-10 rounded-md outline-0 focus:border-[#4ADE72] border-solid border"
          ></textarea>
          <button className="w-1/2 md:w-1/4 self-center p-3 rounded-full border-2 border-solid border-[#4ADE72] font-bold text-xl text-[#4ADE72] hover:bg-[#4ADE72] hover:text-white transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
