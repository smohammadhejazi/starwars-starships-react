import { useEffect, useState } from "react";
import "../css/styles.css"


const MovieList = (props) => {
    const setShowMovies = props.setShowMovies;
    const setStarshipIdx = props.setStarshipIdx;
    const moviesList =  props.moviesList;

    const handleClick = (idx) => {
        setStarshipIdx(idx);
        setShowMovies(false);
    }

    return (
        <table>
            <tbody>
                {   
                    moviesList.map((movie, idx) => (
                        <tr key={idx}>
                            <td key={idx * 4}>{movie["title"]}</td>
                            <td key={idx * 4 + 1}>{movie["episode_id"]}</td>
                            <td key={idx * 4 + 2}>{movie["release_date"]}</td>
                            <td key={idx * 4 + 3}><button className="table-button" onClick={() => handleClick(idx)}>Starships</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>    
    )
}


export default MovieList;