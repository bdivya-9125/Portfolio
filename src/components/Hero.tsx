import type { AnchorHTMLAttributes } from 'react'
import { profile } from '../data'
const Btn = ({ href, children, primary = false, ...p }: { href: string; children: string; primary?: boolean } & AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a href={href} {...p} className={`rounded-full px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 ${primary ? 'bg-accent text-ink hover:bg-white' : 'border border-edge text-white hover:border-accent'}`}>{children}</a>
)
export default function Hero() {
  return (
    <div id="top" className="relative overflow-hidden border-b border-edge">
      <svg className="absolute inset-0 h-full w-full opacity-50" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="#1c2544" strokeWidth="2"><path d="M0 110H300L360 170H720L780 110H1200"/><path d="M0 320H240L300 380H600L660 440H1200"/><path d="M0 520H420L480 470H920L980 520H1200"/></g>
        <g fill="none" stroke="#5b8cff" strokeWidth="3" strokeLinecap="round"><path className="pulse" d="M0 110H300L360 170H720L780 110H1200"/><path className="pulse" style={{ animationDelay: '-2s' }} d="M0 320H240L300 380H600L660 440H1200"/><path className="pulse" style={{ animationDelay: '-3.5s' }} d="M0 520H420L480 470H920L980 520H1200"/></g>
      </svg>
      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <h1 className="font-display text-5xl font-bold text-white sm:text-7xl">Hi, I’m <span className="bg-gradient-to-r from-accent to-violet bg-clip-text text-transparent">Bojja Divya.</span></h1>
        <p className="mt-5 max-w-3xl text-lg font-medium text-slate-100">Electronics &amp; Communication Engineering Student | Embedded Systems | Mechatronics | Hardware &amp; Software Development</p>
        <p className="mt-5 max-w-2xl text-mute">I’m an engineering student passionate about building intelligent systems by combining electronics, embedded programming, hardware integration, and software technologies. I enjoy transforming technical concepts into practical, working solutions.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Btn href="#projects" primary>View My Projects</Btn>
          <Btn href={profile.resume} download>Download Resume</Btn>
          <Btn href="#contact">Contact Me</Btn>
        </div>
        <div className="mt-8 flex gap-4 text-mute">
          <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.6V9h3.5v11.5z"/></svg></a>
          <a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg></a>
        </div>
      </div>
    </div>
  )
}
