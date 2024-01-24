import React, {useState} from "react";
import Header from "./components/Header.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./WINNING_COMBINATIONS.js";

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

let winner;
function deriveWinner(gameBoard) {
    for(const combination of WINNING_COMBINATIONS) {
        const [row0, col0, row1, col1, row2, col2] = combination;

        const firstSymbol = gameBoard[row0][col0];
        const secondSymbol = gameBoard[row1][col1];
        const thirdSymbol = gameBoard[row2][col2];

        if(firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
            winner = firstSymbol;
            return winner;
        }
    }
    return null;
}

function App() {

    // sharing gameTurns state across different componentS (GameBoard and Log). Check the return stmt.
    const [gameTurns, setGameTurns] = useState([]);
    let gameBoard = initialGameBoard;

    const activePlayer = deriveActivePlayer(gameTurns);

    for(const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
        deriveWinner(gameBoard);
    }
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
                    {winner && <p>{winner} has won!</p>}
                    <GameBoard onSelectSquare={handleSelect}
                        board={gameBoard}/>
                </div>
                <Log turns={gameTurns}/>

            </div>
        </main>
    )
}

export default App
