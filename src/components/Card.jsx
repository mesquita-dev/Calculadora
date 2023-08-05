import React from 'react'

const Card = ({ text, typeInput, placeholder, btnText }) => {
  return (
    <div className="bg-[#4510a3] py-6 rounded-lg">
      <p className="text-white text-center text-xl mb-6">{text}</p>

      <div className='flex gap-6 justify-center align-center'>
        <input type={typeInput} placeholder={placeholder} className='p-3 rounded-lg outline-none border-none' />
        <button className="bg-teal-500 px-3 rounded-lg text-black font-semibold">{btnText}</button>
        </div>
    </div>
  )
}

export default Card
