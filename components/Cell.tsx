import Image from 'next/image';

type Props = {
  piece: string;
  row: number;
  col: number;
  agentPosition: { row: number, column: number};
  isVisited: boolean;
}
export default function Cell({ piece, row, col, agentPosition, isVisited }: Props) {
  
  return (
    <div data-row={row} data-col={col}
      className={`square h-16 w-16 flex items-center justify-center outline outline-[#171c28]  ${(piece==='S' && isVisited) ? 'bg-green-500' : (piece!=='S' && isVisited? 'bg-red-500' : 'bg-[#A8F2FE]')}`}  
    >
      {agentPosition.row === row && agentPosition.column === col && piece !== 'SG' && piece !== 'breeze' && piece !== 'stench' && piece !== 'breezestench' && <Image src={`/images/agent.png`} alt={''} width={64} height={64} />}
      {agentPosition.row === row && agentPosition.column === col && piece === 'SG' && <Image src={`/images/gold.png`} alt={''} width={64} height={64} />}
      {agentPosition.row === row && agentPosition.column === col && piece === 'breeze' && <Image src={`/images/breeze.png`} alt={''} width={64} height={64} />}
      {agentPosition.row === row && agentPosition.column === col && piece === 'stench' && <Image src={`/images/stench.png`} alt={''} width={64} height={64} />}
      {agentPosition.row === row && agentPosition.column === col && piece === 'stenchbreeze' && <Image src={`/images/breeze_stench.png`} alt={''} width={64} height={64} />}
      {(agentPosition.row !== row || agentPosition.column !== col) && piece === 'SG' && <Image src={`/images/gold.png`} alt={''} width={64} height={64} />}
      {(agentPosition.row !== row || agentPosition.column !== col) && piece === 'breeze' && <Image src={`/images/wind.png`} alt={''} width={48} height={64} />}
      {(agentPosition.row !== row || agentPosition.column !== col) && piece === 'stench' && <Image src={`/images/waste.png`} alt={''} width={48} height={64} />}
      {(agentPosition.row !== row || agentPosition.column !== col) && piece === 'stenchbreeze' && <Image src={`/images/odor.png`} alt={''} width={48} height={64} />}
    </div>
  )
}