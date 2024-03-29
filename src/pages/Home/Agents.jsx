import { useState } from "react";
import { Link } from "react-router-dom";

const Agents = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className=" text-[#ece8e1] text-2xl py-5 text-center font-valorant bg-[rgb(17,17,17)] font-bold">
        <h1 className="font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-gradient-to-r from-[#ff4655] to-red-700 py-2">
          AGENTS
        </h1>
        <div className="px-3 mx-3  mt-3 font-mono text-base text-start drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <h3 className="text-lg font-extrabold text-transparent md:text-center md:text-3xl text-balance bg-clip-text bg-gradient-to-l from-white to-gray-200">
            CREATIVITY IS YOUR{" "}
            <span className="ml-24 text-xl text-transparent md:ml-0 md:text-3xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 decoration-white/40 hover:underline">
              GREATEST WEAPON!
            </span>
          </h3>
          <p className="mt-3 font-sans text-base font-normal md:text-2xl">
            More than guns and bullets, you’ll choose an Agent armed with
            adaptive, swift, and lethal abilities that create opportunities to
            let your gunplay shine. No two Agents play alike, just as no two
            highlight reels will look the same.
            <br />
          </p>
          {showMore && (
            <ol className="mt-3 ml-4 font-sans text-base font-normal list-disc md:text-2xl">
              <li>
                Valorant features a diverse cast of characters known as Agents.
              </li>
              <li>
                Each Agent has a unique set of abilities that can be used
                strategically during matches.
              </li>
              <li>
                Explore the abilities of different Agents to find your playstyle
                and contribute to your teams success.
              </li>
            </ol>
          )}

          <button
            onClick={toggleContent}
            className="text-transparent md:text-2xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 hover:underline focus:outline-none"
          >
            {showMore ? "Read Less..." : "Read More..."}
          </button>
        </div>

        <Link to={"/agents"} className="mt-3 sm:mt-6">
          <button className="font-mono font-bold transform -translate-x-1/2 top-52 bg-[#ff4655] px-1 text-base cursor-pointer aboslute left-1/2 hover:bg-[#191717] border-b-4 border-red-800 hover:border-yellow-400 rounded text-white ml-32 md:px-4 md:py-3 md:text-2xl">
            Explore Agents
          </button>
        </Link>
      </div>
    </>
  );
};

export default Agents;
