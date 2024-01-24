import React from "react";
import {useState} from "react";
export default function Player({initialName, symbol, isActive, onChangeName}) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setEditing] = useState(false);


    function handleClick() {
        // Updating state based on the old value
        setEditing((editing) => !editing);
        if(isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }

    let player = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        /* Using two-way binding for the user input
            getting the user input by the onChange and feeding back the updated value in the value field {playerName}
        */
        player = (<input type="text" value={playerName} onChange={handleNameChange}/>);
    }

    return (
        //deriving (isActive ) state from the props
        <li className = {isActive ? 'active' : undefined}>

            <span className="player">
                {player}
                <span className="player-symbol">{symbol}</span>

            </span>

            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}