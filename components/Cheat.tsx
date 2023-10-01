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
      className={`square h-12 w-12 text-6xl flex items-center justify-center outline outline-[#171c28] bg-[#485a7f]
        }`}
    >
      {agentPosition.row === row && agentPosition.column === col && piece !== 'SG' && piece !== 'breeze' && piece !== 'stench' && piece !== 'breezestench' && <Image src={`/images/agent.png`} alt={''} width={64} height={64} />}
      {agentPosition.row === row && agentPosition.column === col && piece === 'SG' && <Image src={`/images/gold.png`} alt={''} width={64} height={64} />}
      {agentPosition.row === row && agentPosition.column === col && piece === 'breeze' && <Image src={`/images/breeze.png`} alt={''} width={64} height={64} />}
      {agentPosition.row === row && agentPosition.column === col && piece === 'stench' && <Image src={`/images/stench.png`} alt={''} width={64} height={64} />}
      {agentPosition.row === row && agentPosition.column === col && piece === 'breezestench' && <Image src={`/images/breezestench.png`} alt={''} width={64} height={64} />}
      {piece === 'P' && <Image src={`/images/pit.png`} alt={''} width={64} height={64} />}
      {piece === 'W' && <Image src={`/images/wumpus.png`} alt={''} width={64} height={64} />}
      {(agentPosition.row !== row || agentPosition.column !== col) && piece === 'SG' && <Image src={`/images/gold.png`} alt={''} width={64} height={64} />}
      {(agentPosition.row !== row || agentPosition.column !== col) && piece === 'breeze' && <Image src={`/images/wind.png`} alt={''} width={64} height={64} />}
      {(agentPosition.row !== row || agentPosition.column !== col) && piece === 'stench' && <Image src={`/images/waste.png`} alt={''} width={64} height={64} />}
      {(agentPosition.row !== row || agentPosition.column !== col) && piece === 'breezestench' && <Image src={`/images/odor.png`} alt={''} width={16} height={16} />}
    </div>

  )
}