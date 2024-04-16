import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Qualifications from "./components/Qualifications/Qualifications";
import Contact from "./components/Contact/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer/Footer";
import Scroll from "./components/Scroll/Scroll";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <Scroll />
    </>
  );
}

export default App;
