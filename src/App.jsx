import React, {useState} from "react";
import Header from "./components/Header.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./WINNING_COMBINATIONS.js";
import GameOver from "./components/Gameover.jsx";

const INITIAL_GAME_BOARD = [[null, null, null], [null, null, null], [null, null, null]];

const PLAYERS = {
    X: 'player1',
    O: 'player2'
}

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}

function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    return gameBoard;
}

function deriveWinner(gameBoard, player) {
    let winner;
    for (const combination of WINNING_COMBINATIONS) {
        const [row0, col0, row1, col1, row2, col2] = combination;

        const firstSymbol = gameBoard[row0][col0];
        const secondSymbol = gameBoard[row1][col1];
        const thirdSymbol = gameBoard[row2][col2];

        if (firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
            winner = player[firstSymbol];
            return winner;
        }
    }
    return null;
}

function App() {

    const [players, setPlayers] = useState(PLAYERS);
    // sharing gameTurns state across different componentS (GameBoard and Log). Check the return stmt.
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurns);
    const gameBoard = deriveGameBoard(gameTurns);
    const winner = deriveWinner(gameBoard, players);

    function handleSelect(rowIndex, colIndex) {

        setGameTurns((prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);
            const updatedTurns = [{
                square: {
                    row: rowIndex, col: colIndex
                }, player: currentPlayer
            }, ...prevTurns,];
            return updatedTurns;
        });
    }

    function handleRestart() {
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol, newName) {
        setPlayers(prevPlayers => {
            return {
                ...prevPlayers,
                [symbol]: newName
            };
        });
    }

    return (<main>
        <div>
            <Header/>
            <div id={'game-container'}>
                <ol id={'players'} className="highlight-player">
                    <Player initialName={PLAYERS.X} symbol='X' isActive={activePlayer === 'X'}
                            onChangeName={handlePlayerNameChange}/>
                    <Player initialName={PLAYERS.O} symbol='O' isActive={activePlayer === 'O'}
                            onChangeName={handlePlayerNameChange}/>
                </ol>
                {winner && (<GameOver winner={winner} restart={handleRestart}/>)}
                <GameBoard onSelectSquare={handleSelect}
                           board={gameBoard}/>
            </div>
            <Log turns={gameTurns}/>

        </div>
    </main>)
}

export default App
