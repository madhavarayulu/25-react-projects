import React, { useState } from 'react';
import './tic-tac-toe.css';

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  function calculateWinner(board) {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  const status = winner
    ? `Winner: ${winner}`
    : board.every((square) => square !== null)
    ? `Draw!`
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  function handleClick(index) {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    }
  }

  function handleRestart() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  }

  function renderSquare(index) {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  }

  return (
    <div className="container-tic-tac-toe">
      <div className="status">{status}</div>
      <div className="board">
        {board.map((cell, index) => renderSquare(index))}
      </div>
      <button className="restart" onClick={handleRestart}>
        Restart Game
      </button>
    </div>
  );
}

export default TicTacToe;
