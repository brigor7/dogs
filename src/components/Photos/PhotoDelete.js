import React from 'react'
import { PHOTO_DELETE } from '../../api'
import Error from '../../Helpers/Error'
import useFetch from '../../hooks/useFetch'
import styles from './PhotoDelete.module.css'

const PhotoDelete = ({ id }) => {
  const { loading, error, request } = useFetch()
  const handleClick = async () => {
    const confirm = window.confirm('Confirma a exclusão da foto?')
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id)
      const { response } = await request(url, options)
      if (response.ok) window.location.reload()
    }
  }
  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletando...
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
      <Error error={error} />
    </>
  )
}

export default PhotoDelete
