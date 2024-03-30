import Button from "@/components/Button";
import BG_IMG from "@/assets/images/valorant.png";
import Hero from "@/pages/Home/Hero";
// import Agents from "@/pages/Home/Agents";
import Maps from "@/pages/Home/Maps";
import Guns from "@/pages/Home/Guns";
import { lazy, Suspense } from "react";
const Agents = lazy(() => import("@/pages/Home/Agents"));
const Home = () => {
  return (
    <>
      <div
        className="h-24 w-full text-center  text-white bg-no-repeat bg-cover font-valorant relaitve md:h-full md:w-[100vw]
      lg:h-[100vh] lg:w-[100vw]"
      >
        <img
          src={BG_IMG}
          alt="bg-img"
          className="object-cover w-full h-[11.25rem] md:h-full"
        />
        <Button btnName="Welcome to ValPal" />
      </div>
      <Hero />
      <Suspense>
        <Agents />
      </Suspense>
      <Maps />
      <Guns />
    </>
  );
};

export default Home;
