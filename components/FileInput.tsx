import React, { useEffect, useState } from 'react';
import Cell from '@/components/CellNew';
import Cheat from '@/components/CellNew';
import { GameState } from '@/utils/AI';

type Props = {};

export default function Board({ }: Props) {
  const [gs, setGS] = useState<GameState>();
  const [board, setBoard] = useState<string[][]>();
  const [knowledge, setKnowledge] = useState<string[][]>();

  const move = () => {
    if (gs) {
      let mv = gs.move();
      console.log(mv);
      if (mv === gs.UP) {
        gs.agentIndex.row--;
        gs.point--;
      } else if (mv === gs.DOWN) {
        gs.agentIndex.row++;
        gs.point--;
      } else if (mv === gs.LEFT) {
        gs.agentIndex.column--;
        gs.point--;
      } else if (mv === gs.RIGHT) {
        gs.agentIndex.column++;
        gs.point--;
      }
      console.log(gs.agentIndex);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target && e.target.result) {
          const fileContent = e.target.result as string;
          const parsedBoard = parseBoardFromFileContent(fileContent);
          if (parsedBoard) {
            const newGameState = new GameState(parsedBoard);
            setGS(newGameState);
            setBoard(newGameState.board);
            setKnowledge(newGameState.knowledge);
          }
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

    return board;
  };

  const renderBoard = () => {
    return (
      <>
        <input type="file" accept=".txt" onChange={handleFileChange} />
        <div className="h-screen flex space-x-16 items-center justify-center bg-[#93032E]">
          <div className="bg-[#93032E] text-center pb-16">
            <p className="mb-8 text-white text-2xl font-bold tracking-wider">Cheat</p>
            {knowledge &&
              knowledge.map((row, rowIndex) => (
                <div className={`flex`} key={rowIndex}>
                  {row.map((piece, colIndex) => (
                    <Cheat
                      key={`${rowIndex}-${colIndex}`}
                      piece={piece}
                      row={rowIndex}
                      col={colIndex}
                      agentPosition={gs ? gs.agentIndex : undefined}
                    />
                  ))}
                </div>
              ))}
          </div>
          <div className="bg-[#93032E] text-center pb-16">
            <p className="mb-8 text-white text-2xl font-bold tracking-wider">Current Game</p>
            {board &&
              board.map((row, rowIndex) => (
                <div className={`flex`} key={rowIndex}>
                  {row.map((piece, colIndex) => (
                    <Cell
                      key={`${rowIndex}-${colIndex}`}
                      piece={piece}
                      row={rowIndex}
                      col={colIndex}
                      agentPosition={gs ? gs.agentIndex : undefined}
                    />
                  ))}
                </div>
              ))}
          </div>
        </div>
      </>
    );
  };
  

  return renderBoard();
}
