import Cell from '@/components/Cell'
import Cheat from '@/components/Cheat'
import { GameState } from '@/utils/AI'
import React, { useEffect, useState } from 'react'
import Modal from '@/components/Modal'
import { useRouter } from 'next/router'

type Props = {
  initialBoard: (string)[][]
}

export default function Board({ initialBoard }: Props) {
  const [gs, setGS] = useState<GameState>(new GameState(initialBoard))
  const [board, setBoard] = useState(gs.board)
  const [knowledge, setKnowledge] = useState(gs.knowledge)
  const [cboard, setCBoard] = useState(gs.cboard)
  const [isWinModalOpen, setIsWinModalOpen] = useState(false);
  const [isLoseModalOpen, setIsLoseModalOpen] = useState(false);

  const move = () => {
    let mv = gs.move();
    if (mv == gs.RIGHT) {
      gs.agentIndex.column++;
      gs.point--;
    }
    else if (mv == gs.LEFT) {
      gs.agentIndex.column--;
      gs.point--;
    }
    else if (mv == gs.UP) {
      gs.agentIndex.row--;
      gs.point--;
    }
    else if (mv == gs.DOWN) {
      gs.agentIndex.row++;
      gs.point--;
    }
    gs.cellVisited[gs.agentIndex.row][gs.agentIndex.column] = true;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      move()
      setBoard([...gs.board])
      setKnowledge([...gs.knowledge])
    }, 500)

    setTimeout(renderBoard, 0)

    return () => clearInterval(interval)
  }, [gs])

  useEffect(() => {
    if (gs.gameOver && gs.youWin) {
      setIsWinModalOpen(true);
    } else if (gs.gameOver && gs.youLose) {
      setIsLoseModalOpen(true);
    }
  }, [gs.gameOver, gs.youWin, gs.youLose]);

  const renderBoard = () => {
    return (
      <>
        <div className='h-screen flex space-x-64 items-center justify-center bg-[#93032E]'>
          <div className='bg-[#93032E] text-center pb-16'>
            <p className='mb-8 text-white text-2xl font-bold tracking-wider'>Inspect Mode</p>
            {cboard.map((row, rowIndex) => (
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
            <div className='pt-8 text-xl font-bold text-white tracking-[1px] w-full flex flex-col items-start'>
              <div className='pl-10 space-x-24'>
                <span>Available Gold: {gs.goldCount}</span>
                <span>Gold Collected: {gs.discoveredGold}</span>
              </div>
              <div className='pl-10 space-x-[84px]'>
                <span>Wumpus Killed: {gs.wumpusKilled}</span>
                <span>Point: {gs.point}</span>
              </div>
            </div>
          </div>
          <div className='text-center pb-16'>
            <p className='mb-8 text-white text-2xl font-bold tracking-wider'>Current Game</p>
            {board.map((row, rowIndex) => (
              <div className={`flex`} key={rowIndex}>
                {row.map((piece, colIndex) => (
                  <Cell
                    piece={piece}
                    row={rowIndex}
                    col={colIndex}
                    agentPosition={gs.agentIndex}
                    isVisited={gs.cellVisited[rowIndex][colIndex]}
                  />
                ))}
              </div>
            ))}
          </div>
          <Modal
        isOpen={isWinModalOpen}
        message="You Win!"
        onRequestClose={() => setIsWinModalOpen(false)}
      />
      <Modal
        isOpen={isLoseModalOpen}
        message="Game Lost!"
        onRequestClose={() => setIsLoseModalOpen(false)}
      />
        </div>
      </>
    )
  }

  return renderBoard()
}