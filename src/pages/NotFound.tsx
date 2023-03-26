import { Link } from 'react-router-dom'

const NotFound = () => {
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

export default NotFound
