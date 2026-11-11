import { useState } from 'react'
const links = ['About', 'Skills', 'Projects', 'Experience', 'Patents', 'Education', 'Contact']
export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main">
        <a href="#top" className="font-display text-lg font-bold text-white">Divya<span className="text-accent">.</span></a>
        <button className="rounded border border-edge px-3 py-1 text-sm md:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>Menu</button>
        <ul className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-1 border-b border-edge bg-ink p-4 md:static md:flex md:flex-row md:gap-6 md:border-0 md:bg-transparent md:p-0`}>
          {links.map(l => <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-1 text-sm text-mute transition hover:text-white">{l}</a></li>)}
        </ul>
      </nav>
    </header>
  )
}
