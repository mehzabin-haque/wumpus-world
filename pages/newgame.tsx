import { useRouter } from 'next/router'
import React, { useState } from 'react'

type Props = {}

export default function Newgame({ }: Props) {
  const [wumpus, setWumpus] = useState(2)
  const [pit, setPit] = useState(2)
  const [gold, setGold] = useState(1)
  const router = useRouter()

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



  const handleButtonClick = () => {
    const encodedData = encodeURIComponent(JSON.stringify(initialBoard))
    router.push(`/board?data=${encodedData}`)
  }

  return (
    <div className='bg-[#3faa98] h-screen flex flex-col items-center justify-center pb-32'>
      <div className='text-6xl font-extrabold tracking-[2px]'>
        Game Settings
      </div>
      <div className='flex space-x-32 text-3xl text-center font-semibold pt-32 pb-16'>
        <div className='flex flex-col'>
          <p>Wumpus</p>
          <input className='py-1' type="range" min='2' max='5' value={wumpus} onChange={(e) => { setWumpus(parseInt(e.target.value)) }} />
          <p>{wumpus}</p>
        </div>
        <div className='flex flex-col'>
          <p>Pit</p>
          <input className='py-1' type="range" min='2' max='8' value={pit} onChange={(e) => { setPit(parseInt(e.target.value)) }} />
          <p>{pit}</p>
        </div>
        <div className='flex flex-col'>
          <p>Gold</p>
          <input className='py-1' type="range" min='1' max='4' value={gold} onChange={(e) => { setGold(parseInt(e.target.value)) }} />
          <p>{gold}</p>
        </div>
      </div>
      <div>
          <button onClick={handleButtonClick} className='bg-white w-[320px] hover:bg-gray-300 py-2 rounded-full font-semibold text-2xl tracking-[1px]'>Start Game</button>
      </div>
    </div>
  )
}