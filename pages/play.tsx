import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Settings from '@/components/Settings'
import Board from '@/components/Board'

type Props = {}

export default function Play({ }: Props) {
  const [wumpus, setWumpus] = useState(2)
  const [pit, setPit] = useState(2)
  const [gold, setGold] = useState(1)
  const [started, setStarted] = useState(false)
  const router = useRouter()

  let inputBoard: (string)[][] = [
    ['-', '-', '-', 'P', '-', '-', 'P', '-', '-', '-'],
    ['-', '-', 'W', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', 'P', '-', '-', '-'],
    ['-', '-', '-', '-', '-', 'P', '-', '-', '-', '-'],
    ['-', '-', '-', 'G', '-', '-', '-', '-', '-', '-'],
    ['W', '-', '-', '-', '-', '-', 'P', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['P', '-', '-', '-', '-', '-', '-', 'W', '-', '-'],
    ['-', '-', '-', 'P', '-', '-', 'P', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
  ]

  const changeWumpus = (value: number) => {
    setWumpus(value)
  }

  const changePit = (value: number) => {
    setPit(value)
  }

  const changeGold = (value: number) => {
    setGold(value)
  }

  const handleButtonClick = () => {
    let initialBoard = generateRandomBoard(wumpus, pit, gold)
    setStarted(true)
    const encodedData = encodeURIComponent(JSON.stringify(initialBoard));
    router.push(`/board?data=${encodedData}`)
  }

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target && e.target.result) {
          const fileContent = e.target.result as string;
          const parsedBoard = parseBoardFromFileContent(fileContent);
          setStarted(true)
          const encodedData = encodeURIComponent(JSON.stringify(parsedBoard));
          router.push(`/board?data=${encodedData}`)
        }
      };

      reader.readAsText(file);
    }
  };

  const parseBoardFromFileContent = (content: string): string[][] | null => {
    // You need to implement your own logic to parse the file content into a board array.
    // This depends on the format of the file you expect.
    // For example, if your file contains rows of characters separated by newlines:
    // You can split the content by newlines and then split each row into an array of characters.
    const rows = content.split('\n');
    const board = rows.map((row) => row.trim().split(''));
    console.log(board);
    return board;
  };

  return (
    <div className='bg-[url("/images/background.gif")] bg-cover'>
      <Settings
        wumpus={wumpus} changeWumpus={changeWumpus}
        pit={pit} changePit={changePit}
        gold={gold} changeGold={changeGold}
        handleButtonClick={handleButtonClick}
        handleFileInput={handleFileInput}
      />
    </div>
  )
}

function generateRandomBoard(wumpusCount: number, pitCount: number, goldCount: number) {
  let board: (string)[][] = []
  for (let i = 0; i < 10; i++) {
    const row: string[] = [];
    for (let j = 0; j < 10; j++) {
      row.push('-');
    }
    board.push(row);
  }

  for (let i = 0; i < wumpusCount; i++) {
    let val = Math.floor(Math.random() * 100);
    let col = val % 10;
    let row = Math.floor((val / 10) % 10);
    console.log(row, col)
    if (row === 9 && col === 0) {
      i--;
      continue;
    }
    if (col < 2 && row < 2) {
      i--
      continue;
    }
    if (board[row][col] == 'W' || board[row][col] == 'P') {
      i--
      continue;
    }
    board[row][col] = 'W';
  }

  for (let i = 0; i < pitCount; i++) {
    let val = Math.floor(Math.random() * 100);
    let col = val % 10;
    let row = Math.floor((val / 10) % 10);
    if (row === 9 && col === 0) {
      i--;
      continue;
    }
    if (row < 2 && col < 2) {
      i--;
      continue;
    }
    if (board[row][col] == 'P' || board[row][col] == 'W') {
      i = i - 1;
      continue;
    }

    board[row][col] = 'P';
  }
  for (var i = 0; i < goldCount; i++) {

    let val = Math.floor(Math.random() * 100);
    let col = val % 10;
    let row = Math.floor((val / 10) % 10);
    if (row < 2 && col < 2) {
      i--;
      continue;
    }
    if (board[row][col] == 'W' || board[row][col] == 'P') {
      i--;
      continue;
    }
    board[row][col] += 'G'
  }

  console.log(board)
  return board;
}
