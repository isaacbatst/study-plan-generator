import { SheetContact } from './SheetContact'

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
      <div className='p-5 lg:px-0 lg:py-5 flex justify-between gap-2'>
        <div>
          <h1 className='text-2xl font-bold mb-1'>Planejei</h1>
          <p className='text-gray-500 hidden lg:block'>Crie seu plano de estudos e organize melhor seu tempo.</p>
        </div>
        <div className='flex items-center'>
          <SheetContact />
        </div>
      </div>
      <hr className='lg:hidden' />
    </header>
  )
}

export default Header