import React from 'react'

const CharacterCard = ({
    fullName, imageUrl
}) => {
  return (
    <div className=" cursor-pointer hover:scale-105 transition-all duration-200 border-white border-2 w-fit m-2 rounded-xl overflow-hidden">
        <img className='h-48 w-52 object-cover' src={imageUrl} alt={fullName} />
        <p className='font-semibold p-2 text-center text-lg text-white'>{fullName}</p>
    </div>
  )
}

export default CharacterCard
