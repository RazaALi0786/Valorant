import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
function App() {
  const router = createBrowserRouter([
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <>
      <Nav />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
