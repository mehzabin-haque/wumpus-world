import Image from 'next/image';

type Props = {
  piece: string;
  row: number;
  col: number;
  agentPosition: number[];
}
export default function Cell({ piece, row, col, agentPosition }: Props) {
  const getStatus = (piece: string) => {
    // Possible knowledge values:
    // U = Unknown
    // W = Wumpus
    // P = Pit
    // G = Gold
    // W = Breeze
    // S = Stench
    // V = Safe
    // B = Both stench and breeze

    if (piece === 'P') return 'pit'
    else if (piece === 'W') return 'wumpus'
    else if (piece === 'G') return 'gold'
    else if (piece === 'S') return 'stench'
    else if (piece === 'B') return 'breeze'
    else if (piece === 'V') return 'safe'
  }

  return (
    // render the squares
    <div data-row={row} data-col={col}
      className={`square h-8 w-8 text-6xl flex items-center justify-center outline outline-[#171c28] bg-[#485a7f]
        }`}
    >
      {((piece !== 'U') && (agentPosition[0] !== row) && (agentPosition[1] !== col)) && <Image src={`/images/${getStatus(piece)}.png`} alt={''} width={64} height={64} />}
    </div>
  )
}