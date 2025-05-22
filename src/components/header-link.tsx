import { NavLink } from 'react-router-dom'

interface HeaderLinkProps {
  to: string
  children: React.ReactNode
}

export function HeaderLink({ to, children }: HeaderLinkProps) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <span className={`hover:underline ${isActive ? 'text-white' : 'text-gray-300'}`}>
          {children}
        </span>
      )}
    </NavLink>
  )
}