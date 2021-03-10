import React from 'react'
import { useParams } from 'react-router'
import Feed from '../Feed/Feed'

const UserProfile = () => {
  const { user } = useParams()

  return (
    <section className="container mainContainer">
      <h1 className="title" style={{ textTransform: 'capitalize' }}>
        {user}
      </h1>

      <Feed user={user} />
    </section>
  )
}

export default UserProfile
