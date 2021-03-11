import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import useFetch from '../../hooks/useFetch'
import Input from '../forms/Input'
import Button from '../forms/Button'
import Error from '../../Helpers/Error'
import Head from '../../Helpers/Head'
import { PASSWORD_RESET } from '../../api'

const LoginPasswordLost = () => {
  const login = useForm()
  const { data, loading, error, request } = useFetch()
  console.log('login', login.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (login.validate()) {
      const { url, options } = await PASSWORD_RESET({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      })
      const { json } = await request(url, options)
      console.log('json', json)
    }
  }

  return (
    <section>
      <Head title="Perdeu a senha?" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p
          style={{
            backgroundColor: '#4c1',
            color: 'white',
            textAlign: 'center',
            fontSize: '1.375rem',
            padding: '1rem 0',
            marginTop: '4rem',
          }}
        >
          Email enviado com sucesso!
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginTop: '4rem' }}>
          <Input name="login" label="Email ou Usuário" type="text" {...login} />

          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  )
}

export default LoginPasswordLost
