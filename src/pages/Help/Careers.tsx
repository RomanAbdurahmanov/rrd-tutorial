import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export interface CareerDataType {
  id: number
  title: string
  salary: number
  location: string
}

const Careers = () => {
  const careers = useLoaderData() as CareerDataType[]

  return (
    <div className='careers'>
      <h2>Careers</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      {careers.map((career) => (
        <Link to='/' key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

export const careersLoader = async () => {
  const res = await fetch('http://localhost:4000/careers')

  return res.json()
}

export default Careers
