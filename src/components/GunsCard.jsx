

const GunsCard = ({ guns }) => {
  return (
    <div key={guns?.uuid}>
      <div className="flex flex-col md:justify-between m-0 p-0 items-center bg-[#111111] border border-gray-700  shadow md:flex-row md:w-full hover:bg-black"
       
      >
         <div className=" md:flex gap-9 md:gap-16">
          <img
            className="object-cover h-24 w-full rounded-t-lg md:h-auto md:w-72 md:rounded-none md:rounded-s-lg"
            src={guns?.skins[0]?.displayIcon}
            alt="Gekko Image"
          />
          
        </div>



        <div className=" md:flex gap-9 md:gap-16">
          
          <img
            className="mt-5 object-cover h-24 w-full rounded-t-lg md:h-auto md:w-72 md:rounded-none md:rounded-s-lg"
            src={guns?.skins[1]?.displayIcon}
            alt="Gekko Image"
          />
        </div>


        <div className="flex m-0 flex-col justify-between px-4 py-2 leading-normal text-[#ece8e1]">
          
          <h3 className="flex mb-2 text-2xl font-bold tracking-tight font-valorant ">
            <img
              className="w-10 h-10 mr-4 -mt-2 border rounded-full border-lime-500 "
              src={guns?.displayIcon}
              alt=""
            />
            {guns?.displayName}
          </h3>
         <div className="flex gap-5 md:gap-14 mt-2 md:mt-4">
         <h5 className="flex mb-2 text-lg font-bold tracking-tight font-valorant ">
           Cost - {guns?.shopData?.cost || "500"} 
          </h5>
          <p className="mb-3 font-normal font-valorant">{guns?.shopData?.category}</p>
         </div>
        
          <div className="flex gap-10 font-valorant">
            <h2>FireRate - {guns?.weaponStats?.fireRate}</h2>
            <p>MagazineSize - {guns?.weaponStats?.magazineSize}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default GunsCard;
