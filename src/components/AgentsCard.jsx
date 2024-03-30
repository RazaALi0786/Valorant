import PropTypes from "prop-types";

const AgentsCard = ({ agent }) => {
  return (
    <div key={agent?.uuid}>
      <div
        href="#"
        className="flex flex-col m-0 p-0 items-center bg-[#111111] border border-gray-700  shadow md:flex-row md:w-full hover:bg-black"
        style={{
          background: `linear-gradient(45deg, #${agent.backgroundGradientColors[0]}, #${agent.backgroundGradientColors[2]}, #${agent.backgroundGradientColors[1]}, #${agent.backgroundGradientColors[3]})`,
        }}
      >
        <div className="">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-s-lg"
            src={agent?.fullPortraitV2}
            alt="Gekko Image"
          />
        </div>
        <div className="flex m-0 flex-col justify-between px-4 py-2 leading-normal text-[#ece8e1]">
          <h3 className="flex mb-2 text-2xl font-bold tracking-tight font-valorant ">
            <img
              className="w-10 h-10 mr-4 -mt-2 border rounded-full border-lime-500 "
              src={agent?.displayIcon}
              alt=""
            />
            {agent?.displayName}
          </h3>
          <h5 className="flex mb-2 text-lg font-bold tracking-tight font-valorant ">
            {agent?.role?.displayName}
          </h5>
          <p className="mb-3 font-normal ">{agent?.description}</p>
        </div>
      </div>
    </div>
  );
};
AgentsCard.propTypes = {
  agent: PropTypes.shape({
    backgroundGradientColors: PropTypes.arrayOf(PropTypes.string).isRequired,
    // Other prop types...
    fullPortraitV2: PropTypes.string,
    displayIcon: PropTypes.string,
    displayName: PropTypes.string,
    description: PropTypes.string,
    role: PropTypes.shape({
      displayName: PropTypes.string,
    }),
    uuid: PropTypes.string,
  }).isRequired,
};

export default AgentsCard;
