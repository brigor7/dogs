import React from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import Error from '../../Helpers/Error'
import Loading from '../../Helpers/Loading'
import styles from './FeedPhotos.module.css'

const FeedPhotos = ({ user, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch()

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 9, user })
      const { json } = await request(url, options)
    }
    fetchPhotos()
  }, [request, user])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    )
  else return null
}

export default FeedPhotos
