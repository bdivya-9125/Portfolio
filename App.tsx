import Nav from './components/Nav'
import Hero from './components/Hero'
import Contact from './components/Contact'
import { About, Skills, Projects, Experience, Patents, Education } from './components/Sections'
export default function App() {
  return (<><Nav /><main><Hero /><About /><Skills /><Projects /><Experience /><Patents /><Education /><Contact /></main>
    <footer className="border-t border-edge py-8 text-center text-sm text-mute">© 2026 Bojja Divya</footer></>)
}
