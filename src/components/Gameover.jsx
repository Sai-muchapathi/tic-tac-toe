export default function GameOver({winner, restart}) {

    return (
        <div id="game-over">
            <h2>Game over!</h2>
            <p>{winner} has won!!</p>
            <p>
                <button onClick={restart}>Restart</button>
            </p>
        </div>
    );
}