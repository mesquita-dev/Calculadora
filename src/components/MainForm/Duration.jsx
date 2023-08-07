import React, { useState } from 'react'

const Duration = ({ onSubmit }) => {
  const [vigencia, setVigencia] = useState('')

  const handleNext = () => {
    onSubmit(vigencia)
  }

  return (
    <div className="rounded-lg bg-[#4510a3] py-6">
      <p className="mb-6 text-center text-xl text-white">
        Qual o período de vigência? (em dias)
      </p>

      <div className="align-center flex justify-center gap-6">
        <input
          className="rounded-lg border-none p-3 outline-none"
          type="text"
          placeholder="Vigência em dias"
          value={vigencia}
          onChange={(event) => setVigencia(event.target.value)}
        />
        <button
          className="rounded-lg bg-teal-500 px-3 font-bold uppercase text-black"
          onClick={handleNext}
        >
          Avançar
        </button>
      </div>
    </div>
  )
}

export default Duration
