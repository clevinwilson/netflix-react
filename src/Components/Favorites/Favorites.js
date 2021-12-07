import React, { useEffect, useState } from 'react'
import './Favorites.css'
import axios from '../../axios'
import { imageUrl, API_KEY } from "../../constants/constants";
import YouTube from 'react-youtube';
import { useNavigate } from 'react-router-dom'

function Favorites() {

    return (
        <div className='row'>
            <h2>Favorites</h2>
            <div className="posters">



                <div style={{ position: "relative" }}>

                    <img className='poster' style={{ display: "block" }} alt="" src='https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg' />
                    <i onClick={() => { alert("Remove FAVORITES") }} class="favorite-icon far fa-heart"></i>
                </div>

               <div style={{ position: "relative" }}>

                    <img className='poster' style={{ display: "block" }} alt="" src='https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg' />
                    <i onClick={() => { alert("Remove FAVORITES") }} class="favorite-icon far fa-heart"></i>
                </div>

                <div style={{ position: "relative" }}>

                    <img className='poster' style={{ display: "block" }} alt="" src='https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg' />
                    <i onClick={() => { alert("RemoveFAVORITES") }} class="favorite-icon far fa-heart"></i>
                </div>

            </div>
        </div>
    )
}

export default Favorites
