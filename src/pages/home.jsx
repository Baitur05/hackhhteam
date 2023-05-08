import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div style={{ display: "flex" }}>
          <h1 style={{ width: "730px" }}>
            Найдите работу вашей мечты в любой точке Кыргызстана
          </h1>
          <img
            style={{ width: "500px" }}
            src={require("../img/developer_outline I 1.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
