import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return <div className="site-shell"><Navbar /><main><Hero /><Journey /><Experience /><Projects /><Contact /></main></div>
}

export default App
