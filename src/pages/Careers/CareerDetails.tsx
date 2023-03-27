import { useLoaderData, useParams } from 'react-router-dom'
import { CareerDataType } from '../../Interfaces'

const CareerDetails = () => {
  const { id } = useParams()
  const career = useLoaderData() as CareerDataType

  return (
    <div className='careers-details'>
      <h2>Career details for {career.title}</h2>
      <p>Starting salary: {career.salary}$</p>
      <p>Location: {career.location}</p>
      <div className='details'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          repellat quasi amet ullam beatae tempora animi. Autem, doloribus?
          Minima esse fugiat unde quibusdam eligendi non saepe, ipsam nostrum ut
          in!
        </p>
      </div>
    </div>
  )
}

export const careerDetailsLoader = async ({ params }: { params: any }) => {
  const { id } = params
  const res = await fetch('http://localhost:4000/careers/' + id)

  return res.json()
}

export default CareerDetails
