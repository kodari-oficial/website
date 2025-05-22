import { Link } from 'react-router-dom'
import Logomarca from '../assets/images/logomarca-sem-fundo-secundária.png'
import Logotipo from '../assets/images/logotipo-sem-fundo-primária.png'
import { Mails, MapPin, MessageCircleMore, Instagram, Linkedin } from 'lucide-react'
import { FooterNavItem } from './footer-nav-item'

export function Footer() {
  return (
    <footer className='h-auto flex flex-col'>
      <section className='bg-gray-900 text-white px-4 lg:px-32 py-8 flex flex-col lg:flex-row lg:justify-around lg:items-center'>
        <img src={Logomarca} className='w-20 lg:w-[10%] lg:h-[10%]' />
        <nav className='flex flex-col gap-4 mt-6'>
          <Link to='https://maps.app.goo.gl/nALRjQ6ShE4c7XBT8' target='_blank' rel='noreferrer' className='flex gap-2'><MapPin /> Guanambi, Bahia, Brasil</Link>
          <div className='flex gap-2'>
            <MessageCircleMore />
            <ul>
              <li><Link to='https://wa.me/5577991686821' target='_blank' rel='noreferrer'>(77) 9 9168-6821</Link></li>
              <li><Link to='https://wa.me/5577999255474' target='_blank' rel='noreferrer'>(77) 9 9925-5474</Link></li>
              <li><Link to='https://wa.me/5577988689092' target='_blank' rel='noreferrer'>(77) 9 8868-9092</Link></li>
              <li><Link to='https://wa.me/5577936181281' target='_blank' rel='noreferrer'>(77) 9 3618-1281</Link></li>
            </ul>
          </div>
          <Link to='mailto:kodari.oficial@gmail.com' target='_blank' rel='noreferrer' className='flex gap-2'><Mails /> kodari.oficial@gmail.com</Link>
        </nav>
      </section>
      <section className='bg-[#0077FF] px-4 py-4 h-36 flex flex-col items-center justify-around'>
        <nav className='flex gap-2 justify-center items-center'>
          <FooterNavItem icon={Instagram} link='https://www.instagram.com/kodari.oficial/' />
          <FooterNavItem icon={Linkedin} link='https://www.linkedin.com/company/kodari-oficial/' />
          {/* <FooterNavItem />
          <FooterNavItem />
          <FooterNavItem /> */}
        </nav>
        <img src={Logotipo} className='h-12' />
      </section>
    </footer>
  )
}