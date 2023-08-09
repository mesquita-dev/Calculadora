import React, { useState } from 'react'

const CompanySizeStep = ({ onSubmit }) => {
  const [companySize, setCompanySize] = useState('')

  const handleNext = (size) => {
    setCompanySize(size)
    onSubmit(size)
  }

  return (
    <div className="rounded-lg bg-[#4510a3] p-5 lg:py-6 lg:max-w-xl">
      <p className="mb-6 text-center text-xl text-white">
        Qual o porte da sua empresa?
      </p>

      <div className="align-center flex justify-center gap-4">
        <button
          className="text-sm lg:text-base w-20 lg:w-24 rounded-lg bg-teal-500 py-3 font-bold uppercase text-black"
          onClick={() => handleNext('MEI')}
        >
          MEI
        </button>
        <button
          className="text-sm lg:text-base w-20 lg:w-24 rounded-lg bg-teal-500 py-3 font-bold uppercase text-black"
          onClick={() => handleNext('ME')}
        >
          ME
        </button>
        <button
          className="text-sm lg:text-base w-20 lg:w-24 rounded-lg bg-teal-500 py-3 font-bold uppercase text-black"
          onClick={() => handleNext('Média')}
        >
          Média
        </button>
        <button
          className="text-sm lg:text-base w-20 lg:w-24 rounded-lg bg-teal-500 py-3 font-bold uppercase text-black"
          onClick={() => handleNext('Grande')}
        >
          Grande
        </button>
      </div>
    </div>
  )
}

export default CompanySizeStep
