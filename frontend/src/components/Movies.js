import React, {useEffect, useState} from 'react';
import axios from "axios"

function Movies(props) {

    let [movies, setMovies] = useState([])

    useEffect(async function(){
        let res = await axios.get(`http://localhost:5000/listOfMovies`)
        setMovies(res.data)
    })

    function ShowMovies(){
        return movies.map((eachMovie) => {
            return (
                <div>
                    <img src={eachMovie.image}/>
                    <h3>{eachMovie.title}</h3>
                </div>
            )
        })
    }

    return (
        <div>
            {ShowMovies()}
            this is the movies
        </div>
    );
}

export default Movies;