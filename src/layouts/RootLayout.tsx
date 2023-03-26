import { Link, NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className='root-layout'>
      <header>
        <nav>
          <h1>
            <Link to={'/'}>Jobarouter</Link>
          </h1>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/About'}>About</NavLink>
          <NavLink to={'/help'}>Help</NavLink>
          <NavLink to={'/careers'}>Careers</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
