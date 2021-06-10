import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import Anime from './Anime'
import axios from 'axios'

import{fetchSuccess} from './../action'
const List = (props) =>{
    useEffect(() =>{
        axios
        .get("https://api.jikan.moe/v3/search/anime?q=naruto")
        .then(res => {
            props.dispatch(fetchSuccess(res.data.results))
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    console.log(props)
    return(
        <div>
            {
            props.anime.map(item =>{
             return <Anime /> 
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

export default connect(mapStateToProps)(List);