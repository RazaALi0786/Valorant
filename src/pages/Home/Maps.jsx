import { useState } from "react";

const Maps = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className=" text-[#ece8e1] text-2xl py-5 text-center font-valorant bg-[rgb(17,17,17)] font-bold">
        <h1 className="font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-gradient-to-r from-[#ff4655] to-red-700 py-2">
          YOUR MAPS
        </h1>
        <div className="px-3 mx-3 mt-3 font-mono text-base text-start drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <h3 className="text-xl font-extrabold text-center text-transparent text-balance bg-clip-text bg-gradient-to-l from-white to-gray-200">
            FIGHT AROUND{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500 decoration-white/40 hover:underline">
              THE WORLD
            </span>
          </h3>
          <p className="mt-3 font-sans text-base font-normal">
            Each map is a playground to showcase your creative thinking.
            Purpose-built for team strategies, spectacular plays, and clutch
            moments. Make the play others will imitate for years to come.
            <br />
            {showMore && (
              <ol className="ml-4 list-disc">
                <li>
                  {" "}
                  Valorant offers several maps, each with distinct layouts and
                  strategic elements.
                </li>
                <li>
                  {" "}
                  Learn the callouts, common angles, and map control strategies
                  for optimal performance.
                </li>
              </ol>
            )}
          </p>
          <button
            onClick={toggleContent}
            className="text-transparent bg-clip-text bg-gradient-to-l from-lime-400 to-green-500 hover:underline focus:outline-none"
          >
            {showMore ? "Read less..." : "Read more..."}
          </button>
        </div>
        <div className="mt-3 sm:mt-6">
          <button className="font-mono font-bold transform -translate-x-1/2 top-52 bg-[#ff4655] px-1 text-base cursor-pointer aboslute left-1/2 hover:bg-[#111111] border-b-4 border-red-800 hover:border-gray-800 rounded text-white ml-32">
            Explore MAPS
          </button>
        </div>
      </div>
    </>
  );
};

export default Maps;
