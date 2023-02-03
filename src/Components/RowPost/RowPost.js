import axios from '../../axios';
import React, { useState, useEffect } from 'react';
import './RowPost.css'
import { API_KEY, baseUrl, imageUrl } from '../../constants/constants';

function RowPost(props) {
  const [originals, setOriginals] = useState([]);
  useEffect(() => {
    axios.get(baseUrl+props.url).then((repsonse) => {
      setOriginals(repsonse.data.results);
    })
  }, [])

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">

        {
          originals.map((movie) => {
            return (
              <img
                className={props.isSmall?"short-poster":"poster"}
                src={props.isSmall ? imageUrl + movie.backdrop_path :imageUrl + movie.poster_path}
                alt="Post"
              />
            )
          })
        }

      </div>
    </div>
  );
}

export default RowPost