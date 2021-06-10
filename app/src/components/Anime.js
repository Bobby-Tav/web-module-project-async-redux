import React from 'react';
import {connect} from 'react-redux';



const Anime = (props) =>{
   const{anime} = props

    return(
      <div>
          {console.log(anime)}
            <h2>{anime.title}</h2>
            <img alt={anime.title} src ={anime.image_url} />
            <p>Episodes: {anime.episodes}</p>
            <p>Rated: {anime.rated}</p>
            <p>Score: {anime.score}</p>
            <p>Synopsis: {anime.synopsis}</p>
            
        </div>
    )
}

export default  Anime;