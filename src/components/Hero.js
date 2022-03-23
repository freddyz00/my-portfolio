import React from "react";

function Hero() {
  return (
    <section id="about" className="h-screen">
      <div className="container mx-auto h-full flex flex-col items-center justify-center -mt-16">
        <h1 className="text-6xl font-bold mb-10">Hello World!</h1>
        <p className="text-2xl font-light">
          My name is Freddy. I love to build things and turn ideation into
          realily.
        </p>
      </div>
    </section>
  );
}

export default Hero;
