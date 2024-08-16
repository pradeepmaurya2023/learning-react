import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import AboutUs from './components/About/AboutUs.jsx'
import ContactUs from './components/Contact/ContactUs.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        path :'',
        element : <Home />
      },
      {
        path : 'about',
        element : <AboutUs />
      },
      {
        path : 'contact',
        element : <ContactUs />,
      },
      {
        path : 'github',
        element : <Github />,
        loader : githubInfoLoader
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
