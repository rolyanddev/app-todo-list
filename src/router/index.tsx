import { createBrowserRouter } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { DefaultLayout } from '@/layouts/default'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
])
