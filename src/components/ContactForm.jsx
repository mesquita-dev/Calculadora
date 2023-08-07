import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import InputMask from 'react-input-mask'

const ContactForm = () => {
  const form = useForm()
  const { register, control, handleSubmit, formState } = form
  const { errors } = formState

  const onSubmit = (data) => {
    console.log('Form submitted', data)
  }

  return (
    <div>
      <form
        className="flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="flex flex-col lg:mb-2">
          <label
            htmlFor="name"
            className="text-lg font-semibold text-neutral-400 lg:text-2xl"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            placeholder="Ex: João Silva"
            className="mt-2 rounded-md border-none bg-white/10 p-4 text-white outline-none"
            {...register('name', {
              required: {
                value: true,
                message: 'Esse campo é obrigatório',
              },
            })}
          />
          <p className="mt-1 text-red-500">{errors.name?.message}</p>
        </div>

        <div className="flex flex-col lg:mb-2">
          <label
            htmlFor="email"
            className="text-lg font-semibold text-neutral-400 lg:text-2xl"
          >
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ex: seuemail@gmail.com"
            className="mt-2 rounded-md border-none bg-white/10 p-4 text-white outline-none"
            {...register('email', {
              required: 'Esse campo é obrigatório',
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Email inválido',
              },
            })}
          />
          <p className="mt-2 text-red-500">{errors.email?.message}</p>
        </div>

        <div className="flex flex-col lg:mb-2">
          <label
            htmlFor="phone"
            className="text-lg font-semibold text-neutral-400 lg:text-2xl"
          >
            Telefone
          </label>
          <InputMask
            mask="(99) 99999-9999"
            type="tel"
            name="phone"
            id="phone"
            placeholder="Ex: (99) 99999-9999"
            className="mt-2 rounded-md border-none bg-white/10 p-4 text-white outline-none"
            {...register('phone', {
              required: 'Esse campo é obrigatório',
            })}
          />
          <p className="mt-2 text-red-500">{errors.phone?.message}</p>
        </div>

        <button className="mt-2 w-52 rounded-lg border-none bg-teal-500 p-4 font-bold uppercase text-black outline-none">
          Solicitar contato
        </button>
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default ContactForm
