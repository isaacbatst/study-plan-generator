import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
      <div className='p-5'>
        <h1 className='text-2xl font-bold'>Plano de estudos</h1>
        <p className='text-gray-500'>Crie seu plano de estudos e organize melhor seu tempo.</p>
      </div>
      <hr />
    </header>
  )
}

export default Header