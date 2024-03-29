import { useEffect, useState } from "react";
import axios from "axios";

const Agents = () => {
  const [dataIcon, setDataIcon] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [description, setDescription] = useState("");

  const getData = () => {
    axios
      .get("https://valorant-api.com/v1/agents")
      .then((res) => {
        console.log(res.data.data[0].displayIcon);
        setDataIcon(res.data.data[0].displayIcon);
        setName(res.data.data[0].displayName);
        setPic(res.data.data[0].fullPortraitV2);
        setDescription(res.data.data[0].description);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <a
          href="#"
          className="flex flex-col items-center bg-[#111111] border border-gray-700  shadow md:flex-row md:w-full hover:bg-black"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-s-lg"
            src={pic}
            alt="Gekko Image"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h3 className="flex mb-2 text-2xl font-bold tracking-tight text-transparent font-valorant bg-clip-text bg-gradient-to-r from-lime-400 to-green-700">
              <img
                className="w-10 h-10 mr-4 -mt-2 border rounded-full border-lime-500"
                src={dataIcon}
                alt=""
              />
              {name}
            </h3>
            <h5 className="flex mb-2 text-lg font-bold tracking-tight text-transparent font-valorant bg-clip-text bg-gradient-to-r from-lime-400 to-green-700">
              INITIATOR
            </h5>
            <p className="mb-3 font-normal text-[#ece8e1]">{description}</p>
          </div>
        </a>
      </div>
      <div>
        <a
          href="#"
          className="flex flex-col items-center bg-[#111111] border border-gray-700  shadow md:flex-row md:w-full hover:bg-black"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-s-lg"
            src={pic}
            alt="Gekko Image"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h3 className="flex mb-2 text-2xl font-bold tracking-tight text-transparent font-valorant bg-clip-text bg-gradient-to-r from-lime-400 to-green-700">
              <img
                className="w-10 h-10 mr-4 -mt-2 border rounded-full border-lime-500"
                src={dataIcon}
                alt=""
              />
              {name}
            </h3>
            <h5 className="flex mb-2 text-lg font-bold tracking-tight text-transparent font-valorant bg-clip-text bg-gradient-to-r from-lime-400 to-green-700">
              INITIATOR
            </h5>
            <p className="mb-3 font-normal text-[#ece8e1]">{description}</p>
          </div>
        </a>
      </div>
      <div>
        <a
          href="#"
          className="flex flex-col items-center bg-[#111111] border border-gray-700  shadow md:flex-row md:w-full hover:bg-black"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-s-lg"
            src={pic}
            alt="Gekko Image"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h3 className="flex mb-2 text-2xl font-bold tracking-tight text-transparent font-valorant bg-clip-text bg-gradient-to-r from-lime-400 to-green-700">
              <img
                className="w-10 h-10 mr-4 -mt-2 border rounded-full border-lime-500"
                src={dataIcon}
                alt=""
              />
              {name}
            </h3>
            <h5 className="flex mb-2 text-lg font-bold tracking-tight text-transparent font-valorant bg-clip-text bg-gradient-to-r from-lime-400 to-green-700">
              INITIATOR
            </h5>
            <p className="mb-3 font-normal text-[#ece8e1]">{description}</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Agents;
