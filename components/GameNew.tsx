import { useState } from "react";

type Props = {};

export default function Game({}: Props) {
  const [gameOver, setGameOver] = useState(false);
  const [gameOverLine, setGameOverLine] = useState("Well Done Kiddo!!!");

  return (
    <div className="bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 h-screen flex justify-center items-center">
      <div className="text-center text-white">
        {/* Cute Wumpus */}
        <div className="mb-8">
          <img
            src="/images/wc.jpg"
            alt="Cute Wumpus"
            className="h-24 mx-auto"
          />
          <h4 className="text-lg font-semibold mt-2">Cute Wumpus</h4>
        </div>

        {/* Game Icons */}
        <div className="flex justify-center">
          <div className="mx-4">
            <img
              src="/images/knowGold.png"
              alt="Gold"
              className="h-12 w-auto"
            />
            <h4 className="text-sm mt-2">Gold</h4>
          </div>
          <div className="mx-4">
            <img
              src="/images/knowPit.png"
              alt="Pit"
              className="h-12 w-auto"
            />
            <h4 className="text-sm mt-2">Pit</h4>
          </div>
          <div className="mx-4">
            <img
              src="/images/knowStench.png"
              alt="Stench"
              className="h-12 w-auto"
            />
            <h4 className="text-sm mt-2">Stench</h4>
          </div>
          <div className="mx-4">
            <img
              src="/images/knowBreeze.png"
              alt="Breeze"
              className="h-12 w-auto"
            />
            <h4 className="text-sm mt-2">Breeze</h4>
          </div>
        </div>
      </div>

      {/* Game Over Message */}
      {gameOver && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-md text-center text-gray-800">
            <h3 className="text-xl font-bold">{gameOverLine}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
