import { createBrowserRouter } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { CreateTodo } from '@/pages/CreateTodo'
import { DefaultLayout } from '@/layouts/Default'
import { Error } from '@/pages/Error'

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
        path: 'create-todo',
        element: <CreateTodo />
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  }
])
