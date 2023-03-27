import { Link, useLoaderData } from 'react-router-dom'
import { CareerDataType } from '../../Interfaces'

const Careers = () => {
  const careers = useLoaderData() as CareerDataType[]

  return (
    <div className='careers'>
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

export const careersLoader = async () => {
  const res = await fetch('http://localhost:4000/careers')

  if (!res.ok) {
    throw Error('Cannot fetch data.')
  }
  return res.json()
}

export default Careers
