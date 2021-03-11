import React from 'react'
import userFetch from '../../hooks/useFetch'
import { GET_STATS } from '../../api'
import Head from '../../Helpers/Head'
import Loading from '../../Helpers/Loading'
import Error from '../../Helpers/Error'

/*Uso de React.lazy para carregar a biblioteca somente quando esta for solicitada pelo usuario e não automaticamente. A forma de importação é diferente, veja abaixo, na construção do html o componente deverá vir envolto do component React.Suspense*/
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'))

const UserStats = () => {
  const { data, error, loading, request } = userFetch()

  React.useEffect(() => {
    async function getData() {
      const token = localStorage.getItem('token')
      const { url, options } = GET_STATS(token)
      await request(url, options)
    }
    getData()
  }, [request])

  loading && <Loading />
  error && <Error error={error} />

  if (data) {
    return (
      <React.Suspense fallback={<div></div>}>
        <Head
          title="Estatística"
          description="Página com estatisticas do usuário"
        />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    )
  } else return null
}

export default UserStats
