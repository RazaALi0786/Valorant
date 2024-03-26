const Hero = () => {
  const toggleReadMore = () => {
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");

    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btnText.innerHTML = "Read less...";
    } else {
      moreText.style.display = "none";
      btnText.innerHTML = "Read more...";
    }
  };

  return (
    <>
      <div className="mt-20 bg-[#111111] text-white text-2xl py-5 text-center font-sans font-bold ">
        <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-400">
          WHAT IS <span className="font-valorant">VALORANT</span>
        </h1>
        <div className="px-5 mx-3 mt-3 text-[#dde4dd] text-start">
          <h2 className="mb-2 text-transparent bg-clip-text bg-gradient-to-r from-lime-200 to-green-400">
            Introduction
          </h2>
          <p className="text-base">
            Valorant is a team-based first-person tactical hero shooter set in
            the near future. Players take on the roles of Agents, each with
            unique abilities based on various countries and cultures around the
            world.
            <span id="more">
              You have 13 rounds to attack and defend your side using sharp
              gunplay and tactical abilities. And, with one life per-round, you
              will need to think faster than your opponent if you want to
              survive. Take on foes across Competitive and Unranked modes as
              well as Deathmatch and Spike Rush. The game combines precise
              gunplay with strategic agent abilities, creating an engaging and
              competitive experience.
            </span>
          </p>
          <button
            id="myBtn"
            className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-400 hover:underline"
            onClick={toggleReadMore}
          >
            Read More...
          </button>
        </div>
      </div>
    </>
  );
};
export default Hero;
