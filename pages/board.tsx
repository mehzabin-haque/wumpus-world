import Cell from '@/components/Cell'
import Cheat from '@/components/Cheat'
import { GameState } from '@/utils/AI'
import React, { useEffect, useState } from 'react'

type Props = {}

export default function Board({ }: Props) {
  let initialBoard: (string)[][] = [
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

  const [gs, setGS] = useState<GameState>(new GameState(initialBoard))
  const [board, setBoard] = useState(gs.board)
  const [knowledge, setKnowledge] = useState(gs.knowledge)

  const move = () => {
    let mv = gs.move();
    console.log(mv)
    if (mv == gs.UP) {
      gs.agentIndex.row--;
      gs.point--;
    }
    else if (mv == gs.DOWN) {
      gs.agentIndex.row++;
      gs.point--;
    }
    else if (mv == gs.LEFT) {
      gs.agentIndex.column--;
      gs.point--;
    }
    else if (mv == gs.RIGHT) {
      gs.agentIndex.column++;
      gs.point--;
    }
    console.log(gs.agentIndex)
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     move()
  //     setBoard(gs.board)
  //     setKnowledge(gs.knowledge)
  //     renderBoard()
  //   }, 1000)

  //   return () => clearInterval(interval)
  // }, [gs])

  const renderBoard = () => {
    return (
      <>
      {/* <div className='h-screen flex space-x-16 items-center justify-center bg-gradient-to-b from-purple-900 via-green-700 to-blue-900'> */}
         
        <div className='h-screen flex space-x-16 items-center justify-center bg-[#2ca894]'>
          <div className='bg-[#2ca894] text-center pb-16'>
            <p className='mb-8 text-white text-2xl font-bold tracking-wider'>Cheat</p>
            {initialBoard.map((row, rowIndex) => (
              <div className={`flex`} key={rowIndex}>
                {row.map((piece, colIndex) => (
                  <Cheat
                    piece={piece}
                    row={rowIndex}
                    col={colIndex}
                    agentPosition={gs.agentIndex}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className='bg-[#2ca894] text-center pb-16'>
            <p className='mb-8 text-white text-2xl font-bold tracking-wider'>Current Game</p>
            {board.map((row, rowIndex) => (
              <div className={`flex`} key={rowIndex}>
                {row.map((piece, colIndex) => (
                  <Cell
                    piece={piece}
                    row={rowIndex}
                    col={colIndex}
                    agentPosition={gs.agentIndex}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }

  return renderBoard()
}