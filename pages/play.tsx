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
  const [initialBoard, setInitialBoard] = useState<(string)[][]>([['']])

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
    setInitialBoard([...generateRandomBoard(wumpus, pit, gold)])
    setStarted(true)
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {

  }

  return (
    (started) ? <Board initialBoard={initialBoard} />
      :
      <Settings
        wumpus={wumpus} changeWumpus={changeWumpus}
        pit={pit} changePit={changePit}
        gold={gold} changeGold={changeGold}
        handleButtonClick={handleButtonClick}
        handleFileInput={handleFileInput}
      />
  )
}

function generateRandomBoard(wumpusCount: number, pitCount: number, goldCount: number) {
  let board: (string)[][] = [['']]
  for(let i=0; i< wumpusCount; i++){
    let val = Math.floor(Math.random()*100);
    let col = val % 10;
    let row = Math.floor((val / 10) % 10);
    if(col<2 && row <2){
      i--
      continue;
    }
    if(board[row][col]=='W' || board[row][col]=='P'){
      i--
      continue;
    }
    //// console.log(row, col)
    board[row][col] = 'W';
  }
  for(var i=0; i< pitCount; i++){
    
    let val = Math.floor(Math.random()*100);
    let col = val % 10;
    let row = Math.floor((val / 10) % 10);
    if(row <2 && col <2){
      i--;
      continue;
    }
    //// console.log(row, col)
    if(board[row][col]=='P' || board[row][col]=='W'){
      i = i-1;
      continue;
    }
    board[row][col] = 'P';
  }
  for(var i=0; i< goldCount; i++){

    let val = Math.floor(Math.random()*100);
    let col = val % 10;
    let row = Math.floor((val / 10) % 10);
    if(row <2 && col<2){
      i--;
      continue;
    }
    if(board[row][col]=='W' || board[row][col]=='P'){
     i--;
      continue;
    }
    board[row][col]+='G'
  };
}
