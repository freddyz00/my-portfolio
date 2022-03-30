import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import MyWork from "../components/MyWork";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <MyWork />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
