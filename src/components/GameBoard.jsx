import {useState} from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({onSelectSquare, playerName}) {

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleClick(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray =>
                [...innerArray]
            )];
            updatedBoard[rowIndex][colIndex] = playerName;
            return updatedBoard;
        })
        onSelectSquare();

    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((col, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={() => handleClick(rowIndex, colIndex)}>{col}</button>
                            </li>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    );
}