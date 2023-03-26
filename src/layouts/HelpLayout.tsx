import { NavLink, Outlet } from 'react-router-dom'

function HelpLayout() {
  return (
    <div className='help-layout'>
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas
        debitis quibusdam deserunt repellat hic molestias ipsum commodi aut
        odit!
      </p>

      <nav>
        <NavLink to={'help/FAQ'}>FAQ</NavLink>
        <NavLink to={'help/ContactUs'}>Contact Us</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default HelpLayout
