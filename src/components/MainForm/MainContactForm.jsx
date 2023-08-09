import React from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'

const MainContactForm = ({ onSubmit }) => {
  const form = useForm()
  const { register, handleSubmit, formState, setValue } = form
  const { errors } = formState

  const onContactSubmit = (data) => {
    localStorage.setItem('dadosContato', JSON.stringify(data))
    onSubmit(data)
  }

  useEffect(() => {
    const dadosSalvos = localStorage.getItem('dadosContato')

    if (dadosSalvos) {
      const dadosParse = JSON.parse(dadosSalvos)

      setValue('name', dadosParse.name || '')
      setValue('email', dadosParse.email || '')
      setValue('phone', dadosParse.phone || '')
    }
  }, [])

  return (
    <div className="rounded-lg bg-[#4510a3] py-6">
      <p className="mx-auto mb-2 w-96 text-center text-xl font-semibold text-white">
        Para ver seu resultado, diga-nos suas formas de contato
      </p>

      <form
        className="mx-auto flex max-w-md flex-col"
        onSubmit={handleSubmit(onContactSubmit)}
        noValidate
      >
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-lg font-semibold text-neutral-400"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            placeholder="Ex: João Silva"
            autoComplete="off"
            className="mt-2 rounded-md border-none bg-white/10 p-3 text-white outline-none"
            {...register('name', {
              required: {
                value: true,
                message: 'Esse campo é obrigatório',
              },
            })}
          />
          <p className="mt-1 text-red-500">{errors.name?.message}</p>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-lg font-semibold text-neutral-400"
          >
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Ex: seuemail@gmail.com"
            className="mt-2 rounded-md border-none bg-white/10 p-3 text-white outline-none"
            {...register('email', {
              required: 'Esse campo é obrigatório',
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Email inválido',
              },
            })}
          />
          <p className="mt-1 text-red-500">{errors.email?.message}</p>
        </div>

        <div className="mb-2 flex flex-col">
          <label
            htmlFor="phone"
            className="text-lg font-semibold text-neutral-400"
          >
            Telefone
          </label>
          <InputMask
            mask="(99) 99999-9999"
            type="tel"
            name="phone"
            id="phone"
            autoComplete="off"
            placeholder="Ex: (99) 99999-9999"
            className="mt-2 rounded-md border-none bg-white/10 p-3 text-white outline-none"
            {...register('phone', {
              required: 'Esse campo é obrigatório',
            })}
          />
          <p className="mt-1 text-red-500">{errors.phone?.message}</p>
        </div>

        <button
          className="rounded-lg bg-teal-500 px-3 py-3 font-bold uppercase text-black"
          type="submit"
        >
          Ver resultado
        </button>
      </form>
    </div>
  )
}

export default MainContactForm
