import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './components/ErrorPage'
import PostDetail from './pages/PostDetail'

function App() {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/posts/:id',
      element: <PostDetail />,
    },
  ])
  return (
    <RouterProvider router={router} fallbackElement={<span>Loading...</span>} />
  )
}

export default App
