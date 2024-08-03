import Marquee from "./Slider";
import tabrez from "/src/assets/images/Tabrezz.jpeg";
import Valobg from "/src/assets/images/Valobg.jpeg";
import raza from "/src/assets/images/file.jpg";
import Faisal from "/src/assets/images/faisal.jpg";

const About = () => {
  return (
    <div className="bg-black p-8 text-white">
      <h1 className="text-6xl font-valorant text-center mb-8 text-red-600 pb-9">
        About Us
      </h1>
      <div className="flex justify-between flex-row pb-9">
        <div>
          <h1 className="font-valorant text-4xl text-red-600">
            About The Project-
          </h1>
          <p className="font-mono text-2xl ">
            Welcome to ValPal, your ultimate companion for mastering the game of
            Valorant! Our project is dedicated to providing users with a
            seamless and enhanced gaming experience by leveraging the powerful
            Valorant API. Whether you’re a seasoned player or just starting out,
            ValPal is here to help you navigate the game with ease and
            efficiency.
          </p>
          <p className="font-mono text-2xl ">
            At ValPal, our vision is to create a supportive and knowledgeable
            community of Valorant players. We believe that by providing valuable
            tools and insights, we can help players of all skill levels improve
            their gameplay and enjoy the game to its fullest.
          </p>
          <p className="font-mono text-2xl">
            We invite you to join the ValPal community and take your Valorant
            experience to the next level. Whether you’re looking to improve your
            skills, connect with other players, or stay updated with the latest
            game changes, ValPal has something for everyone.
          </p>
        </div>
        <div>
          <img src={Valobg} className="w-auto h-auto" alt="" />
        </div>
      </div>
      <div className="pb-9">
        <h1 className="font-valorant text-4xl text-red-600">What is ValPal?</h1>
        <p className="font-mono text-2xl ">
          ValPal is a comprehensive platform designed to assist Valorant players
          in various aspects of the game. Our goal is to make your gaming
          experience smoother, more enjoyable, and more productive. By utilizing
          the Valorant API, we offer a range of features that cater to the needs
          of every player, from beginners to experts.
        </p>
      </div>
      <div className="pb-9">
        <h1 className="font-valorant text-4xl text-red-600">Key Features</h1>
        <ol type="1">
          <li className="font-mono text-2xl">
            1.<span className="font-bold text-red-600">Player Statistics:</span>{" "}
            Get detailed insights into your gameplay with our player statistics
            feature. Track your performance, analyze your strengths and
            weaknesses, and see how you stack up against other players.
          </li>
          <li className="font-mono text-2xl">
            2.<span className="font-bold text-red-600">Match History:</span>{" "}
            Access your complete match history with ease. Review past games,
            analyze your performance, and learn from your mistakes to improve
            your skills.
          </li>
          <li className="font-mono text-2xl">
            3.<span className="font-bold text-red-600">Agent Information:</span>{" "}
            Learn everything you need to know about Valorant’s agents. From
            abilities to strategies, our platform provides comprehensive
            information to help you choose the right agent for your playstyle.
          </li>
          <li className="font-mono text-2xl">
            4.<span className="font-bold text-red-600">Map Guides:</span> Master
            the maps with our detailed guides. Learn the best spots, strategies,
            and tips for each map to gain a competitive edge.
          </li>
          <li className="font-mono text-2xl">
            5.<span className="font-bold text-red-600">Weapon Statistics:</span>{" "}
            Understand the strengths and weaknesses of each weapon. Our weapon
            statistics feature provides detailed information to help you make
            informed decisions during gameplay.
          </li>
          <li className="font-mono text-2xl">
            6.
            <span className="font-bold text-red-600">Community Features:</span>
            Connect with other players, share tips and strategies, and
            participate in community events. ValPal is not just a tool; it’s a
            community of passionate Valorant players.
          </li>
        </ol>
      </div>
      <div>
        <h1 className="font-valorant text-4xl text-red-600">
          Why Choose ValPal?
        </h1>
        <ul>
          <li className="font-mono text-2xl">
            1.
            <span className="font-bold text-red-600">
              User-Friendly Interface:
            </span>{" "}
            Our platform is designed with the user in mind. The intuitive
            interface makes it easy to navigate and find the information you
            need quickly.
          </li>
          <li className="font-mono text-2xl">
            2.<span className="font-bold text-red-600">Real-Time Updates:</span>
            Stay up-to-date with the latest changes in the game. ValPal provides
            real-time updates to ensure you always have the most current
            information.
          </li>
          <li className="font-mono text-2xl">
            3.
            <span className="font-bold text-red-600">Comprehensive Data:</span>
            We provide detailed and accurate data to help you make informed
            decisions. From player stats to map guides, our platform covers all
            aspects of the game.
          </li>
          <li className="font-mono text-2xl">
            4.<span className="text-red-600 font-bold">Community Support:</span>{" "}
            Join a community of like-minded players. Share your experiences,
            learn from others, and grow together as a team.
          </li>
        </ul>
      </div>
      <div>
        <h1 className="font-valorant text-4xl ml-5 text-red-600 text-center pt-9 pb-9">
          Meet The Team-
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center mb-8">
        <div className="bg-[#202124] p-4 rounded-lg mx-4 mb-4 md:mb-0 text-white border border-white">
          <img
            src={raza}
            alt="raza"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-bold text-center">Syed Raza Ali</h2>
          <p className="text-center">Front-End Developer</p>
          <p className="text-center">razaali@gmail.com</p>
        </div>
        <div className="bg-[#202124] p-4 rounded-lg mx-4 mb-4 md:mb-0 text-white border border-white">
          <img
            src={tabrez}
            alt="tabrez"
            className="w-32 h-32 rounded-full mx-auto mb-4 "
          />
          <h2 className="text-xl font-bold text-center">Tabrez</h2>
          <p className="text-center">Front-End Developer</p>
          <p className="text-center">tabrez@gmail.com</p>
        </div>
        <div className="bg-[#202124] p-4 rounded-lg mx-4 text-white border border-white">
          <img
            src={Faisal}
            alt="faisal"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-bold text-center">Faisal Khan</h2>
          <p className="text-center">Front-End Developer</p>
          <p className="text-center">aj9050033@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default About;
