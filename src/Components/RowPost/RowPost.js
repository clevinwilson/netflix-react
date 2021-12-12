import React, { useEffect, useState, useContext } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl, API_KEY } from "../../constants/constants";
import YouTube from 'react-youtube';
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from "../../store/Context"

function RowPost(props) {
    const navigate = useNavigate()
    const [movies, setMovies] = useState([])
    const [youtubeId, setYoutubeId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results);
        }).catch((err) => {
            console.log(err);
        })
    })
    const { firebase } = useContext(FirebaseContext)
    function addToFavorites(postId,postImage) {
        firebase.firestore().collection('favorites').add({
            movieId: postId,
            banner:postImage
        }).then(() => {
            alert("added")
        })
    }
    

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleMovie = (movieId) => {
        axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            if (response.data.results.length != 0) {
                console.log(response.data);
                setYoutubeId(response.data.results[0])
            } else {
                console.log('Array empty');
            }
        })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">

                {
                    movies.map((obj) =>
                        <div style={{ position: "relative" }}>

                            <img style={{ display: "block" }} onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'small-poster' : 'poster'} alt="" src={`${imageUrl + obj.backdrop_path}`} />
                            {props.favorite == "true" ?
                                <i onClick={() => { addToFavorites(obj.id,obj.backdrop_path) }} class="favorite-icon fas fa-heart"></i>
                                :
                                <i onClick={() => { addToFavorites(obj.id,obj.backdrop_path) }} style={{ fontSize: "16px", bottom: "9px", right: "21px" }} class="favorite-icon fas fa-heart"></i>
                            }

                        </div>


                    )
                }
            </div>
            {youtubeId && <YouTube opts={opts} videoId={youtubeId.key} />}
        </div>
    )
}

export default RowPost
