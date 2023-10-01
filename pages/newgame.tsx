import React from 'react'

type Props = {}

export default function newgame({ }: Props) {
  return (
    <div className='bg-[#3faa98] h-screen flex flex-col items-center justify-center'>
      <div className='text-4xl font-extrabold tracking-[2px]'>
        Game Settings
      </div>
      <div className='flex'>
        <div>
          <p>Wumpus</p>
        </div>
        <div>
          <p>Pit</p>
        </div>
        <div>
          <p>Gold</p>
        </div>
      </div>
    </div>
  )
}