import axios from '../../axios';
import React, { useState, useEffect } from 'react';
import './RowPost.css'
import { API_KEY, baseUrl, imageUrl } from '../../constants/constants';
import YouTube from 'react-youtube';

function RowPost(props) {
  const [originals, setOriginals] = useState([]);
  const [videoUrl,setVideoUrl]=useState();

  useEffect(() => {
    axios.get(baseUrl+props.url).then((repsonse) => {
      setOriginals(repsonse.data.results);
    })
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleVideo=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data);
      setVideoUrl(response.data.results[0])
    })
  }



  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">

        {
          originals.map((movie) => {
            return (
              <img
                onClick={() => { handleVideo (movie.id)}}
                className={props.isSmall?"short-poster":"poster"}
                src={props.isSmall ? imageUrl + movie.backdrop_path :imageUrl + movie.poster_path}
                alt="Post"
              />
            )
          })
        }

      </div>
      {videoUrl && <YouTube videoId={videoUrl.key} opts={opts} />}
    </div>
  );
}

export default RowPost