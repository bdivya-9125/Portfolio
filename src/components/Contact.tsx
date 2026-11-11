import { useState, type FormEvent } from 'react'
import { Section } from './useReveal'
import { profile } from '../data'
const field = 'w-full rounded-lg border border-edge bg-panel px-4 py-3 text-sm text-white outline-none focus:border-accent'
export default function Contact() {
  const [done, setDone] = useState(false)
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = `${f.get('message')}\n\nFrom: ${f.get('name')} (${f.get('email')})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(String(f.get('subject')))}&body=${encodeURIComponent(body)}`
    setDone(true)
  }
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-3 text-mute">
          <p>Open to hardware, embedded and mechatronics internship and entry-level opportunities.</p>
          <p>Email: <a className="text-accent hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p>LinkedIn: <a className="text-accent hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">bojja-divya</a></p>
          <p>GitHub: <a className="text-accent hover:underline" href={profile.github} target="_blank" rel="noreferrer">bdivya-9125/Portfolio</a></p>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <input className={field} name="name" placeholder="Name" required aria-label="Name" />
          <input className={field} name="email" type="email" placeholder="Email" required aria-label="Email" />
          <input className={field} name="subject" placeholder="Subject" required aria-label="Subject" />
          <textarea className={field} name="message" rows={5} placeholder="Message" required aria-label="Message" />
          <button className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink transition hover:bg-white">Open in email app</button>
          <p className="text-xs text-mute">{done ? 'Your email app should open with the message filled in. Nothing is sent until you send it there.' : 'This form has no server. It opens your email app with the message ready to send.'}</p>
        </form>
      </div>
    </Section>
  )
}
