import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/login/Login'
import { UserStorage } from './UserContext'
import User from './components/Users/User'
import ProtectedRoute from './Helpers/ProtectedRoute'
import NotFound from './NotFound'
import Photo from './components/Photos/Photo'
import UserProfile from './components/Users/UserProfile'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <ProtectedRoute path="conta/*" element={<User />} />
              <Route path="photo/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
