import React from "react";

const Navbar = ({ setChangeColor, setText }) => {
  return (
    <>
      <div className="navBarMain">
        <button
          className="NavbarBTN"
          style={{ backgroundColor: "red" }}
          onClick={() => setChangeColor("#ff0000b5")}
        ></button>
        <button
          className="NavbarBTN"
          style={{ backgroundColor: "green" }}
          onClick={() => setChangeColor("#008000b0")}
        ></button>
        <button
          className="NavbarBTN"
          style={{ backgroundColor: "yellow" }}
          onClick={() => setChangeColor("#ffff00b5")}
        ></button>
        <button
          className="NavbarBTN"
          style={{ backgroundColor: "pink" }}
          onClick={() => setChangeColor("#ffc0cbb5")}
        ></button>
        <button
          className="NavbarBTN"
          style={{ backgroundColor: "blue" }}
          onClick={() => setChangeColor("#0000ffab")}
        ></button>
        <button
          className="NavbarBTN"
          style={{ backgroundColor: "black" }}
          onClick={() => setChangeColor("#000000ab")}
        ></button>
        <button
          className="NavbarBTN"
          style={{ backgroundColor: "orange" }}
          onClick={() => setChangeColor("#ffa500b2")}
        ></button>
        <button
          className="NavbarBTN"
          style={{ backgroundColor: "white" }}
          onClick={() => setChangeColor("#f3f3f3a1")}
        ></button>
        <button
          className="NavbarBTN"
          style={{ backgroundColor: "gray" }}
          onClick={() => setChangeColor("#808080b0")}
        ></button>
        <button
          className="NavbarBTN"
          style={{ backgroundColor: "cyan" }}
          onClick={() => setChangeColor("#00ffffb2")}
        ></button>
      </div>
    </>
  );
};

export default Navbar;
