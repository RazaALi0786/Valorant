

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Agents = () => {

  const [dataIcon, setDataIcon] = useState('')
  const [name, setName] = useState('');
  const [pic, setPic] = useState('');
  const [description, setDescription] = useState('');


  const getData = () => {
    axios.get('https://valorant-api.com/v1/agents')
      .then(res => {
        console.log(res.data.data[0].displayIcon)
        setDataIcon(res.data.data[0].displayIcon);
        setName(res.data.data[0].displayName)
        setPic(res.data.data[0].fullPortraitV2)
        setDescription(res.data.data[0].description)
      }).catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      <div class="max-w-xs rounded overflow-hidden shadow-lg bg-black ">
        <div class="relative">
          <img class="w-full" src={pic} alt="Placeholder image" />
        </div>
        <div class="px-6 py-4">
          <div class="text-white text-3xl mb-2 font-valorant">{name}</div>
          <p class="text-gray-200 font-valorant text-sm">
            {description}
          </p>
        </div>
        <div class="pl-4 flex items-center">
          <img class="w-10 h-10 rounded-full mr-4" src={dataIcon} alt="Avatar" />
          <div class="text-sm">
            <p class="text-gray-400 leading-none ">{name}</p>
            <p class="text-gray-600 font-valorant">Valo</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Agents