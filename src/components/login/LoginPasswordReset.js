import React, { useState } from 'react'
import Head from '../../Helpers/Head'

const LoginPasswordReset = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section>
      <Head title="Reset a senha" />
      <h1>Login Reset</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          valuer={username}
          onChange={({ target }) => setUsername(target.value)}
          placeholder="Username"
        />
        <input
          type="passoword"
          valuer={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="Senha"
        />
        <button>Entrar</button>
      </form>
    </section>
  )
}

export default LoginPasswordReset
