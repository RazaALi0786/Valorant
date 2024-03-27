

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
      <div className="sm:mt-20 mt-[11rem] bg-[rgb(17,17,17)] text-white text-2xl py-5 text-center font-sans font-bold ">
        <h1 className=" font-bold text-transparent dark:text-white bg-clip-text bg-gradient-to-r from-red-500 to-red-800 ">
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
            className="text-sm text-transparent bg-clip-text bg-gradient-to-l from-[#ff4655] to-red-700 decoration-yellow-500/50 hover:underline"
            onClick={toggleReadMore}
          >
            Read Less...
          </button>
          <div className="sm:flex sm:flex-wrap">
            <img className="sm:w-1/2" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExczVsY3M2cGZjb2N1YXhxdDUyamEya21zNncwNGt0ZDN6MTRxbDdwNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IvOFcGZeDA76P6XryO/giphy.gif" alt="valogif1" />
            <img className="sm:w-1/2 w-full" src="https://media3.giphy.com/media/uLsim1UsMiGKQ28hri/200.webp?cid=ecf05e47jfigmk66pu2xj9n0i3fctx5o4obatfmnnvt6rlli&ep=v1_gifs_search&rid=200.webp&ct=g" alt="valogif2" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
