import Game from '@/components/Game'
import Menu from '@/components/Menu'

export default function Home() {
  return (
    <main>
      <div className='flex h-screen items-center justify-center bg-[url("/images/background.gif")] bg-cover'>
        <Menu />
      </div>
    </main>
  )
}
