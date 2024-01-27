import { Send } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { SheetDemo } from './SheetContact'

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
      <div className='p-5 lg:px-0 lg:py-5 flex justify-between'>
        <div>
          <h1 className='text-2xl font-bold'>Cronograma de estudos</h1>
          <p className='text-gray-500 hidden lg:block'>Crie seu plano de estudos e organize melhor seu tempo.</p>
        </div>
        <div className='flex items-center'>
          <SheetDemo />
        </div>
      </div>
      <hr />
    </header>
  )
}

export default Header