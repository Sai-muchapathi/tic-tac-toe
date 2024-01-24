import {useState} from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({onSelectSquare, board}) {


    return (
        <ol id="game-board">
            {board.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((col, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}
                                        disabled={col != null}>{col}</button>
                            </li>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    );
}