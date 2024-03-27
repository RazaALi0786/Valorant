import { useState } from "react";

const Hero = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="sm:mt-20 mt-[5.25rem] bg-[rgb(17,17,17)] text-white text-2xl py-5 text-center font-sans font-bold ">
        <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
          WHAT IS <span className="font-valorant">VALORANT</span>
        </h1>
        <div className="px-5 mx-3 mt-3 text-[#dde4dd] text-start">
          <h2 className="mb-2 text-transparent bg-clip-text bg-gradient-to-l from-red-400 to-red-600 ">
            Introduction
          </h2>
          <p className="text-base ">
            Valorant is a team-based first-person tactical hero shooter set in
            the near future. Players take on the roles of Agents, each with
            unique abilities based on various countries and cultures around the
            world.
            <br />
            {showMore && (
              <span id="more">
                You have 13 rounds to attack and defend your side using sharp
                gunplay and tactical abilities. And, with one life per-round,
                you will need to think faster than your opponent if you want to
                survive. Take on foes across Competitive and Unranked modes as
                well as Deathmatch and Spike Rush. The game combines precise
                gunplay with strategic agent abilities, creating an engaging and
                competitive experience.
              </span>
            )}
          </p>
          <button
            onClick={toggleContent}
            className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 hover:underline focus:outline-none"
          >
            {showMore ? "Read less..." : "Read more..."}
          </button>
          <div className="flex flex-col gap-2 mt-5 sm:flex-wrap">
            <img
              className="sm:w-1/2"
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExczVsY3M2cGZjb2N1YXhxdDUyamEya21zNncwNGt0ZDN6MTRxbDdwNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IvOFcGZeDA76P6XryO/giphy.gif"
              alt="valogif1"
            />
            <img
              className="w-full sm:w-1/2"
              src="https://media3.giphy.com/media/uLsim1UsMiGKQ28hri/200.webp?cid=ecf05e47jfigmk66pu2xj9n0i3fctx5o4obatfmnnvt6rlli&ep=v1_gifs_search&rid=200.webp&ct=g"
              alt="valogif2"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
