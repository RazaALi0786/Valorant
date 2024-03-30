import { useEffect, useState } from "react";

const Agents = () => {

  const [agents, setAgents] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://valorant-api.com/v1/agents");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAgents(data?.data);
    } catch (error) {
      // use react hot toast or any other notification library to show error
      console.log('There was a problem fetching the data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(agents);

  if (agents.length === 0) {
    // Make a loading screen and use it here.
    return <h1>Loading...</h1>
  }

  return (
    <>
      {
        agents.map((agent) => {
          return (
            <div key={agent?.uuid}>
              <a
                href="#"
                className="flex flex-col items-center bg-[#111111] border border-gray-700  shadow md:flex-row md:w-full hover:bg-black"
              >
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-s-lg"
                  src={agent?.fullPortraitV2}
                  alt="Gekko Image"
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h3 className="flex mb-2 text-2xl font-bold tracking-tight text-transparent font-valorant bg-clip-text bg-gradient-to-r from-lime-400 to-green-700">
                    <img
                      className="w-10 h-10 mr-4 -mt-2 border rounded-full border-lime-500"
                      src={agent?.displayIcon}
                      alt=""
                    />
                    {agent?.displayName}
                  </h3>
                  <h5 className="flex mb-2 text-lg font-bold tracking-tight text-transparent font-valorant bg-clip-text bg-gradient-to-r from-lime-400 to-green-700">
                    {agent?.role?.displayName}
                  </h5>
                  <p className="mb-3 font-normal text-[#ece8e1]">{agent?.description}</p>
                </div>
              </a>
            </div>
          );
        })
      }
    </>
  );
};

export default Agents;
