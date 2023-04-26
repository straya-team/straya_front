import React from "react";
import NavBar from "../components/NavBar";
import Menu from "../components/Menu";
import Chatbot from "../components/Chatbot";
const Main = () => {
  const GOTOproduct = () => {
    window.location.href = "/product";
  };
  return (
    <div>
      <NavBar />
      <div className="empty"></div>
      <Menu />
      <Chatbot />
      <button className="productBTN" onClick={(e) => GOTOproduct(e)}>
        product
      </button>
    </div>
  );
};

export default Main;
