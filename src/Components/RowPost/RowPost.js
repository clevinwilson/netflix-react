import React, { useEffect,useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from "../../constants/constants";
import YouTube from 'react-youtube';


function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [youtubeId, setYoutubeId] = useState('')
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setMovies(response.data.results);
        }).catch((err)=>{
            console.log(err);
        })
    })

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleMovie=(movieId)=>{
          axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
             if(response.data.results.length!=0){
                console.log(response.data);
                setYoutubeId(response.data.results[0])
             }else{
                 console.log('Array empty');
             }
          })
      }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    movies.map((obj)=>
                        <img onClick={()=>handleMovie(obj.id)} className={ props.isSmall ? 'small-poster' : 'poster'} alt="" src={ `${imageUrl+obj.backdrop_path}`}  />
               
                    )
                }
            </div>
           { youtubeId &&  <YouTube opts={opts} videoId={youtubeId.key} />}
        </div>
    )
}

export default RowPost
