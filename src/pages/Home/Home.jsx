import Button from "@/components/Button";
import BG_IMG from "@/assets/images/valorant.png";
import Hero from "./Hero";
import Agents from "./Agents";
import Maps from "./Maps";
import Guns from "./Guns";
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
      <Agents />
      <Maps />
      <Guns />
    </>
  );
};

export default Home;
