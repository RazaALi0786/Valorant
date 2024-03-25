import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { SiValorant } from "react-icons/si";
import { SiRiotgames } from "react-icons/si";

const footer = () => {
  return (
    <>
      <div className="text-center bg-[#292929] text-sm text-white font-mono py-6">
        <p>THANKS FOR VISITING</p>
      </div>
      <div className="bg-[#111111] text-white py-5 cursor-pointer">
        <div className="flex items-center justify-center gap-5">
          <button className="bg-[#292929] p-[6px] rounded-lg">
            <FaTwitter />
          </button>
          <button className="bg-[#292929] p-[6px] rounded-lg">
            <FaYoutube />
          </button>
          <button className="bg-[#292929] p-[6px] rounded-lg">
            <FiInstagram />
          </button>
          <button className="bg-[#292929] p-[6px] rounded-lg">
            <FaLinkedin />
          </button>
          <button className="bg-[#292929] p-[6px] rounded-lg">
            <FaDiscord />
          </button>
        </div>
      </div>
      <div className="py-6 bg-[#111111] cursor-pointer flex items-center text-4xl justify-center gap-5">
        <button className="text-gray-400 hover:text-white">
          <SiRiotgames />
        </button>
        <button className="text-gray-400 hover:text-white">
          <SiValorant />
        </button>
      </div>
      <div></div>
    </>
  );
};
export default footer;
