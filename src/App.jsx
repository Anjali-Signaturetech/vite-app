import { useState } from 'react'
import Registration from './pages/registration'
import Login from './pages/login'
// Correct import statements for Remix
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' flex flex-col items-center justify-center h-screen'>
     
     <RouterProvider router={approuter} />
    </div>
  )
}
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    // errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <Registration />,
    // errorElement: <Error />,
  },

 
]);


export default App
