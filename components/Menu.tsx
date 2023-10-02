import Link from 'next/link'

const Menu = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-6 pb-48 '>

      <Link href='/newgame'>
        <button className='bg-[#A8F2FE] w-[250px] hover:bg-gray-300 py-2 rounded-full font-semibold text-2xl text-[#4D448B] tracking-[1px]'>New Game</button>
      </Link>
      <Link href='/manual'>
        <button className='bg-[#A8F2FE] w-[250px] hover:bg-gray-300 py-2 rounded-full font-semibold text-2xl text-[#4D448B] tracking-[1px]'>Game Manual</button>
      </Link>
    </div>
  )
}

export default Menu