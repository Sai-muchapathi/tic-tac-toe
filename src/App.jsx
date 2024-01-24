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
function App() {


    // Lifting player state up so that both GameBoard and Player components can know the common value i.e, PlayerSymbol
    const [activePlayer, setActivePlayer] = useState('X');

    // sharing gameTurns state across different componentS (GameBoard and Log). Check the return stmt.
    const [gameTurns, setGameTurns] = useState([]);

    function handleSelect(rowIndex, colIndex) {
        setActivePlayer((curPlayer) => curPlayer === 'X' ? 'O' : 'X');
        setGameTurns( (prevTurns) => {
            const updatedTurns = [
                {
                    square: {
                        row: rowIndex,
                        col: colIndex
                    },
                    player: activePlayer
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
