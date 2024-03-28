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
      <div className="text-center bg-[#292929] text-sm text-white font-mono py-6 flex flex-col gap-1 ">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
          <p>THANKS FOR VISITING</p>
          <p>CHECKOUT OUR SOCIALS</p>
        </div>
      </div>
      <div className="bg-[#111111] text-white py-5 cursor-pointer">
        <div className="flex items-center justify-center gap-5">
          <button
            className="bg-[#292929] p-[6px] rounded-lg hover:drop-shadow-[0_1.2px_1.2px_rgba(0,78,255,15)]"
            title="Twitter"
          >
            <FaTwitter />
          </button>
          <button
            className="bg-[#292929] p-[6px] rounded-lg hover:drop-shadow-[0_1.2px_1.2px_rgba(225,6,0,15)] "
            title="Youtube"
          >
            <FaYoutube />
          </button>
          <button
            className="bg-[#292929] p-[6px] rounded-lg hover:drop-shadow-[0_1.2px_1.2px_rgba(225,92,204,15)]"
            title="Instagram"
          >
            <FiInstagram />
          </button>
          <button
            className="bg-[#292929] p-[6px] rounded-lg hover:drop-shadow-[0_1.2px_1.2px_rgba(225,165,0,15)]"
            title="Linkedin"
          >
            <FaLinkedin />
          </button>
          <button
            className="bg-[#292929] p-[6px] rounded-lg hover:drop-shadow-[0_1.2px_1.2px_rgba(170,219,30,15)]"
            title="Discord"
          >
            <FaDiscord />
          </button>
        </div>
      </div>
      <div className="py-6 bg-[#111111] cursor-pointer flex items-center text-4xl justify-center gap-5">
        <button className="text-gray-400 hover:text-white" title="Riot Games">
          <SiRiotgames />
        </button>
        <button className="text-gray-400 hover:text-white" title="Valorant">
          <SiValorant />
        </button>
      </div>
      <div></div>
    </>
  );
};
export default footer;
