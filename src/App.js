import React from "react";
import About from "./Component/About";
import Featured from "./Component/Featured";
import Footer from "./Component/Footer";
import Main from "./Component/Main";
import Navbar from "./Component/Navbar";
import Service from "./Component/Service";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Service />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
