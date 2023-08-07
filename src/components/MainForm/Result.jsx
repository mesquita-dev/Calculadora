import React from 'react'

const Result = ({ result }) => {
  return (
    <div className="rounded-lg bg-[#4510a3] py-6">
      <h2 className="mb-6 text-center text-xl font-semibold text-white">
        Resultado
      </h2>
      <div className="flex items-center justify-center">
        <p className="text-3xl font-bold text-white">{result}</p>
      </div>
    </div>
  )
}

export default Result
