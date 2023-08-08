import React, { useState } from 'react'

const Insurance = ({ onSubmit }) => {
  const [importanciaSegurada, setImportanciaSegurada] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const formatCurrency = (value) => {
    if (!value) return ''

    const numberValue = parseFloat(value.replace(/[^0-9]/g, '')) || 0
    const formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(numberValue / 100)

    return formattedValue
  }

  const handleNext = () => {
    if (!importanciaSegurada.trim()) {
      setErrorMessage('Por favor, preencha a importância segurada')
    } else {
      const formattedValue = importanciaSegurada.replace(/[^0-9]/g, '');
      onSubmit(formattedValue);
    }
  }

  return (
    <div className="rounded-lg bg-[#4510a3] px-4 py-6">
      <p className="mb-6 text-center text-xl text-white">
        Qual a importância segurada?
      </p>

      <div className="align-center flex justify-center gap-6">
        <input
          type="text"
          placeholder="Importância Segurada"
          value={formatCurrency(importanciaSegurada)}
          onChange={(event) => {
            setImportanciaSegurada(event.target.value)
            setErrorMessage('')
          }}
          autoComplete="off"
          className="rounded-lg border-none p-3 outline-none"
        />
        <button
          className="rounded-lg bg-teal-500 px-3 font-bold uppercase text-black"
          onClick={handleNext}
        >
          Avançar
        </button>
      </div>
      {errorMessage && (
         <p className="text-center text-red-500 mt-2">{errorMessage}</p>
      )}
    </div>
  )
}

export default Insurance
