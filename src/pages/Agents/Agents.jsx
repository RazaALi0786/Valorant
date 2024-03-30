import { useEffect, useState } from "react";
import AgentsCard from "../../components/AgentsCard";

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [dataItem,setDataItem]=useState(agents);


  const filterItem=(categItem)=>{
      const updatedItem=agents.filter((currEle)=>{
            return currEle.role?.displayName===categItem;
      });
      setDataItem(updatedItem);
    
  }

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
      setDataItem(playableAgent)
    } catch (error) {
      // use react hot toast or any other notification library to show error
      console.log("There was a problem fetching the data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(dataItem)

  if (dataItem.length === 0) {
    // Make a loading screen and use it here.
    return <div>
        
    </div>;
  }

  return (
    <>
    <div className="pt-2 flex justify-around bg-black text-white">
      <button onClick={()=>filterItem('Initiator')} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Initiator</button>
      <button onClick={()=>filterItem('Sentinel')} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Sentinel</button>
      <button onClick={()=>filterItem('Duelist')} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Duelist</button>
      <button onClick={()=>filterItem('Controller')} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Controller</button>
    </div>
      {dataItem.map((agent) => {
        return (
          <AgentsCard agent={agent} key={agent.uuid} />

        );
      })}
    </>
  );
};

export default Agents;
