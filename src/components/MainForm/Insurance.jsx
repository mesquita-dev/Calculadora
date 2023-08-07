import React, { useState } from 'react'

const Insurance = ({ onSubmit }) => {
  const [importanciaSegurada, setImportanciaSegurada] = useState('')

  const formatCurrency = (value) => {
    if (!value) return ''

    const numberValue = parseFloat(value.replace(/[^0-9]/g, '')) || 0
    const formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(numberValue / 100) // Divide por 100 para tratar centavos

    return formattedValue
  }

  const handleNext = () => {
    const formattedValue = importanciaSegurada.replace(/[^0-9]/g, '') // Remove tudo que não é dígito
    onSubmit({ importanciaSegurada: formattedValue })
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
          onChange={(event) => setImportanciaSegurada(event.target.value)}
          className="rounded-lg border-none p-3 outline-none"
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

export default Insurance
