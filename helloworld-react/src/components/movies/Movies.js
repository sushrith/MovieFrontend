import React from 'react'
import MovieCard from './MovieCard'
import './Movies.css';
function Movies(props) {
    return (
        <div id="movie">
        {
            props.data.map((info,id)=>{
                return <MovieCard data={info}/>
            })
        }
        </div>
    )
}

export default Movies
