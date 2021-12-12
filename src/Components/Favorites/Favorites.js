import React, { useEffect, useState, useContext } from 'react'
import './Favorites.css'
import axios from '../../axios'
import { imageUrl, API_KEY } from "../../constants/constants";
import YouTube from 'react-youtube';
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../../store/Context'

function Favorites() {
    const { firebase } = useContext(FirebaseContext)
    const [favoritemovies, SetFavoriteMovies] = useState([])

    useEffect(() => {
        firebase.firestore().collection('favorites').get().then((snapshort) => {
            const allFavoriteMovies = snapshort.docs.map((favoritemovies) => {

                return (
                    {
                        ...favoritemovies.data(),
                        id: favoritemovies.id
                    }
                )

            })
            SetFavoriteMovies(allFavoriteMovies)
        })
    })
    function removeFromFavorites(movieId){
        alert(movieId)
        firebase.firestore().collection('favorites').doc(movieId).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    return (
        <div style={{ marginTop: "80px" }} className='row'>
            <h2>Favorites</h2>
            {
                favoritemovies.map((movies) => {
                    return (
                        <div className="posters">
                            <div style={{ position: "relative" }}>
                                <img className='poster' style={{ display: "block" }} alt="" src={`${imageUrl + movies.banner}`} />
                                <i onClick={() => {removeFromFavorites(movies.id) }} class="favorite-fill-icon fas fa-heart"></i>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites

// axios.get(`/movie/${movies.movieId}?api_key=${API_KEY}&language=en-US`).then((response) => {
//     if (response != 0) {
//         console.log(response.data);
//     } else {
//         console.log('Array empty');
//     }
// })