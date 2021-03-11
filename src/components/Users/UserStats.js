import React from 'react'
import userFetch from '../../hooks/useFetch'
import { GET_STATS } from '../../api'
import Head from '../../Helpers/Head'
import Loading from '../../Helpers/Loading'
import Error from '../../Helpers/Error'
import UserStatsGraphs from './UserStatsGraphs'

const UserStats = () => {
  const { data, error, loading, request } = userFetch()

  React.useEffect(() => {
    async function getData() {
      const token = localStorage.getItem('token')
      const { url, options } = GET_STATS(token)
      const { json } = await request(url, options)
    }
    getData()
  }, [request])

  loading && <Loading />
  error && <Error error={error} />

  if (data) {
    return (
      <div>
        <Head
          title="Estatística"
          description="Página com estatisticas do usuário"
        />
        <UserStatsGraphs data={data} />
      </div>
    )
  } else return null
}

export default UserStats
