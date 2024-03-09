import { RouterProvider } from "react-router-dom";
import router from "./routes/index";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
