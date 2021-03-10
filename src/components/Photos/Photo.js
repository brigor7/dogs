import React from 'react'
import { useParams } from 'react-router'
import { PHOTO_GET } from '../../api'
import Error from '../../Helpers/Error'
import Head from '../../Helpers/Head'
import Loading from '../../Helpers/Loading'
import useFetch from '../../hooks/useFetch'
import PhotoContent from './PhotoContent'

const Photo = () => {
  const { id } = useParams()
  const { data, loading, error, request } = useFetch()

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id)
    request(url, options)
  }, [request, id])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent data={data} single={true} />
      </section>
    )
  else return null
}

export default Photo
