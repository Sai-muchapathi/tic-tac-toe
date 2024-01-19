import React from "react";
import {useState} from "react";
export default function Player({initialName, playerSymbol}) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setEditing] = useState(false);

    function handleClick() {
        setEditing((editing) => !editing);
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }

    let player = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        player = (<input type="text" value={playerName} onChange={handleNameChange}/>);
    }

    return (
        <li>
            <span className="player">
                {player}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}