import React, {useState} from "react";
import Header from "./components/Header.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import Log from "./components/Log.jsx";


const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';
    if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}

function App() {

    // sharing gameTurns state across different componentS (GameBoard and Log). Check the return stmt.
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);
    function handleSelect(rowIndex, colIndex) {

        setGameTurns( (prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);
            const updatedTurns = [
                {
                    square: {
                        row: rowIndex,
                        col: colIndex
                    },
                    player: currentPlayer
                }
                ,...prevTurns,
            ];
            return updatedTurns;
            }
        );
    }

    return (
        <main>
            <div>
                <Header/>
                <div id={'game-container'}>
                    <ol id={'players'} className="highlight-player">
                        <Player initialName="player1" symbol='X' isActive={activePlayer === 'X'}/>
                        <Player initialName="player2" symbol='O' isActive={activePlayer === 'O'}/>
                    </ol>
                    <GameBoard onSelectSquare={handleSelect}
                        turns={gameTurns}/>
                </div>
                <Log turns={gameTurns}/>

            </div>
        </main>
    )
}

export default App
