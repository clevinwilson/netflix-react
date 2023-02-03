import axios from '../../axios';
import React,{useEffect, useState} from "react";
import "./Banner.css";
import { API_KEY } from '../../constants/constants';
import { imageUrl } from '../../constants/constants';

function Banner() {
  const[banner,setBanner]=useState({});
  useEffect(()=>{
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[Math.floor(Math.random() * 20)]);

      setBanner(response.data.results[Math.floor(Math.random() * 20)])
    })
  },[])
  return (
    <div style={{
      backgroundImage: `url(${banner?imageUrl+banner.backdrop_path:""})`}} className="banner">
      <div className="content">
        <h1 className="title">{banner ? banner.original_title:""}</h1>
        <div className="button-wrap">
          <button className="play">Play</button>
          <button className="mylist">My List</button>
        </div>
        <div className="description">
          {banner ? banner.overview:""}
        </div>
      </div>
    </div>
  );
}

export default Banner;
