import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
import InputMask from 'react-input-mask';


const ContactForm = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log('Form submitted', data)
  }

  return (
    <div>
      <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='flex flex-col mb-2'>
          <label htmlFor="name" className='text-neutral-400 text-2xl font-semibold'>Nome</label>
          <input type="text" id="name" placeholder='Ex: João Silva' className='mt-2 p-4 bg-white/10 rounded-md border-none outline-none text-white'
            {...register("name", {
              required: {
                value: true,
                message: 'Esse campo é obrigatório',
              }
            })}
          />
          <p className='text-red-500 mt-2'>{errors.name?.message}</p>
        </div>

        <div className='flex flex-col mb-2'>
          <label htmlFor="email" className='text-neutral-400 text-2xl font-semibold'>E-mail</label>
          <input type="email" name='email' id='email' placeholder='Ex: seuemail@gmail.com' className='mt-2 p-4 bg-white/10 rounded-md border-none outline-none text-white'
            {...register("email", {
              required: "Esse campo é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Email inválido',
              }
            })}
          />
          <p className='text-red-500 mt-2'>{errors.email?.message}</p>
        </div>

        <div className='flex flex-col mb-2'>
          <label htmlFor="phone" className='text-neutral-400 text-2xl font-semibold'>Telefone</label>
          <InputMask
            mask="(99) 99999-9999"
            type="tel"
            name="phone"
            id="phone"
            placeholder='Ex: (99) 99999-9999'
            className='mt-2 p-4 bg-white/10 rounded-md border-none outline-none text-white'
            {...register("phone", {
              required: 'Esse campo é obrigatório'
            })}
          />
          <p className='text-red-500 mt-2'>{errors.phone?.message}</p>
        </div>


        <button className='p-4 bg-teal-500 mt-2 w-52 rounded-lg text-white font-bold uppercase border-none outline-none'>Solicitar contato</button>
      </form>
      <DevTool control={control} />
    </div>

  )
}

export default ContactForm
