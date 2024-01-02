import Registration from "./pages/registration";
import Login from "./pages/login";
// Correct import statements for Remix
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import VerifyOtp from "./pages/verifyOtp";


function App() {
  // Initialze the client

  return (
    <div className=" flex flex-col py-5 px-24">
        <RouterProvider router={approuter} />
    </div>
  );
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
  {
    path:"/verify_otp",
    element:<VerifyOtp />
  }
]);

export default App;
