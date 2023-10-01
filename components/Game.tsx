import { useState } from "react"

type Props = {}

export default function Game({ }: Props) {
  const [gameOver, setGameOver] = useState(false)
  const [gameOverLine, setGameOverLine] = useState('Well Done Kiddo!!!')
  return (
    <>
      {/* <div className={`${gameOver ? 'visible' : 'hidden'} h-[100px] w-[600px] text-white z-1 mx-[20%] my-[35%] absolute bg-[rgba(17, 40, 71, 0.7) rounded-2xl shadow-md backdrop-blur-[6px] border border-[rgba(244, 248, 255, 0.52)]`}>
        <h3 className='text-[50px] mx-[3%] mt-[10px] text-center font-bold text-white'>{gameOverLine}</h3>
      </div> */}

      {/* fix the size of the screen, it doesn't show in my laptop */}

      <div className='flex'>
        <div className='flex text-center ml-[12%] mt-[-4%] mb-[-4%]'>
          <div className='w-[60px] h-[60px] mr-[7%] text-center'>
            <img src="/images/wc.jpg" alt="" className="h-[50px] w-auto mt-[-5px] mx-[5px]" />
            <h4 className="text-center text-[12px] text-white mt-[10%]">Wumpus</h4>
          </div>
          <div className='w-[60px] h-[60px] mr-[7%] text-center'>
            <img src="/images/knowGold.png" alt="" className="h-[50px] w-auto mt-[-5px] mx-[5px]" />
            <h4 className="text-center text-[12px] text-white mt-[10%]">Gold</h4>
          </div>
          <div className='w-[60px] h-[60px] mr-[7%] text-center'>
            <img src="/images/knowPit.png" alt="" className="h-[50px] w-auto mt-[-5px] mx-[5px]" />
            <h4 className="text-center text-[12px] text-white mt-[10%]">Pit</h4>
          </div>
          <div className='w-[60px] h-[60px] mr-[7%] text-center'>
            <img src="/images/knowStench.png" alt="" className="h-[50px] w-auto mt-[-5px] mx-[5px]" />
            <h4 className="text-center text-[12px] text-white mt-[10%]">Stench</h4>
          </div>
          <div className='w-[60px] h-[60px] mr-[7%] text-center'>
            <img src="/images/knowBreeze.png" alt="" className="h-[50px] w-auto mt-[-5px] mx-[5px]" />
            <h4 className="text-center text-[12px] text-white mt-[10%]">Breeze</h4>
          </div>
        </div>
      </div>
    </>
  )
}