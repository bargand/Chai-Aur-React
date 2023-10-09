import React from "react";

const MainBody = ({ changeColor, text }) => {
  return (
    <div
      className="mainBody"
      style={{
        backgroundColor: changeColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="MainBodyH" style={{ fontSize: "100px" }}>
        {text}
      </h1>
    </div>
  );
};

export default MainBody;
