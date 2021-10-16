import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube'

function Banner() {
    const [movie, setMovie] = useState()
    const [bannerUrl, setBannerUrl] = useState('')
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data.results[Math.floor(Math.random() * 21)]);
            
            setMovie(response.data.results[Math.floor(Math.random() * 19)])
        })
    }, [])
    const opts = {
        height: '448px',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const bannerTrailer=(movieId)=>{
          axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
              console.log(response.data.results[0]);
              setBannerUrl(response.data.results[0].key)
              document.querySelector('.content').style.display="none"
          })
      }
    return (

        <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}}
          className='banner'>
               
            <div className='content'>
                <h1 className='title'>{movie ? movie.title :""}</h1>
                <div className='banner-buttons'>
                    <button onClick={()=>{bannerTrailer(movie.id)}} className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                
                <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
            <div>
          { bannerUrl &&  <YouTube opts={opts} videoId={bannerUrl} />}
          </div>

        
        </div>

    )
}

export default Banner
