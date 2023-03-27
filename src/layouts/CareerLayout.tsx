import { Outlet } from 'react-router-dom'

const CareerLayout = () => {
  return (
    <div className='career-layout'>
      <h2>Careers</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default CareerLayout
