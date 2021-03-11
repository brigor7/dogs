import React from 'react'
import styles from './UserStatsGraphs.module.css'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([])
  const [total, setTotal] = React.useState(0)

  React.useEffect(() => {
    setGraph(
      data.map((item) => {
        return {
          x: item.title,
          y: Number(item.acessos),
        }
      }),
    )
    setTotal(data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b))
  }, [])

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>

      <div className={styles.graphItem}>
        <VictoryPie
          data={graph}
          innerRadius={80}
          padding={{ top: 20, bottom: 20, left: 90, right: 90 }}
          style={{
            data: {
              fillOpacity: 0.7,
              stroke: '#fff',
              strokeWidth: 4,
            },
            labels: {
              fontSize: 10,
              fill: '#444',
            },
          }}
        />
      </div>

      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  )
}

export default UserStatsGraphs
