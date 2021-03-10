import React from 'react'
import UserHeader from './UserHeader'
import { Routes, Route } from 'react-router-dom'
import UserStats from './UserStats'
import UserPhotoPost from './UserPhotoPost'
import Feed from '../Feed/Feed'
import { UserContext } from '../../UserContext'
import Head from '../../Helpers/Head'

const User = () => {
  const { data } = React.useContext(UserContext)

  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatistica" element={<UserStats />} />
      </Routes>
    </section>
  )
}

export default User
