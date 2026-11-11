import { Reveal, Section } from './useReveal'
import { interests, skills, projects, experience, patents, education } from '../data'
const card = 'rounded-2xl border border-edge bg-panel p-6 transition hover:-translate-y-1 hover:border-accent/60'
const Chip = ({ t }: { t: string }) => <span className="rounded-full border border-edge px-3 py-1 text-xs text-slate-200">{t}</span>
const List = ({ items }: { items: string[] }) => <ul className="list-disc space-y-1.5 pl-5 text-sm text-mute">{items.map(i => <li key={i}>{i}</li>)}</ul>

export const About = () => (
  <Section id="about" title="About Me">
    <div className="grid gap-8 md:grid-cols-2">
      <Reveal><p className="text-mute">I’m an engineering student interested in building systems that connect electronics, firmware and software. My work so far spans embedded prototypes, board-level validation and chip-level design.</p>
        <ul className="mt-5 space-y-2">{interests.map(i => <li key={i} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{i}</li>)}</ul></Reveal>
      <Reveal><div className={card}><p className="text-sm text-mute">Academic achievement</p><p className="mt-2 font-display text-2xl text-white">B.Tech – Electronics and Communication Engineering</p><p className="mt-2 text-mute">VIT Chennai | 2023–2027</p><p className="mt-4 font-display text-5xl font-bold text-accent">9.08<span className="text-xl text-mute"> / 10 CGPA</span></p></div></Reveal>
    </div>
  </Section>
)
export const Skills = () => (
  <Section id="skills" title="Technical Skills">
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Object.entries(skills).map(([cat, list]) => <Reveal key={cat}><div className={`${card} h-full`}><h3 className="mb-4 font-display text-lg text-white">{cat}</h3><div className="flex flex-wrap gap-2">{list.map(s => <Chip key={s} t={s} />)}</div></div></Reveal>)}
    </div>
  </Section>
)
export const Projects = () => (
  <Section id="projects" title="Featured Projects">
    <div className="grid gap-6 lg:grid-cols-3">
      {projects.map(p => <Reveal key={p.title} className="h-full"><article className={`${card} flex h-full flex-col`}>
        <div className="mb-4 flex h-28 items-center justify-center rounded-lg border border-dashed border-edge text-xs text-mute">Project image placeholder</div>
        <h3 className="font-display text-xl text-white">{p.title}</h3>
        <div className="my-4 flex flex-wrap gap-2">{p.tech.map(t => <Chip key={t} t={t} />)}</div>
        <List items={p.points} />
        <div className="mt-auto pt-5 text-sm">{p.link ? <a className="text-accent hover:underline" href={p.link} target="_blank" rel="noreferrer">View project</a> : <span className="text-mute">GitHub / demo link: coming soon</span>}</div>
      </article></Reveal>)}
    </div>
  </Section>
)
export const Experience = () => (
  <Section id="experience" title="Professional Experience">
    <Reveal><div className={card}><div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="font-display text-xl text-white">{experience.role} – {experience.org}</h3><span className="text-sm text-mute">{experience.dates}</span></div><div className="mt-4"><List items={experience.points} /></div></div></Reveal>
  </Section>
)
export const Patents = () => (
  <Section id="patents" title="Patents & Innovation">
    <div className="grid gap-6 md:grid-cols-2">
      {patents.map(p => <Reveal key={p.no}><div className={`${card} h-full border-violet/30`}><p className="text-sm text-violet">Indian Patent Office | {p.date}</p><h3 className="mt-2 font-display text-xl text-white">{p.title}</h3><p className="mt-1 text-sm text-mute">Application No. {p.no}</p><p className="mt-4 text-mute">{p.text}</p></div></Reveal>)}
    </div>
  </Section>
)
export const Education = () => (
  <Section id="education" title="Education">
    <div className="grid gap-5 md:grid-cols-3">
      {education.map(e => <Reveal key={e.school}><div className={`${card} h-full`}><h3 className="font-display text-lg text-white">{e.school}</h3><p className="mt-2 text-mute">{e.degree}</p><p className="mt-3 text-sm text-accent">{e.meta}</p></div></Reveal>)}
    </div>
  </Section>
)
