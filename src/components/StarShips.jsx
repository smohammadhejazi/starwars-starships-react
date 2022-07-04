import { useEffect, useState } from "react";
import StarShipInfo from "./StarShipInfo.jsx"; 
import "../css/styles.css"

const StarShips = (props) => {
    const setShowMovies = props.setShowMovies;
    const movie = props.movie;
    const [starshipIdx, setStarshipIdx] = useState(0)
    const [loading, setloading] = useState(true);
    const [starshipsList, setStarshipsList] = useState([]);

    useEffect(() => {
        Promise.all(
            movie["starships"].map(api => fetch(api)
            .then(response => response.json())
            )
        ).then(ships => {
            setStarshipsList(ships);
            setloading(false);
        });
        // setStarshipsList(STARSHIPS_LIST);
        // setloading(false);
      }, [])

    const handleListClick = (idx) => {
        setStarshipIdx(idx);
    } 

    const handleBackClick = (idx) => {
        setShowMovies(true);
    } 

    return (
        loading ? (
            <p>Loading...</p>
          ):
          (
            <>
            <div id="left-box">
                <p>{movie["title"]}</p>
                <p>StarShips</p>
                <ul id="ships-list">
                    {
                        starshipsList.map((starship, idx) => (
                            <li key={idx} onClick={() => handleListClick(idx)}>{starship["name"]}</li>
                        ))
                    }
                </ul>
                <button className="control-button" onClick={handleBackClick}>Back</button>
            </div>
            <div id="right-box">
                <div id="ship-info">
                    <StarShipInfo starshipInfo={starshipsList[starshipIdx]}></StarShipInfo>
                </div>
            </div>
            </>
          )

    )
}


export default StarShips;