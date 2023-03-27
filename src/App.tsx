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
import Careers, { careersLoader } from './pages/Careers/Careers'
import NotFound from './pages/NotFound'
import CareerDetails, {
  careerDetailsLoader,
} from './pages/Careers/CareerDetails'

//layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import CareerLayout from './layouts/CareerLayout'
import ErrorHandler from './pages/ErrorHandler'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'} element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='FAQ' element={<FAQ />} />
        <Route path='ContactUs' element={<ContactUs />} />
      </Route>
      <Route
        path='careers'
        element={<CareerLayout />}
        errorElement={<ErrorHandler />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=':id'
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path={'*'} element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
