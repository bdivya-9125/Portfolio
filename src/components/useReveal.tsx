import { useEffect, useRef, type ReactNode } from 'react'
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el); return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}
export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20">
      <Reveal><h2 className="mb-10 font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2></Reveal>
      {children}
    </section>
  )
}
