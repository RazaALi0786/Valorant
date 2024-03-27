const Agents = () => {
  const toggleContent = () => {
    const moreText = document.getElementById("moreText");
    moreText.classList.toggle("hidden");
  };

  return (
    <>
      <div className=" text-[#ece8e1] text-2xl py-5 text-center font-valorant bg-[rgb(17,17,17)] font-bold">
        <h1 className="font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-gradient-to-r from-[#ff4655] to-red-700 py-2">
          AGENTS
        </h1>
        <div className="px-3 mx-3 mt-3 font-mono text-base text-start drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <h3 className="text-lg font-extrabold text-transparent text-balance bg-clip-text bg-gradient-to-l from-white to-gray-200">
            CREATIVITY IS YOUR{" "}
            <span className="ml-24 text-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 decoration-white/40 hover:underline">
              GREATEST WEAPON!
            </span>
          </h3>
          <p className="mt-3 font-sans text-base font-normal ">
            More than guns and bullets, you’ll choose an Agent armed with
            adaptive, swift, and lethal abilities that create opportunities to
            let your gunplay shine. No two Agents play alike, just as no two
            highlight reels will look the same.
            <br />
            <ol id="moreText" className="ml-4 list-disc ">
              <li>
                {" "}
                Valorant features a diverse cast of characters known as Agents.
              </li>
              <li>
                {" "}
                Each Agent has a unique set of abilities that can be used
                strategically during matches
              </li>
              <li>
                {" "}
                Explore the abilities of different Agents to find your playstyle
                and contribute to your team success.
              </li>
            </ol>
          </p>
          <button
            onClick={toggleContent}
            className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 hover:underline focus:outline-none"
          >
            Read less...
          </button>
        </div>
      </div>
    </>
  );
};

export default Agents;
