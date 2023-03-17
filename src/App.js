import React from "react";
// import ReactDOM from "react-dom/client";
import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Info />
      <div className="container">
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}
