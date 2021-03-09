import React from 'react'
import { ReactComponent as Enviar } from '../../assets/enviar.svg'
import styles from './PhotoCommentsForm.module.css'
import { COMMENT_POST } from '../../api'
import useFetch from '../../hooks/useFetch'
import Error from '../../Helpers/Error'

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState('')
  const { request, error } = useFetch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    const { url, options } = await COMMENT_POST(id, { comment }, token)
    const { response, json } = await request(url, options)
    console.log('Json')
    console.log(json)
    if (response.ok) {
      setComments((comments) => [...comments, comment])
      setComment('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        className={styles.textarea}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      {error && <Error error={error} />}
    </form>
  )
}

export default PhotoCommentsForm
