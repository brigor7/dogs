import React from 'react'
import { useParams } from 'react-router'
import Head from '../../Helpers/Head'
import Feed from '../Feed/Feed'

const UserProfile = () => {
  const { user } = useParams()

  return (
    <section className="container mainContainer">
      <Head
        title={`Fotos de ${user}`}
        description="Página com as fotos postadas pelo usuário"
      />
      <h1 className="title" style={{ textTransform: 'capitalize' }}>
        {user}
      </h1>

      <Feed user={user} />
    </section>
  )
}

export default UserProfile
