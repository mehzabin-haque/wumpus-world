import Cell from '@/components/Cell'
import Cheat from '@/components/Cheat'
import { GameState } from '@/utils/AI'
import React, { useState } from 'react'

type Props = {}

export default function Board({ }: Props) {
  const [gs, setGS] = useState<GameState>(new GameState())
  const [board, setBoard] = useState(gs.board)
  const [knowledge, setKnowledge] = useState(gs.knowledge)

  return (
    <>

      <div className='h-screen flex space-x-16 items-center justify-center bg-[#93032E]'>
        <div className='bg-[#93032E] text-center pb-16'>
          <p className='mb-8 text-white text-2xl font-bold tracking-wider'>Cheat</p>
          {board.map((row, rowIndex) => (
            <div className={`flex`} key={rowIndex}>
              {row.map((piece, colIndex) => (
                <Cheat
                  piece={piece}
                  row={rowIndex}
                  col={colIndex}
                  agentPosition={gs.agentPosition}
                />
              ))}
            </div>
          ))}
        </div>
        <div className='bg-[#93032E] text-center pb-16'>
        <p className='mb-8 text-white text-2xl font-bold tracking-wider'>Current Game</p>
          {knowledge.map((row, rowIndex) => (
            <div className={`flex`} key={rowIndex}>
              {row.map((piece, colIndex) => (
                <Cell
                  piece={piece}
                  row={rowIndex}
                  col={colIndex}
                  agentPosition={gs.agentPosition}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>

  )
}