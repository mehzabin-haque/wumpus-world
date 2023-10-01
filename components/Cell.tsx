import Image from 'next/image';

type Props = {
  piece: string;
  row: number;
  col: number;
  agentPosition: { row: number, column: number};
}
export default function Cell({ piece, row, col, agentPosition }: Props) {
  const getStatus = (piece: string) => {
    // Possible knowledge values:
    // U = Unknown
    // W = Wumpus
    // P = Pit
    // G = Gold
    // A = Breeze
    // S = Stench
    // V = Safe
    // B = Both stench and breeze

    if (piece === 'P') return 'pit'
    else if (piece === 'W') return 'wumpus'
    else if (piece === 'G') return 'gold'
    else if (piece === 'S') return 'stench'
    else if (piece === 'B') return 'breezestench'
    else if (piece === 'V') return 'safe'
    else if (piece === 'A') return 'breeze'
  }

  return (
    <div data-row={row} data-col={col}
      className={`square h-12 w-12 text-6xl flex items-center justify-center outline outline-[#171c28]  ${(piece==='V') ? 'bg-green-500' : 'bg-[#485a7f]'
        }`}
    >
      {((piece !== 'U') && (agentPosition.row !== row) && (agentPosition.column !== col)) && <Image src={`/images/${getStatus(piece)}.png`} alt={''} width={64} height={64} />}
      {((agentPosition.row === row) && (agentPosition.column === col)) && <Image src={`/images/${(piece==='G') ? 'win' : getStatus(piece)}.png`} alt={''} width={64} height={64} />}
    </div>
  )
}