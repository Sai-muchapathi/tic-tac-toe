import {useState} from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {

    //const [player, setPlayer] = useState('X');

    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    function handleClick(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray =>
                [...innerArray]
            )];
            updatedBoard[rowIndex][colIndex] = 'X';
            return updatedBoard;
        })
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