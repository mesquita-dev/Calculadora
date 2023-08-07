import React, { useState } from 'react'

const CompanySizeStep = ({ onSubmit }) => {
  const [companySize, setCompanySize] = useState('')

  const handleNext = (size) => {
    setCompanySize(size)
    onSubmit(size)
  }

  return (
    <div className="rounded-lg bg-[#4510a3] py-6">
      <p className="mb-6 text-center text-xl text-white">
        Qual o porte da sua empresa?
      </p>

      <div className="align-center flex justify-center gap-4">
        <button
          className="w-24 rounded-lg bg-teal-500 py-3 font-bold uppercase text-black"
          onClick={() => handleNext('MEI')}
        >
          MEI
        </button>
        <button
          className="w-24 rounded-lg bg-teal-500 px-3 font-bold uppercase text-black"
          onClick={() => handleNext('ME')}
        >
          ME
        </button>
        <button
          className="w-24 rounded-lg bg-teal-500 px-3 font-bold uppercase text-black"
          onClick={() => handleNext('Média')}
        >
          Média
        </button>
        <button
          className="w-24 rounded-lg bg-teal-500 px-3 font-bold uppercase text-black"
          onClick={() => handleNext('Grande')}
        >
          Grande
        </button>
      </div>
    </div>
  )
}

export default CompanySizeStep
