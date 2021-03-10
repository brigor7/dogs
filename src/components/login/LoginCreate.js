import React, { useContext } from 'react'
import style from './LoginForm.module.css'
import Input from '../forms/Input'
import Button from '../forms/Button'
import Error from '../../Helpers/Error'
import { UserContext } from '../../UserContext'
import useForm from '../../hooks/useForm'
import { USER_POST } from '../../api'
import useFetch from '../../hooks/useFetch'
import Head from '../../Helpers/Head'

const LoginCreate = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm('password')
  const { userLogin } = useContext(UserContext)
  const { loading, error, request } = useFetch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (username.validate() && password.validate()) {
      const { url, options } = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      })
      const { response } = await request(url, options)
      if (response.ok) userLogin(username.value, password.value)
    }
  }

  return (
    <section className="animeLeft">
      <Head
        title="Cadastre-se"
        description="Novo cadastro em nossa plataforma"
      />
      <h1 className="title">Cadastre-se</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="usuario" {...username} />
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  )
}

export default LoginCreate
