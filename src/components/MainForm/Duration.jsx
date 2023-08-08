import React, { useState } from 'react'

const Duration = ({ onSubmit }) => {
  const [vigencia, setVigencia] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleNext = () => {
    if (!vigencia.trim()) {
      setErrorMessage('Digite a quantidade de dias')
    } else {
      onSubmit(vigencia)
    }
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
          onChange={(event) => {
            setVigencia(event.target.value)
            setErrorMessage('')
          }}
          autoComplete="off"
        />
        <button
          className="rounded-lg bg-teal-500 px-3 font-bold uppercase text-black"
          onClick={handleNext}
        >
          Avançar
        </button>
      </div>
      {errorMessage && (
        <p className='text-center text-red-500 mt-2'>{errorMessage}</p>
      )}
    </div>
  )
}

export default Duration
