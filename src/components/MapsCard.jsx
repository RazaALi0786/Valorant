import React from 'react'

const MapsCard = ({map}) => {
  return (
    <>
     <div className='bg-[#111111]'>
       <h1 className='items-center font-valorant text-white'> {
            map.displayName
        }
        </h1>
        <img className='w-full lg:h-screen' src={map.premierBackgroundImage || map.stylizedBackgroundImage || map.splash} alt="bg-img" />
     </div>
    </>
  )
}

export default MapsCard