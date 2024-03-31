import React, { useEffect, useState } from 'react'
import GunsCard from '../../components/GunsCard';

const Guns = () => {

  const [gunsData,setGunsData]=useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://valorant-api.com/v1/weapons");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const gunData=data.data
      setGunsData(gunData);
    
    
    } catch (error) {
      // use react hot toast or any other notification library to show error
      console.log("There was a problem fetching the data:", error);
    }
  };
  useEffect(()=>{
    fetchData()
  },[])

  console.log(gunsData)

  return (
    <div>
      {
        gunsData.map((guns,idx)=>(
          <GunsCard guns={guns} key={idx} />
        ))
      }
    </div>
  )
}

export default Guns