import Image from 'next/image';

type Props = {
  piece: string;
  row: number;
  col: number;
  agentPosition: { row: number, column: number};
}
export default function Cheat({ piece, row, col, agentPosition }: Props) {
  const getStatus = (piece: string) => {
    // Possible board values:
    // - = Nothing
    // P = Pit
    // W = Wumpus
    // G = Gold

    if (piece === 'P') return 'pit'
    else if (piece === 'W') return 'wumpus'
    else if (piece === 'G') return 'gold'

  }

  return (
    <div data-row={row} data-col={col}
      className={`square h-8 w-8 text-6xl flex items-center justify-center outline outline-[#171c28] bg-[#2c8da8]
        }`}
    >
      {((piece !== 'U') && (agentPosition.row !== row) && (agentPosition.column !== col)) && <Image src={`/images/${getStatus(piece)}.png`} alt={''} width={64} height={64} />}
      {((agentPosition.row === row) && (agentPosition.column === col)) && <Image src={`/images/agent.png`} alt={''} width={64} height={64} />}
    </div>

  )
}