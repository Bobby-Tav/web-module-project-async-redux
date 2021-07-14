import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import Anime from './Anime'
import axios from 'axios'

import{fetchSuccess} from './../action'
const List = (props) =>{
    const {anime, fetchSuccess} = props
    useEffect(() =>{
        axios
        .get("https://api.jikan.moe/v3/search/anime?q=naruto")
        .then(res => {
            fetchSuccess(res.data.results)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])


    return(
        <div>
            {
            anime.map((item,index) =>{
             return <Anime anime={item}  /> 
            })
            }
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        anime: state.anime
    } 
}

export default connect(mapStateToProps,{fetchSuccess})(List);