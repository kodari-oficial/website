import React from 'react'
import type { LucideProps } from 'lucide-react'
import type { RefAttributes } from 'react'
import { Link } from 'react-router-dom'

interface FooterNavItemProps {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
  link: string
}

export function FooterNavItem({ icon, link }: FooterNavItemProps) {
  return (
    <Link to={link} target='_blank' rel='noopener noreferrer' className='flex items-center justify-center bg-gray-800 hover:bg-gray-900 p-2 rounded-4xl text-white'>
      {React.createElement(icon)}
    </Link>
  )
}