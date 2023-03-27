import { Link, useRouteError } from 'react-router-dom'

export default function ErrorHandler() {
  const error = useRouteError() as Error

  return (
    <div className='error'>
      <h2>ERROR</h2>
      <p>{error.message}</p>
      <p>
        Go to the <Link to={'/'}>Homepage</Link>
      </p>
    </div>
  )
}
