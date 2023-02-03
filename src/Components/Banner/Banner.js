import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Title</h1>
        <div className="button-wrap">
          <button className="play">Play</button>
          <button className="mylist">My List</button>
        </div>
        <div className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>
      </div>
    </div>
  );
}

export default Banner;
