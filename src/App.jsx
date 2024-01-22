import React, {useState} from "react";
import Header from "./components/Header.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";

function App() {


    const [activePlayer, setActivePlayer] = useState('X');


    function handleSelect() {
        setActivePlayer((curPlayer) => curPlayer === 'X' ? 'O' : 'X');
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
                    <GameBoard onSelectSquare={handleSelect} playerName={activePlayer}/>
                </div>

            </div>
        </main>
    )
}

export default App
