import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <header>
          <nav>
            <h1>Jobarouter</h1>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/About'}>About</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
