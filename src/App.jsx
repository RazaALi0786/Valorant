import { RouterProvider } from "react-router-dom";
import router from "@/routes/index";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "./pages/Home/Hero";
import Agents from "./pages/Home/Agents";
const App = () => {
  return (
    <>
      <Nav />
      <RouterProvider router={router} />
      <Hero />
      <Agents />
      <Footer />
    </>
  );
};

export default App;
