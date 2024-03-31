import React, { useEffect, useState } from 'react'
import MapsCard from '../../components/MapsCard';

const Maps = () => {
  const [mapData,setMapData]=useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://valorant-api.com/v1/maps");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const gunData=data.data
      setMapData(gunData);
    
    
    } catch (error) {
      // use react hot toast or any other notification library to show error
      console.log("There was a problem fetching the data:", error);
    }
  };
  useEffect(()=>{
    fetchData()
  },[])

  console.log(mapData)
  
  return (
    <div>
      {
        mapData.map((map,idx)=>(
          <MapsCard map={map} key={idx} />
        ))
      }
    </div>
  )
}

export default Maps