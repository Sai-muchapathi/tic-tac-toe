import React from "react";
import {useState} from "react";
export default function Player({initialName, symbol, isActive}) {

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
        <li className = {isActive ? 'active' : undefined}>
            <span className="player">
                {player}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}