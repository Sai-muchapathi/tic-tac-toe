import React from "react";
import {useState} from "react";
import Player from "./Player.jsx";
import GameBoard from "./GameBoard.jsx";
export default function GameComponent() {

    const [playerName, setPlayerName] = useState('Player1');

    return (
        <div id={'game-container'}>
            <ol id={'players'}>
                <Player initialName={playerName} playerSymbol={"X"}/>
                <Player initialName={playerName} playerSymbol={"O"}/>
            </ol>
            <GameBoard/>
       </div>
    );
}