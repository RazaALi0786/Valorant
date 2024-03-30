import { useEffect, useState } from "react";
import AgentsCard from "../../components/AgentsCard";

const Agents = () => {
  const [agents, setAgents] = useState([]);

  const filterItem = (categItem) => {
    const updatedItem = agents.filter((currEle) => {
      return currEle.role?.displayName === categItem;
    });
    setAgents(updatedItem);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("https://valorant-api.com/v1/agents");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const playableAgent = data?.data.filter(
        (agent) => agent.isPlayableCharacter
      );
      setAgents(playableAgent);
    } catch (error) {
      // use react hot toast or any other notification library to show error
      console.log("There was a problem fetching the data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(agents);

  if (agents.length === 0) {
    // Make a loading screen and use it here.
    return <div></div>;
  }

  return (
    <>
      <div className="flex flex-col justify-center pt-2 text-white bg-black md:flex-row">
        <button
          onClick={() => filterItem("Initiator")}
          className="font-mono font-bold bg-[#ff4655] px-2 text-base hover:bg-[#191717] border-b-4 border-red-800 hover:border-yellow-400 rounded py-2.5 mb-2 text-white md:px-4 md:py-3 md:text-2xl"
        >
          Initiator
        </button>

        <button
          onClick={() => filterItem("Sentinel")}
          className="font-mono font-bold bg-[#ff4655] px-2 text-base hover:bg-[#191717] border-b-4 border-red-800 hover:border-lime-400 rounded py-2.5 mb-2 text-white md:px-4 md:py-3 md:text-2xl"
        >
          Sentinel
        </button>
        <button
          onClick={() => filterItem("Duelist")}
          className="font-mono font-bold bg-[#ff4655] px-2 text-base hover:bg-[#191717] border-b-4 border-red-800 hover:border-blue-400 rounded py-2.5 mb-2 text-white md:px-4 md:py-3 md:text-2xl"
        >
          Duelist
        </button>
        <button
          onClick={() => filterItem("Controller")}
          className="font-mono font-bold bg-[#ff4655] px-2 text-base hover:bg-[#191717] border-b-4 border-red-800 hover:border-purple-400 rounded py-2.5 mb-2 text-white md:px-4 md:py-3 md:text-2xl"
        >
          Controller
        </button>
      </div>

      {agents.map((agent) => {
        return <AgentsCard agent={agent} key={agent.uuid} />;
      })}
    </>
  );
};

export default Agents;
