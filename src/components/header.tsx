import Logotipo from '../assets/images/logotipo-sem-fundo-primária.png'
import { HeaderLink } from './header-link'

export function Header() {
  return (
    <header className='h-28 flex flex-row items-center justify-between bg-gray-900 text-white px-4 lg:px-32'>
      <img src={Logotipo} className='w-[40%] lg:w-[10%]' alt='Logotipo da Kodari em letras brancas, contendo um K destacado procedido do restante do nome: odari' />
      <nav className='flex flex-row gap-4'>
        <HeaderLink to='/'>Início</HeaderLink>
        <HeaderLink to='/sobre'>Sobre nós</HeaderLink>
      </nav>
    </header>
  )
}