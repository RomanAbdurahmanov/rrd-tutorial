import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'
import FAQ from './pages/Help/FAQ'
import ContactUs from './pages/Help/ContactUs'

//layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'} element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='help/FAQ' element={<FAQ />} />
        <Route path='help/ContactUs' element={<ContactUs />} />
      </Route>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
