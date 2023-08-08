import React from 'react'

const Result = ({ result, onRefazerCalculo }) => {
  const sendMessage = () => {
    const message = encodeURIComponent(`Oie, tudo bem? Vi a calculadora de vocês e gostaria de tirar uma dúvida. Você pode me ajudar?`)
    const phoneNumber = '+553433168055'

    const urlWhatsapp = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(urlWhatsapp, '_blank')
  }

  return (
    <div className="rounded-lg bg-[#4510a3] py-6">
      <h2 className="mb-2 text-center text-4xl font-bold text-white">
        Seu resultado <br /> {result}
      </h2>

      <p className='text-center text-white mb-4'>Viu como é rápido? Receba uma proposta com a mesma velocidade deste cálculo, entre em contato.</p>

      <div className='flex justify-center gap-6'>
        <button className='rounded-lg bg-neutral-300 px-4 py-3 font-bold uppercase text-neutral-600'>
          Refazer Cálculo
        </button>

        <button className='rounded-lg bg-teal-500 px-4 py-3 font-bold uppercase text-black' onClick={sendMessage}>
          WhatsApp
        </button>
      </div>
    </div>
  )
}

export default Result
