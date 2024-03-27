import { RouterProvider } from "react-router-dom";
import router from "@/routes/index";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
const App = () => {
  return (
    <>
      <Nav />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
