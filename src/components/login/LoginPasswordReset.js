import React, { useState } from 'react'
import { PASSWORD_RESET } from '../../api'
import Head from '../../Helpers/Head'
import useForm from '../../hooks/useForm'
import Input from '../forms/Input'
import Button from '../forms/Button'
import useFetch from '../../hooks/useFetch'
import Error from '../../Helpers/Error'
import { useNavigate } from 'react-router'

const LoginPasswordReset = () => {
  const [login, setLogin] = useState('')
  const [key, setKey] = useState('')
  const password = useForm('password')
  const { error, loading, request } = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    key && setKey(key)
    login && setLogin(login)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      })
      const { response } = await request(url, options)
      response.ok && navigate('/login')
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Alterar a senha" />
      <h1 className="title">Alterar a senha</h1>

      <form onSubmit={handleSubmit}>
        <Input
          name="password"
          type="password"
          label="Nova Senha"
          {...password}
        />

        {loading ? (
          <Button disabled>Alterando...</Button>
        ) : (
          <Button>Alterar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  )
}

export default LoginPasswordReset
