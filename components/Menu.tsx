import Link from 'next/link'

const Menu = () => {
  return (
    <div>
      <img src='/NEW.png' alt='game-logo' className='' /><br></br>
      <Link href='/board'>
        <button className=''>New Game</button>
      </Link>
      <Link href='/manual'>
        <button className=''>Game Manual</button>
      </Link>
    </div>
  )
}

export default Menu