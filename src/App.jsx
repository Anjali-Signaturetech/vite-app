import { useState } from "react";
import Registration from "./pages/registration";
import Login from "./pages/login";
// Correct import statements for Remix
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  // Initialze the client
  const queryClient = new QueryClient();

  return (
    <div className=" flex flex-col items-center justify-center h-screen">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={approuter} />
      </QueryClientProvider>
      {/* <Registration /> */}
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
]);

export default App;
