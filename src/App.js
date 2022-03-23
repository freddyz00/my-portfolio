import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import MyWork from "./components/MyWork";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Skills />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
