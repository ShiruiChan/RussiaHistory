import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Home from './pages/Home.jsx'
import Scientists from './pages/Scientists.jsx'
import Cities from './pages/Cities.jsx'
import useReveal from './lib/useReveal.js'

export default function App() {
  useReveal()
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scientists" element={<Scientists />} />
          <Route path="/cities" element={<Cities />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
