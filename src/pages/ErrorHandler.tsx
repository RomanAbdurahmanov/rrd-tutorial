import { Link, useRouteError } from 'react-router-dom'

export default function ErrorHandler() {
  const error = useRouteError() as Error

  if (error) {
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
  return (
    <div className='not-found'>
      <h2>Page is not found.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        inventore temporibus ab at minima dolorum non sapiente labore eveniet
        adipisci. Dignissimos accusantium maxime nesciunt fuga obcaecati unde
        molestias debitis sequi.
      </p>
      <p>
        Go to the <Link to={'/'}>Homepage</Link>
      </p>
    </div>
  )
}
