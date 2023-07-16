import React from "react";
import avatar from "./../../Images/mebyelfie.webp";

const Home = ({ theme }: { theme: string }) => {
  return (
    <div className="App-homepage" id="homeSection">
      <img className="avatarbis" src={avatar} alt="avatar" />
      <div className={`Home-title ${theme}`}>
        <div className="title">
          Lucile Landry Tronczyk,{" "}
          <span id="under-title">
            Stock footage research, intellectual property rights and clearance,
            budget managment, delivery.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
