import React, { useState } from 'react'
import FeedPhotos from './FeedPhotos'
import FeedModal from './FeedModal'

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = useState(null)
  const [pages, setPages] = useState([1])

  const [infinite, setInfinite] = useState(true) //state para permitir trazer mais dados da API ou não

  React.useEffect(() => {
    let wait = false //Pausa para carregar novas imagens
    function infiniteScroll(event) {
      if (infinite) {
        const scroll = window.scrollY //total de scroll dado pelo usuario
        const height = document.body.offsetHeight - window.innerHeight

        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1])
          wait = true
          setTimeout(() => {
            wait = false
          }, 500)
        }
      }
    }
    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)
    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  }, [infinite])

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModal={setModalPhoto} />}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  )
}

export default Feed
