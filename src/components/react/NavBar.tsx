import React from 'react'
import { AiFillBug } from 'react-icons/ai'
import type { APIContext } from 'astro'
import clsx from 'clsx'

const NavBar = ({ astroAPI }: { astroAPI: APIContext }) => {
  const links = [
    {
      label: 'Dashboard',
      href: '/'
    },
    {
      label: 'Issues',
      href: '/issues'
    }
  ]

  const { url } = astroAPI

  return (
      <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
        <a href="/public"><AiFillBug/></a>
        <ul className="flex space-x-6">
          {links.map((link) =>
            <a key={link.href} href={link.href}
               className={clsx(link.href === url.pathname ? 'text-red-900' : 'text-zinc-500', 'hover:text-zinc-800' +
                 ' transition-colors')}>{link.label}
            </a>)}
        </ul>
      </nav>
  )
}

export default NavBar
