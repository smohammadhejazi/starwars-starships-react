import { useEffect, useState } from "react";
import "../css/styles.css"


const StarShipInfo = (props) => {
    const starshipInfo = props.starshipInfo;

    let shipString = "";

    for (const key in starshipInfo) {
        shipString += key + ": " + starshipInfo[key];
        shipString += "\n";
    }


    return (
        <p>{shipString}</p>
    )
}

export default StarShipInfo;