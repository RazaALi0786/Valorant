import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const footer = () => {
  return (
    <>
      <div className="text-center bg-[#292929] text-sm text-white font-mono py-6">
        <p>THANKS FOR VISITING</p>
      </div>
      <div className="bg-[#111111] text-white py-5 flex justify-center items-center gap-5 ">
        <button className="bg-[#292929] p-1 rounded-md">
          <FaTwitter />
        </button>
        <button className="bg-[#292929] p-1 rounded-md">
          <FaYoutube />
        </button>
        <button className="bg-[#292929] p-1 rounded-md">
          <FiInstagram />
        </button>
        <button className="bg-[#292929] p-1 rounded-md">
          <FaLinkedin />
        </button>
        <button className="bg-[#292929] p-1 rounded-md">
          <FaDiscord />
        </button>
      </div>
    </>
  );
};
export default footer;
